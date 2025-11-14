import AngularBrackets from "@/components/ui/angular-brackets";
import Image from "next/image";
import instagram from "./assets/instagram.svg";
import twitter from "./assets/twitter.svg";
import youtube from "./assets/youtube.svg";
import linkedin from "./assets/linkedin.svg";
import github from "./assets/github.svg";
import { Red_Hat_Mono, Space_Grotesk } from "next/font/google";
import FameCard from "@/components/ui/fame-card";
import hackmol from "./assets/hackmol.svg";
import purpleGridLarge from "./assets/purpleGridLarge.svg";
import Carasoul from "@/components/carasoul";
import level2BG from "./assets/level2BG.svg";
import leadMan from "./assets/leadMan.svg";
import LeadSlider from "@/components/lead-slider";
import level1BG from "./assets/level1BG.svg";
import megaphone from "./assets/megaphone.svg";
import microphone from "./assets/microphone.svg";
import EventCard from "@/components/event-card";
import Footer from "@/components/footer";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const redHatMono = Red_Hat_Mono({ subsets: ["latin"] });

export default function Home() {
  const colors: string[] = ["#FDD568", "#69A6FC", "#28D781", "#EA4335"];
  const dummyData = [
    {
      title: "Hackmol",
      tag: "hackathon",
      description:
        "HackMOL is the flagship annual 30-hour hackathon being organized by Google Developer Student Club (GDSC) of NIT Jalandhar wherein young coders & developers from all over the country join together to build projects & solutions to the alarming problems of the region & the world.",
      image: hackmol,
    },
    {
      title: "Hackmol",
      tag: "hackathon",
      description:
        "HackMOL is the flagship annual 30-hour hackathon being organized by Google Developer Student Club (GDSC) of NIT Jalandhar wherein young coders & developers from all over the country join together to build projects & solutions to the alarming problems of the region & the world.",
      image: hackmol,
    },
    {
      title: "Hackmol",
      tag: "hackathon",
      description:
        "HackMOL is the flagship annual 30-hour hackathon being organized by Google Developer Student Club (GDSC) of NIT Jalandhar wherein young coders & developers from all over the country join together to build projects & solutions to the alarming problems of the region & the world.",
      image: hackmol,
    },
  ];
  const dummyDomains = [
    "DevOps",
    "UI/UX",
    "Web Dev",
    "App Dev",
    "AI/ML",
    "WiT",
    "CP",
  ];
  const leads = [
    {
      name: "Adesh Anurag",
      domain: "GDGC NITJ",
      image: "",
      icon: "",
    },
    {
      name: "Jagjit Singh",
      domain: "Web Development",
      image: "",
      icon: "",
    },
    {
      name: "Irfan Mohammed",
      domain: "App Development",
      image: "",
      icon: "",
    },
    {
      name: "Davinder Singh Sidhu",
      domain: "DevSecOps",
      image: "",
      icon: "",
    },
    {
      name: "Jayant Joshi",
      domain: "UI/UX",
      image: "",
      icon: "",
    },
    {
      name: "Vyomika",
      domain: "Women in Tech",
      image: "",
      icon: "",
    },
    {
      name: "Priyanshu Bharadwaj",
      domain: "Competitve Programming",
      image: "",
      icon: "",
    },
    {
      name: "Vivek Dhiman",
      domain: "AI/ML",
      image: "",
      icon: "",
    },
  ];
  const events = [
    {
      title: "Hackmol",
      backgroundColor: "#FABE4C",
      decorationColor: "#8EEBFF",
    },
    {
      title: "WinterFest",
      backgroundColor: "#FF6A66",
      decorationColor: "#FCFF64",
    },
    {
      title: "Orientation",
      backgroundColor: "#275EAB",
      decorationColor: "#F49524",
    },
  ];
  return (
    <div className="flex flex-col font-sans">
      <main className="flex flex-col items-center sm:items-start">
        <section className="flex px-[4%] lg:mt-[9%] flex-col md:flex-row justify-between my-[6%] gap-5">
          <div className="flex flex-col justify-center items-center relative md:gap-6 sm:gap-2 lg:gap-8 group">
            <div className="relative flex justify-center items-center">
              <div className="relative z-[5] translate-1 group-hover:-translate-1 transition-transform duration-300">
                <AngularBrackets className="" color="#FFFFFF" />
              </div>
              <div className="absolute z-[4] translate-2 group-hover:-translate-2 transition-transform duration-300">
                <AngularBrackets className="" color="#EA4335" />
              </div>
              <div className="absolute z-[3] translate-3 group-hover:-translate-3 transition-transform duration-300">
                <AngularBrackets className="" color="#34A853" />
              </div>
              <div className="absolute z-[2] translate-4 group-hover:-translate-4 transition-transform duration-300">
                <AngularBrackets className="" color="#FBBC04" />
              </div>
              <div className="absolute z-[1] translate-5 group-hover:-translate-5 transition-transform duration-300">
                <AngularBrackets className="" color="#4285F4" />
              </div>
            </div>
            <div
              className={`flex relative lg:text-8xl md:text-7xl text-6xl font-bold ${spaceGrotesk.className}`}
            >
              <p className="relative text-white z-[5] translate-1 group-hover:-translate-1 transition-transform duration-300">
                NITJ
              </p>
              <p className="absolute text-[#EA4335] translate-2 z-[4] group-hover:-translate-2 transition-transform duration-300">
                NITJ
              </p>
              <p className="absolute text-[#34A853] translate-3 z-[3] group-hover:-translate-3 transition-transform duration-300">
                NITJ
              </p>
              <p className="absolute text-[#FBBC04] translate-4 z-[2] group-hover:-translate-4 transition-transform duration-300">
                NITJ
              </p>
              <p className="absolute text-[#4285F4] translate-5 z-[1] group-hover:-translate-5 transition-transform duration-300">
                NITJ
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center md:items-end md:text-right justify-center w-[90%] mx-auto md:mx-0 md:w-[50%] font-bold gap-[66px]">
            <h1
              className={`xl:text-8xl lg:text-7xl text-6xl ${spaceGrotesk.className}`}
            >
              We are <span className="text-[#EA4335]">G</span>
              <span className="text-[#34A853]">D</span>
              <span className="text-[#FBBC04]">G</span>
              <span className="text-[#6DA4FC]">C</span> <br /> NITJ
            </h1>
            <p
              className={`lg:text-2xl md:text-xl text-lg ${redHatMono.className}`}
            >
              We&apos;re not just another events club. At GDG NITJ, we&apos;re
              building a <span className="text-[#FBBC04]">community</span> where
              everyone is both a learner and a teacher. Our{" "}
              <span className="text-[#EA4335]">goal</span> is to create a
              dynamic environment for collective{" "}
              <span className="text-[#34A853]">growth</span>. We bring this{" "}
              <span className="text-[#6DA4FC]">vision</span> to life through
              high-energy flagship events like DevJams, Hackmol, and
              WomenTechies, along with tons of insightful workshops to keep you
              ahead of the curve.
            </p>
            <div className="flex gap-[36px]">
              <a
                href="https://www.instagram.com/gdgcnitj/"
                className="flex justify-center items-center hover:brightness-125 hover:bg-gray-400/10 rounded-full"
              >
                <Image src={instagram} width={40} height={40} alt="instagram" />
              </a>
              <a
                href="https://x.com/GDSCNitj"
                className="flex justify-center items-center hover:brightness-125 hover:bg-gray-400/10 rounded-full"
              >
                <Image src={twitter} width={40} height={40} alt="twitter" />
              </a>
              <a
                href=""
                className="flex justify-center items-center hover:brightness-125 hover:bg-gray-400/10 rounded-full"
              >
                <Image src={linkedin} width={40} height={40} alt="linkedin" />
              </a>
              <a
                href="https://www.youtube.com/@DSCNITJ"
                className="flex justify-center items-center hover:brightness-125 hover:bg-gray-400/10 rounded-full"
              >
                <Image src={youtube} width={40} height={40} alt="youtube" />
              </a>
              <a
                href="https://github.com/gdgcnitj"
                className="flex justify-center items-center hover:brightness-125 hover:bg-gray-400/10 rounded-full"
              >
                <Image
                  className="brightness-95 contrast-95 invert-33 sepia-7 saturate-184 hue-rotate-169"
                  src={github}
                  width={40}
                  height={40}
                  alt="github"
                />
              </a>
            </div>
          </div>
        </section>
        <section className="my-[1%] px-[4%] flex w-full flex-col justify-center items-center">
          <h1
            className={`flex justify-center items-center font-bold ${spaceGrotesk.className} lg:text-8xl md:text-7xl text-6xl text-center`}
          >
            WALL OF FAME
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full mx-auto justify-center place-items-center gap-20 py-21 md:flex-row">
            {dummyData.map((d, i) => (
              <FameCard
                title={d.title}
                color={colors[i % 4]}
                description={d.description}
                tag={d.tag}
                image={d.image}
                key={i}
              />
            ))}
          </div>
        </section>
        <section
          className="w-full relative h-[133vh] p-[4%] flex flex-col bg-cover"
          style={{ backgroundImage: `url(${purpleGridLarge.src})` }}
        >
          <div className="absolute w-full h-[33vh] z-0 bg-gradient-to-b from-background to-transparent top-0 left-0"></div>
          <div className="w-full flex justify-center items-center relative h-[33vh] z-10">
            <h1
              className={`text-center lg:text-8xl md:text-7xl text-6xl font-bold ${spaceGrotesk.className} z-10`}
            >
              LEVEL 03
            </h1>
          </div>
          <div className="relative flex flex-col justify-evenly items-center w-full h-[100vh]">
            <div className="text-6xl relative group flex justify-center items-center text-center md:text-7xl lg:text-8xl font-bold">
              <h1 className="relative z-50 translate-1 group-hover:-translate-1 transition-transform duration-300">
                Behind the Pixels
              </h1>
              <h1 className="transition-transform duration-300 absolute text-[#FF0000] z-40 translate-2 group-hover:-translate-2">
                Behind the Pixels
              </h1>
              <h1 className="transition-transform duration-300 absolute text-[#28D781] z-30 translate-3 group-hover:-translate-3">
                Behind the Pixels
              </h1>
              <h1 className="transition-transform duration-300 absolute text-[#FDD568] z-20 translate-4 group-hover:-translate-4">
                Behind the Pixels
              </h1>
              <h1 className="transition-transform duration-300 absolute text-[#69A6FC] z-10 translate-5 group-hover:-translate-5">
                Behind the Pixels
              </h1>
            </div>
            <div>
              <Carasoul list={dummyDomains} />
            </div>
          </div>
        </section>
        <section
          style={{ backgroundImage: `url(${level2BG.src})` }}
          className="w-full bg-cover h-[133vh]"
        >
          <div className="flex bg-cover bg-no-repeat bg-center justify-center items-center h-[33vh] w-full">
            <h1
              className={`font-bold ${spaceGrotesk.className} lg:text-8xl md:text-7xl text-6xl text-center`}
            >
              LEVEL 02
            </h1>
          </div>
          <div className="h-[100vh] relative flex justify-center items-center">
            <Image
              className="absolute bottom-0 right-0"
              src={leadMan}
              alt="leadMan"
            />
            <div>
              <h1 className="absolute top-[5%] left-[50%] -translate-x-[50%] text-black text-center font-black lg:text-[200px] text-7xl">
                LEADS
              </h1>
              <LeadSlider list={leads} />
            </div>
          </div>
        </section>
        <section
          className="w-full relative md:h-[133vh] flex flex-col bg-cover"
          style={{ backgroundImage: `url(${level1BG.src})` }}
        >
          <div className="w-full flex justify-center items-center relative h-[33vh] z-10">
            <h1
              className={`text-center lg:text-8xl md:text-7xl text-6xl font-bold ${spaceGrotesk.className} z-10`}
            >
              LEVEL 01
            </h1>
          </div>
          <div className="relative flex flex-col justify-evenly items-center w-full lg:h-[100vh]">
            <div className="text-6xl relative group flex justify-center items-center text-center md:text-7xl lg:text-8xl font-bold">
              <h1 className="relative z-50 translate-1 group-hover:-translate-1 transition-transform duration-300">
                Our Events
              </h1>
              <h1 className="transition-transform duration-300 absolute text-[#FF0000] z-40 translate-2 group-hover:-translate-2">
                Our Events
              </h1>
              <h1 className="transition-transform duration-300 absolute text-[#28D781] z-30 translate-3 group-hover:-translate-3">
                Our Events
              </h1>
              <h1 className="transition-transform duration-300 absolute text-[#FDD568] z-20 translate-4 group-hover:-translate-4">
                Our Events
              </h1>
              <h1 className="transition-transform duration-300 absolute text-[#69A6FC] z-10 translate-5 group-hover:-translate-5">
                Our Events
              </h1>
            </div>
            <div className="grid max-w-[100vw] my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 lg:gap-40">
              {events.map((d, i) => (
                <EventCard
                  key={i}
                  title={d.title}
                  backgroundColor={d.backgroundColor}
                  decorationColor={d.decorationColor}
                />
              ))}
            </div>
            <div className="mt-20">
              <Image
                className="absolute left-0 bottom-0 w-[30%] max-w-[300px]"
                src={megaphone}
                alt="megaphone"
              />
              <Image
                className="absolute right-0 bottom-0 w-[25%] max-w-[260px]"
                src={microphone}
                alt="mic"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex gap-[24px] flex-wrap items-center justify-center">
        <Footer />
      </footer>
    </div>
  );
}
