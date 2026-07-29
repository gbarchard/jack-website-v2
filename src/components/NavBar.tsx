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
      {/* @ts-expect-error component does recognize link props */}
      <NavbarBrand as={Link} to="/" className="font-georgia">
        TESKE<span className="text-red-500">ART</span>
      </NavbarBrand>
      <NavbarCollapse>
        {/* @ts-expect-error component does recognize link props */}
        <NavbarLink as={Link} to="work" className="font-georgia">
          Work
        </NavbarLink>
        {/* @ts-expect-error component does recognize link props */}
        <NavbarLink as={Link} to="comic" className="font-georgia">
          Comic
        </NavbarLink>
        {/* @ts-expect-error component does recognize link props */}
        <NavbarLink as={Link} to="?contact" className="font-georgia">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
