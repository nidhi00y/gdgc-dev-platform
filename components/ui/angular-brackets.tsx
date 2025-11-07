import { NextPage } from "next";
import { cn } from "@/lib/utils";

interface Props {
  color: string;
  className: string;
}

const Side: NextPage<Props> = ({ className, color }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={cn("w-[16vw] h-[5vw] max-w-[384px] max-h-[120px] rounded-full", className)}
    ></div>
  );
};

const AngularBrackets: NextPage<Props> = ({ color }) => {
  return (
    <div className="flex flex-row gap-4 my-10">
      <div className="flex flex-col rotate-z-180">
        <Side className="rotate-27" color={color} />
        <Side className="-rotate-27" color={color} />
      </div>
      <div className="flex flex-col">
        <Side className="rotate-27" color={color} />
        <Side className="-rotate-27" color={color} />
      </div>
    </div>
  );
};

export default AngularBrackets;
