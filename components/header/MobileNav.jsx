"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className={"flex justify-center items-center"}>
        <CiMenuFries className={"text-[32px] text-accent"} />
      </SheetTrigger>
      <SheetContent className={"flex flex-col "}>
        <SheetHeader>
          <SheetTitle>
            <div className={"mt-32 mb-40 text-center text-2xl"}>
              <Link href={"/"}>
                <h1 className={"text-4xl text-white font-semibold"}>
                  Sinisa<span className={"text-accent"}>.</span>
                </h1>
              </Link>
            </div>
          </SheetTitle>
          <SheetDescription></SheetDescription>

          <nav className={"flex flex-col justify-center items-center gap-8"}>
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`${
                  pathname === link.path &&
                  "text-accent border-b-2 border-accent"
                } capitalize font-medium hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
