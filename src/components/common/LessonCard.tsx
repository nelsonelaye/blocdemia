import Button from "@/components/common/Button";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { TbClockPlay } from "react-icons/tb";

interface props {
  title: string;
  duration: string;
  courseImage?: string | StaticImageData;
  isPlaying?: boolean;
  onClick?: () => void;
}
const LessonCard = ({
  title,
  isPlaying,
  courseImage,
  duration,
  onClick,
}: props) => {
  return (
    <div
      className="w-full flex items-center gap-6 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative bg-gray-800  w-full max-w-[218px] h-[112px] rounded-[6px] overflow-hidden">
        {courseImage && (
          <Image
            src={courseImage}
            alt={title}
            width={200}
            height={200}
            className="w-full h-full object-cover"
            quality={100}
            unoptimized
          />
        )}

        <div className="absolute bottom-0 left-0 w-full bg-[#545454] h-[4px]"></div>
        <div className="absolute bottom-0 left-0  bg-[#F32C26] h-[6px]"></div>
      </div>

      <div>
        <h1 className="text-xl font-medium text-white leading-6 mb-6">
          {title}
        </h1>

        <p className="text-sm text-neutral-90 font-normal leading-[22px]  flex items-center gap-5">
          <span>{duration} </span>
          {isPlaying && <span className="italic">Now playing</span>}
        </p>
      </div>
    </div>
  );
};

export default LessonCard;
