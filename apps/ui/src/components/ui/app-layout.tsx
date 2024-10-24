"use client";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/IconButton";
import * as React from "react";
import { AppHeader } from "./header";
import { BmcIcon } from "../icons/bmc-icon";
import {
  Content,
  Footer,
  Header,
  Root,
  applyHeaderStyles,
  layoutClasses,
  toggleTemporaryEdgeSidebar,
} from "../layout";

export const AppLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <Root>
      <Header
        sx={{
          ...applyHeaderStyles({
            height: { xs: "56px", md: "64px" },
            fullWidth: "md",
          }),
          position: { xs: "sticky", md: "relative" },
          backgroundColor: "#232528",
        }}
      >
        <AppHeader
          trigger={
            <IconButton
              className={layoutClasses.TemporaryEdgeSidebarTrigger}
              onClick={() => {
                toggleTemporaryEdgeSidebar();
              }}
              component="div"
            >
              {/* @ts-ignore */}
              <Menu />
            </IconButton>
          }
        />
      </Header>
      <Content>{children}</Content>
      <Footer>
        <div className="bg-gray-900">
          <div className="max-w-2xl mx-auto text-white py-10">
            <div className="text-center">
              <div className="flex justify-center my-5">
                <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2 cursor-pointer">
                  <BmcIcon
                    onClick={() =>
                      window.open(
                        "https://buymeacoffee.com/ritchermap",
                        "_blank"
                      )
                    }
                  />
                </div>
              </div>
            </div>
            <div className="mt-14 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
              <p className="order-2 md:order-1 mt-8 md:mt-0">
                &copy; Ritcher Interactive Map, 2024.
              </p>
              <div className="order-1 md:order-2 cursor-pointer">
                <span
                  className="px-2"
                  onClick={() =>
                    window.open(
                      "https://github.com/richiexuetang/interactive-game-maps",
                      "_blank"
                    )
                  }
                >
                  Github
                </span>
                <span
                  className="px-2 border-l cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/richardxuetang",
                      "_blank"
                    )
                  }
                >
                  LinkedIn
                </span>
                <span
                  className="px-2 border-l cursor-pointer"
                  onClick={() =>
                    window.open("https://rebsite-eight.vercel.app", "_blank")
                  }
                >
                  About me
                </span>
              </div>
            </div>
          </div>
        </div>
      </Footer>
    </Root>
  );
};
