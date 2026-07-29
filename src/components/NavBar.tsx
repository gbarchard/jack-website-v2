import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar className="dark:border-b dark:bg-black">
      <NavbarBrand>
        TESKE<span className="text-red-500">ART</span>
      </NavbarBrand>
      <NavbarCollapse>
        <NavbarLink as={Link} to="work">
          Work
        </NavbarLink>
        <NavbarLink>Comic</NavbarLink>
        <NavbarLink>Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
