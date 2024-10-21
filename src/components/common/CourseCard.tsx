import Button from "@/components/common/Button";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { TbClockPlay } from "react-icons/tb";

interface iProps {
  title: string;
  content: string;
  time: string;
  courseImage?: string | StaticImageData;
}
const CourseCard = ({ title, content, courseImage, time }: iProps) => {
  const availableCourses = ["blockchain", "web3 wallets"];
  return (
    <div className="w-full max-w-[381px] rounded-s-3xl col-span-1 flex flex-col gap-4">
      <div className="bg-gray-800 rounded-t-md w-full h-[202px] rounded-tr-3xl rounded-tl-3xl overflow-hidden">
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
      </div>
      <h1 className="text-lg font-semibold text-white leading-6">{title}</h1>
      <p className="text-sm text-neutral-90 font-normal leading-[22px] truncate">
        {content
          ? content
          : " Web3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics."}
      </p>
      <p className="text-sm   text-neutral-90 font-normal leading-[22px] mb-2 flex items-center">
        <TbClockPlay fontSize={16} className="mr-[9.27px]" /> {time}
      </p>
      <Link href={`/courses/${title}`}>
        <Button
          text={
            !availableCourses.includes(title.toLowerCase())
              ? "coming soon"
              : "continue learning"
          }
          withArrow={true}
          disabled={!availableCourses.includes(title.toLowerCase())}
        />
      </Link>
    </div>
  );
};

export default CourseCard;
