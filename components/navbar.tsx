import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

import Image from "next/image";
import GDGCIcon from "@/app/assets/navbarLogo.svg";
import ThemeToggle from "@/components/theme-toggle";

import ProfileIcon from "@/components/profile-icon";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Poppins } from "next/font/google";

const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });
const poppinsMed = Poppins({ weight: "500", subsets: ["latin"] });

export default async function Navbar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="w-full px-1 py-1 flex relative">
      <div className="w-full h-full absolute top-0 left-0 bg-linear-[90deg,#FF6A66,#FDD568,#28D781,#69A6FC]">
      </div>
      <div className="w-full bg-[#242526] relative z-10 flex justify-between items-center py-[max(1%,8px)] px-[max(2%,8px)]">
        <Link
          href="/"
          className="flex flex-row justify-center items-center gap-1"
        >
          <Image
            className="w-[2.5rem] h-auto"
            src={GDGCIcon}
            alt="Go to home"
          />
          <h1 className={`${poppinsBold.className} sm:text-lg md:text-xl lg:text-2xl`}>GDGC NITJ</h1>
        </Link>
        <div className="justify-center items-center gap-[25%] md:flex hidden">
          <Link href={"/"} className={`${poppinsMed.className} hover:opacity-80 transition-opacity`}>
            Home
          </Link>
          <Link href={"/bounties"} className={`${poppinsMed.className} hover:opacity-80 transition-opacity`}>
            Build
          </Link>
          <Link href={"/blogs"} className={`${poppinsMed.className} hover:opacity-80 transition-opacity`}>
            Blogs
          </Link>
          <Link href={"/team"} className={`${poppinsMed.className} hover:opacity-80 transition-opacity`}>
            Team
          </Link>
          <Link href={"/alumni"} className={`${poppinsMed.className} hover:opacity-80 transition-opacity`}>
            Alumni
          </Link>
        </div>
        <div className="relative cursor-pointer group">
          <div
            className={`bg-white group-hover:scale-95 transition-all text-black px-1.5 py-2 rounded-[7px] z-10 relative ${poppinsMed.className}`}
          >
            <Link href={"/dashboard"}>
            Join Us
            </Link>
          </div>
          <div
            className={`bg-linear-[45deg,#28D781,#FABE4C,#0456FB,#EA4335] group-hover:scale-105 group-hover:-translate-0 transition-transform duration-300 absolute top-0 left-0 translate-1 w-full h-full text-black px-1.5 py-2 rounded-[7px] ${poppinsMed.className}`}
          >
          </div>
        </div>
      </div>
    </div>
  );
}
