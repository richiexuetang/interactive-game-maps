"use client";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Divider from "@mui/material/Divider";
import * as React from "react";
import { useMapStore } from "@/store";
import {
  Content,
  EdgeSidebar,
  EdgeSidebarContent,
  Root,
  applyEdgeSidebarStyles,
  layoutClasses,
  toggleEdgeSidebarCollapse,
} from "../layout";

export const MapPageLayout = ({ children }: React.PropsWithChildren) => {
  const currentMap = useMapStore((state) => state.currentMap);

  if (!currentMap) return;

  return (
    <Root>
      <EdgeSidebar
        sx={(theme) => ({
          ...applyEdgeSidebarStyles({
            theme,
            config: {
              xs: {
                variant: "temporary",
              },
              sm: {
                variant: "permanent",
                expandOnHover: true,
                autoCollapse: "sm",
                collapsedWidth: "56px",
              },
            },
          }),
        })}
      >
        <EdgeSidebarContent sx={{ containerType: "inline-size" }}>
          <Box
            sx={{
              p: 2,
              textAlign: "center",
              fontSize: "1.25rem",
              fontWeight: "bold",
              "& > span": {
                display: {
                  "@": "none",
                  "@200": "initial",
                },
              },
              "&::before": {
                content: {
                  "@": '"SK"',
                  "@200": '""',
                },
              },
            }}
          >
            {/* <Link href={`/game/${game?.slug}`}>
              <Image
                src={`/images/games/${game?.slug}/logo-512.png`}
                width="360"
                height="70"
                alt="sidebar logo"
                className="cursor-pointer"
                priority
              />
            </Link> */}
          </Box>
          <Divider />
          <Box sx={{ minHeight: 0, overflow: "auto" }}>
            <Box sx={{ height: 2000 }} />
          </Box>
          <Divider sx={{ mt: "auto" }} />
          <ButtonBase
            className={layoutClasses.EdgeSidebarCollapser}
            sx={{ height: 48, flex: "none" }}
            onClick={(event) => toggleEdgeSidebarCollapse({ event })}
          >
            <KeyboardArrowRight
              className={layoutClasses.EdgeSidebarCollapsedVisible}
            />
            <span className={layoutClasses.EdgeSidebarUncollapsedVisible}>
              Collapse sidebar
            </span>
          </ButtonBase>
        </EdgeSidebarContent>
      </EdgeSidebar>
      <Content>{children}</Content>
    </Root>
  );
};
