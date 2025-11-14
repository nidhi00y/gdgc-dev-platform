import Image from "next/image";
import sparkle from "../app/assets/sparkle.svg";
import iconContainer from "../app/assets/iconContainer.svg";

import { NextPage } from "next";

interface Props {
  name: string;
  domain: string;
}

const LeadCard: NextPage<Props> = ({ name, domain }) => {
  return (
    <div
      className="flex flex-col justify-around items-center w-[min(400px,85vw)] h-[60vh] bg-[#50FFAF] rounded-lg border-2 border-black pt-5 shadow-[6.303px_6.303px_5.043px_0_#000]
    "
    >
      <div
        className="bg-[#F8FF1D] w-[80%] h-[70%] relative rounded-lg shadow-[5.043px_2.521px_0_0_#000] flex justify-center items-center
    "
      >
        <Image
          src={sparkle}
          className="absolute -top-[10%] left-0"
          alt="sparkle"
        />
        <div
          style={{ backgroundImage: `url(${iconContainer.src})` }}
          className="flex w-30 h-30 bg-no-repeat bg-contain justify-center items-center absolute -bottom-[10%] right-[5%]"
        >
          <p className="font-bold">icon</p>
        </div>
        <p className="text-black font-bold text-center">{name}&apos;s Photo</p>
      </div>
      <div
        className="bg-[#F8FF1D] w-[80%] py-2 rounded-lg flex flex-col justify-center items-center shadow-[5.043px_2.521px_0_0_#000]
    "
      >
        <p className="font-bold text-black text-center">{name}</p>
        <p className="text-black text-sm">({domain})</p>
      </div>
    </div>
  );
};

export default LeadCard;
