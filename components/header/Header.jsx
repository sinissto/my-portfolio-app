import Link from "next/link";
import Nav from "@/components/header/Nav";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/header/MobileNav";

const Header = () => {
  return (
    <header className={"py-8 xl:py-12 text-white"}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <h1 className={"text-4xl font-semibold"}>
            Sinisa<span className={"text-accent"}>.</span>
          </h1>
        </Link>
        <div className={"hidden xl:flex items-center gap-8"}>
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire me!</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
