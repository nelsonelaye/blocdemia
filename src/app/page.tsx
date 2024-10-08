import Button from "@/components/common/Button";
import logo from "@/assets/images/logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen bg-app-bg bg-black-90 flex items-center justify-center relative">
      <div className=" bg-black-90 w-full h-full absolute top-0 left-0 z-[-2px]"></div>
      <Image
        src={logo}
        alt="Blocdemia logo"
        width={200}
        height="50"
        className="absolute w-[200px] h-[50px] top-4 left-6"
      />
      <div className="w-full mx-auto sm:w-4/5 md:w-3/5 max-w-[628px] px-6 z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-semibold leading-[62px]  mb-1 sm:mb-3">
            Master Web3 skills
          </h1>
          <p className="leading-5 text-sm sm:text-base">
            Learn the basics of Web3 and earn rewards. Join a community of
            vibrant learners and Web3 enthusiasts building a career in Web3.
          </p>
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeTSJZP7RY9peAfPumnzLO2Bz1OhJImgscxGe7Aj5E_m3EPgQ/viewform?usp=send_form"
          className="w-full"
        >
          <Button text="Join waitlist" />
        </a>
      </div>
    </div>
  );
}
