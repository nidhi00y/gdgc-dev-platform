import { NextPage } from "next";
import eventCardBottom from "../app/assets/eventCardBottom.svg";
import Image from "next/image";

interface Props {
  title: string,
  backgroundColor: string,
  decorationColor: string,
}

const EventCard: NextPage<Props> = ({title,backgroundColor,decorationColor}) => {
  return (
    <div className="w-[min(90vw,360px)] -translate-x-2 relative h-[48vh]">
      <div style={{backgroundColor: `${backgroundColor?backgroundColor:"#FF6A66"}`}} className="absolute top-0 left-0 translate-[5%] w-[100%] h-[100%] rounded-2xl"></div>
      <div className="w-[100%] h-[100%] relative z-10 px-6 bg-white rounded-2xl flex">
        <div className="w-full h-full mt-6 flex flex-col items-center gap-6">
          <div className="w-[100%] h-[60%] bg-black/70 rounded-2xl"></div>
          <div className="flex text-black w-full justify-between items-center">
            <h1 className="text-lg font-semibold">{title}</h1>
            <p className="text-sm">4206769</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0">
          <Image src={eventCardBottom} alt="event" />
        </div>
        <div className="absolute -bottom-[10%] -right-[10%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="104"
            height="108"
            viewBox="0 0 104 108"
            fill="none"
          >
            <path
              d="M45.1634 6.12793C47.6202 0.438556 55.6871 0.438556 58.1439 6.12793L58.4271 6.78223C61.0051 12.7523 68.2386 15.1026 73.8333 11.7881L74.4476 11.4248C79.7792 8.26619 86.3059 13.0079 84.9496 19.0547L84.7933 19.751C83.3699 26.0961 87.8404 32.2493 94.3148 32.8564L95.0257 32.9229C101.196 33.5015 103.688 41.1739 99.0365 45.2686L98.5013 45.7402C93.6201 50.0369 93.6201 57.6427 98.5013 61.9395L99.0365 62.4111C103.688 66.5057 101.196 74.1781 95.0257 74.7568L94.3148 74.8232C87.8405 75.4303 83.37 81.5837 84.7933 87.9287L84.9496 88.625C86.3061 94.6719 79.7793 99.4136 74.4476 96.2549L73.8333 95.8916C68.2386 92.5773 61.0051 94.9275 58.4271 100.897L58.1439 101.553C55.6869 107.242 47.6203 107.242 45.1634 101.553L44.8802 100.897C42.3022 94.9274 35.0687 92.577 29.474 95.8916L28.8597 96.2549C23.528 99.4134 17.0022 94.6718 18.3587 88.625L18.514 87.9287C19.9373 81.5836 15.467 75.4302 8.99252 74.8232L8.28256 74.7568C2.11248 74.1784 -0.380784 66.5058 4.27084 62.4111L4.80698 61.9395C9.68773 57.6428 9.68786 50.0369 4.80698 45.7402L4.27084 45.2686C-0.380529 41.1738 2.11257 33.5013 8.28256 32.9229L8.99252 32.8564C15.4671 32.2495 19.9375 26.0962 18.514 19.751L18.3587 19.0547C17.0023 13.008 23.5281 8.26649 28.8597 11.4248L29.474 11.7881C35.0688 15.1027 42.3022 12.7523 44.8802 6.78223L45.1634 6.12793Z"
              fill={`${decorationColor?decorationColor:"#8EEBFF"}`}
              stroke="#121212"
              strokeWidth="3.72093"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
