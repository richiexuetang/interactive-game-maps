/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import {
  usePathname,
  useSearchParams,
  useRouter as useNextRouter,
} from "next/navigation";
import NProgress from "nprogress";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { getAnchorProperty } from "@/lib/ui/get-anchor-property";
import { isSameURL, isSameURLWithoutSearch } from "@/lib/ui/same-url";

export interface NProgressOptions {
  minimum?: number;
  template?: string;
  easing?: string;
  speed?: number;
  trickle?: boolean;
  trickleSpeed?: number;
  parent?: string;
  positionUsing?: string;
  barSelector?: string;
  spinnerSelector?: string;
}

export interface RouterNProgressOptions {
  showProgressBar?: boolean;
  startPosition?: number;
  disableSameURL?: boolean;
}

/**
 * @param color Color of the progress bar. @default #0A2FFF
 * @param height Height of the progress bar. @default 2px
 * @param options NProgress options. @default undefined
 * @param shallowRouting If the progress bar is not displayed when you use shallow routing - @default false
 * @param startPosition The position of the progress bar at the start of the page load - @default 0
 * @param delay When the page loads faster than the progress bar, it does not display - @default 0
 * @param stopDelay Delay to stop the progress bar - @default 0
 * @param style Custom css - @default undefined
 * @param nonce Custom nonce for Content-Security-Policy directives - @default undefined
 * @param shouldCompareComplexProps If you want to compare props in the React.memo return - @default false
 * @param targetPreprocessor If you want to./AppProgressBaress the target URL - @default undefined
 * @param disableAnchorClick Disable triggering progress bar on anchor clicks - @default false
 */
export interface ProgressBarProps {
  color?: string;
  height?: string;
  options?: Partial<NProgressOptions>;
  shallowRouting?: boolean;
  disableSameURL?: boolean;
  startPosition?: number;
  delay?: number;
  stopDelay?: number;
  style?: string;
  nonce?: string;
  memo?: boolean;
  shouldCompareComplexProps?: boolean;
  targetPreprocessor?: (url: URL) => URL;
  disableAnchorClick?: boolean;
}

type PushStateInput = [
  data: any,
  unused: string,
  url?: string | URL | null | undefined
];

