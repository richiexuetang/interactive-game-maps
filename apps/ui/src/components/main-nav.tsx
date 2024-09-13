import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { ZapIcon } from "./icons/zap-icon";
import { ModeToggle } from "./mode-toggle";

export function MainNav() {
  return (
    <Navbar isBordered className="z-[500]">
      <NavbarBrand>
        <Link href="/">
          <ZapIcon />
          <p className="font-bold pl-3">Ritcher Map</p>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <ModeToggle />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
