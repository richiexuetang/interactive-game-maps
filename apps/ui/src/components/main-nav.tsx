import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link as UiLink,
} from "@nextui-org/react";
import { ZapIcon } from "./icons/zap-icon";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "./ui/button";

export function MainNav() {
  return (
    <Navbar isBordered className="z-[500]">
      <NavbarBrand>
        <UiLink href="/">
          <ZapIcon />
          <p className="font-bold pl-3">Ritcher Map</p>
        </UiLink>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link
            href="/login"
            className={buttonVariants({ variant: "outline" })}
          >
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/signup"
            className={buttonVariants({ variant: "default" })}
          >
            Sign up
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ModeToggle />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
