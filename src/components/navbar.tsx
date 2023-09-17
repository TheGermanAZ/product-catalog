"use client";
import Link from "next/link";
import { MainNav } from "./main-nav";

export interface NavbarProps {}

export const Navbar = (props: NavbarProps) => {
  return (
    <>
      <header>
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <MainNav />
          </div>
        </nav>
      </header>
    </>
  );
};