export const AppProgressBar = React.memo(
  ({
    color = "#0A2FFF",
    height = "2px",
    options,
    shallowRouting = false,
    disableSameURL = true,
    startPosition = 0,
    delay = 0,
    stopDelay = 0,
    style,
    nonce,
    targetPreprocessor,
    disableAnchorClick = false,
  }: ProgressBarProps) => {
    const styles = (
      <style nonce={nonce}>
        {style ||
          `
          #nprogress {
            pointer-events: none;
          }

          #nprogress .bar {
            background: ${color};

            position: fixed;
            z-index: 99999;
            top: 0;
            left: 0;

            width: 100%;
            height: ${height};
          }

          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
            opacity: 1.0;

            -webkit-transform: rotate(3deg) translate(0px, -4px);
                -ms-transform: rotate(3deg) translate(0px, -4px);
                    transform: rotate(3deg) translate(0px, -4px);
          }

          .nprogress-custom-parent {
            overflow: hidden;
            position: relative;
          }

          .nprogress-custom-parent #nprogress .bar {
            position: absolute;
          }
        `}
      </style>
    );

    NProgress.configure(options || {});

    let progressDoneTimer: any;

    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
      if (progressDoneTimer) clearTimeout(progressDoneTimer);
      progressDoneTimer = setTimeout(() => {
        NProgress.done();
      }, stopDelay);
    }, [pathname, searchParams]);

    const elementsWithAttachedHandlers = useRef<
      (HTMLAnchorElement | SVGAElement)[]
    >([]);
    useEffect(() => {
      if (disableAnchorClick) {
        return;
      }

      let timer: any;

      const startProgress = () => {
        timer = setTimeout(() => {
          if (startPosition > 0) NProgress.set(startPosition);
          NProgress.start();
        }, delay);
      };

      const stopProgress = () => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          NProgress.done();
        }, stopDelay);
      };

      const handleAnchorClick = (event: any) => {
        // Skip preventDefault
        if (event.defaultPrevented) return;

        const anchorElement = event.currentTarget as
          | HTMLAnchorElement
          | SVGAElement;
        const target = event.target as HTMLElement | Element;
        let preventProgress =
          target?.getAttribute("data-prevent-nprogress") === "true" ||
          anchorElement?.getAttribute("data-prevent-nprogress") === "true";

        if (!preventProgress) {
          let element: HTMLElement | Element | null = target;

          while (element && element.tagName.toLowerCase() !== "a") {
            if (
              element.parentElement?.getAttribute("data-prevent-nprogress") ===
              "true"
            ) {
              preventProgress = true;
              break;
            }
            element = element.parentElement;
          }
        }

        if (preventProgress) return;

        const anchorTarget = getAnchorProperty(anchorElement, "target");
        // Skip anchors with target="_blank"
        if (anchorTarget === "_blank") return;

        // Skip control/command/option/alt+click
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
          return;

        const targetHref = getAnchorProperty(anchorElement, "href");
        const targetUrl = targetPreprocessor
          ? targetPreprocessor(new URL(targetHref))
          : new URL(targetHref);
        const currentUrl = new URL(location.href);

        if (
          shallowRouting &&
          isSameURLWithoutSearch(targetUrl, currentUrl) &&
          disableSameURL
        )
          return;
        if (isSameURL(targetUrl, currentUrl) && disableSameURL) return;

        startProgress();
      };

      const handleMutation: any = () => {
        const anchorElements = Array.from(document.querySelectorAll("a")) as (
          | HTMLAnchorElement
          | SVGAElement
        )[];

        const validAnchorElements = anchorElements.filter((anchor) => {
          const href = getAnchorProperty(anchor, "href");
          const isNProgressDisabled =
            anchor.getAttribute("data-disable-nprogress") === "true";
          const isNotTelOrMailto =
            href &&
            !href.startsWith("tel:") &&
            !href.startsWith("mailto:") &&
            !href.startsWith("blob:") &&
            !href.startsWith("javascript:");

          return (
            !isNProgressDisabled &&
            isNotTelOrMailto &&
            getAnchorProperty(anchor, "target") !== "_blank"
          );
        });

        validAnchorElements.forEach((anchor) => {
          anchor.addEventListener("click", handleAnchorClick, true);
        });
        elementsWithAttachedHandlers.current = validAnchorElements;
      };

      const mutationObserver = new MutationObserver(handleMutation);
      mutationObserver.observe(document, { childList: true, subtree: true });

      const originalWindowHistoryPushState = window.history.pushState;
      window.history.pushState = new Proxy(window.history.pushState, {
        apply: (target, thisArg, argArray: PushStateInput) => {
          stopProgress();
          return target.apply(thisArg, argArray);
        },
      });

      return () => {
        mutationObserver.disconnect();
        elementsWithAttachedHandlers.current.forEach((anchor) => {
          anchor.removeEventListener("click", handleAnchorClick, true);
        });
        elementsWithAttachedHandlers.current = [];
        window.history.pushState = originalWindowHistoryPushState;
      };
    }, [
      disableAnchorClick,
      targetPreprocessor,
      shallowRouting,
      disableSameURL,
    ]);

    return styles;
  },
  (prevProps, nextProps) => {
    if (nextProps?.memo === false) {
      return false;
    }

    if (!nextProps?.shouldCompareComplexProps) {
      return true;
    }

    return (
      prevProps?.color === nextProps?.color &&
      prevProps?.height === nextProps?.height &&
      prevProps?.shallowRouting === nextProps?.shallowRouting &&
      prevProps?.startPosition === nextProps?.startPosition &&
      prevProps?.delay === nextProps?.delay &&
      prevProps?.disableSameURL === nextProps?.disableSameURL &&
      prevProps?.stopDelay === nextProps?.stopDelay &&
      prevProps?.nonce === nextProps?.nonce &&
      JSON.stringify(prevProps?.options) ===
        JSON.stringify(nextProps?.options) &&
      prevProps?.style === nextProps?.style &&
      prevProps.disableAnchorClick === nextProps.disableAnchorClick
    );
  }
);

AppProgressBar.displayName = "AppProgressBar";

export function useRouter() {
  const router = useNextRouter();

  const startProgress = useCallback(
    (startPosition?: number) => {
      if (startPosition && startPosition > 0) NProgress.set(startPosition);
      NProgress.start();
    },
    [router]
  );

  const progress = useCallback(
    (
      href: string,
      options?: NavigateOptions,
      NProgressOptions?: RouterNProgressOptions
    ) => {
      if (NProgressOptions?.showProgressBar === false) {
        return router.push(href, options);
      }

      const currentUrl = new URL(location.href);
      const targetUrl = new URL(href, location.href);

      if (
        isSameURL(targetUrl, currentUrl) &&
        NProgressOptions?.disableSameURL !== false
      )
        return router.push(href, options);

      startProgress(NProgressOptions?.startPosition);
    },
    [router]
  );

  const push = useCallback(
    (
      href: string,
      options?: NavigateOptions,
      NProgressOptions?: RouterNProgressOptions
    ) => {
      progress(href, options, NProgressOptions);
      return router.push(href, options);
    },
    [router, startProgress]
  );

  const replace = useCallback(
    (
      href: string,
      options?: NavigateOptions,
      NProgressOptions?: RouterNProgressOptions
    ) => {
      progress(href, options, NProgressOptions);
      return router.replace(href, options);
    },
    [router, startProgress]
  );

  const back = useCallback(
    (NProgressOptions?: RouterNProgressOptions) => {
      if (NProgressOptions?.showProgressBar === false) return router.back();

      startProgress(NProgressOptions?.startPosition);

      return router.back();
    },
    [router]
  );

  const enhancedRouter = useMemo(() => {
    return { ...router, push, replace, back };
  }, [router, push, replace, back]);

  return enhancedRouter;
}
