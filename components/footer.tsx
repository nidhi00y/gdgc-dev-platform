import { NextPage } from "next";
import footerBGVector from "../app/assets/footerBGVector.svg";
import { Inter } from "next/font/google";
import instagram from "../app/assets/instagramFooter.svg";
import twitter from "../app/assets/twitterFooter.svg";
import linkedIn from "../app/assets/linkedInFooter.svg";
import Link from "next/link";
import Image from "next/image";
import gdgc from "../app/assets/gdgcFooter.svg";
import credits from "../app/assets/credits.svg";

interface Props {}

const inter = Inter({ subsets: ["latin"] });

const Footer: NextPage<Props> = ({}) => {
  return (
    <div
      style={{ backgroundImage: `url(${footerBGVector.src})` }}
      className={`bg-[#333333] bg-cover w-full px-[10%] py-[5%] ${inter.className} relative`}
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-start items-start gap-4">
          <h1 className="font-bold text-[#FFBC2C] sm:text-xl text-left md:text-2xl lg:text-3xl">
            QUICK LINKS
          </h1>
          <div className="flex flex-col">
            <Link
              href={"/team"}
              className="hover:opacity-80 transition-opacity"
            >
              - the team
            </Link>
            <Link
              href={"/events"}
              className="hover:opacity-80 transition-opacity"
            >
              - upcoming events
            </Link>
            <Link
              href={"/events"}
              className="hover:opacity-80 transition-opacity"
            >
              - past events
            </Link>
            <Link
              href={"/dashboard"}
              className="hover:opacity-80 transition-opacity"
            >
              - join us
            </Link>
          </div>
        </div>
        <div className="flex justify-start items-end flex-col gap-4">
          <h1 className="font-bold text-[#FFBC2C] sm:text-xl text-right md:text-2xl lg:text-3xl">
            GET THE LATEST TEA
          </h1>
          <div className="flex gap-4">
            <Link
              className="hover:brightness-60 transition-all w-6 md:w-auto"
              href={"https://instagram.com"}
            >
              <Image src={instagram} alt="instagram" />
            </Link>
            <Link
              className="hover:brightness-60 transition-all w-6 md:w-auto"
              href={"https://linkedin.com"}
            >
              <Image src={linkedIn} alt="linkedin" />
            </Link>
            <Link
              className="hover:brightness-60 transition-all w-6 md:w-auto"
              href={"https://twitter.com"}
            >
              <Image src={twitter} alt="twitter" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <Image src={gdgc} alt="logo" />
        <p>Copyright © 2025. All rights reserved. </p>
      </div>
      <div className="flex justify-center items-center">
        <Image
          className="md:absolute bottom-[20%] right-0"
          src={credits}
          alt="credits"
        />
      </div>
    </div>
  );
};

export default Footer;
