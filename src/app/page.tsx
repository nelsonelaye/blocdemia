"use client";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import BackgroundLayout from "@/layout/BackgroundLayout";
import SignupButton from "@/components/common/SignupButton";
import { useAccount } from "wagmi";
import WalletWrapper from "@/components/onchain/WalletWrapper";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { address } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (address) {
      router.push("/dashboard");
    }
  }, [address]);

  return (
    <BackgroundLayout>
      <div className="w-full h-full max-h-[1024px] gap-[99px] flex flex-col sm:flex-row items-center justify-center">
        <div className="w-full max-w-[626px] h-[60vh] md:min-h-[351.86px] h-auto p-[20px] py-[40px] sm:bg-[#32323233]/20 rounded-[32px]">
          <Image
            src={logo}
            alt="Blocdemia logo"
            width={200}
            height="50"
            className="w-[132px] h-[50px] mb-2  sm:mb-4 mx-auto object-contain"
          />
          <h3 className="font-medium text-2xl leading-8 text-center mb-[20px]">
            Connect your wallet
          </h3>

          <div className="w-full">
            <SignupButton />
            {/* <LoginButton /> */}

            {/* <WalletWrapper
              className="w-full rounded-3xl h-[50px] bg-[#323232] font-medium text-base max-w-full my-[10px]"
              text="continue with conibase"
            /> */}
            <p className="text-sm font-normal text-center flex items-center  justify-center whitespace-nowrap mb-3">
              <WalletWrapper
                className="ockConnectWallet_Container shrink w-fit h-fit bg-transparent font-normal hover:bg-transparent p-0 m-0 text-center mx-auto text-white text-base "
                text="Don't have a wallet? Create one"
              />
            </p>
            <p className="text-[12px] font-normal text-center text-[#d2d2d2]">
              Connect to a VPN to use coinbase wallet{" "}
            </p>
          </div>
        </div>

        <div className="hidden w-full max-w-[480px] sm:block">
          <h1 className="font-semibold text-[52px] leading-[62px]">
            Learn the <br /> Basics of Web3...
          </h1>
        </div>
      </div>
    </BackgroundLayout>
  );
}

// <div className="w-full h-screen bg-app-bg bg-black-90 flex items-center justify-center relative">
// <div className=" bg-black-90 w-full h-full absolute top-0 left-0 z-[-2px]"></div>
// <Image
//   src={logo}
//   alt="Blocdemia logo"
//   width={200}
//   height="50"
//   className="absolute w-[200px] h-[50px] top-4 left-6"
// />
// <div className="w-full mx-auto sm:w-4/5 md:w-3/5 max-w-[628px] px-6 z-10">
//   <div className="text-center mb-8">
//     <h1 className="text-3xl md:text-5xl font-semibold leading-[62px]  mb-1 sm:mb-3">
//       Master Web3 skills
//     </h1>
//     <p className="leading-5 text-sm sm:text-base">
//       Learn the basics of Web3 and earn rewards. Join a community of
//       vibrant learners and Web3 enthusiasts building a career in Web3.
//     </p>
//   </div>
//   <a
//     href="https://docs.google.com/forms/d/e/1FAIpQLSeTSJZP7RY9peAfPumnzLO2Bz1OhJImgscxGe7Aj5E_m3EPgQ/viewform?usp=send_form"
//     className="w-full"
//   >
//     <Button text="Join waitlist" />
//   </a>
// </div>
// </div>
