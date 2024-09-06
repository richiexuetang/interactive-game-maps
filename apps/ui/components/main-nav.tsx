import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link as UiLink,
} from "@nextui-org/react";
import { ZapIcon } from "./icons/zap-icon";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export function MainNav() {
  return (
    <Navbar>
      <NavbarBrand>
        <UiLink href="/">
          <ZapIcon />
          <p className="font-bold pl-3">Ritcher Map</p>
        </UiLink>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">
            <Button variant="bordered" radius="md">
              Login
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button radius="md">Sign up</Button>
        </NavbarItem>
        <NavbarItem>
          <ModeToggle />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
