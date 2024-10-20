"use client";
import { twMerge } from "tailwind-merge";
import WalletWrapper from "../onchain/WalletWrapper";

export default function LoginButton({ className }: { className?: string }) {
  return (
    <WalletWrapper
      className={twMerge(
        "w-full rounded-3xl h-[50px] mb-4 bg-[#323232] font-medium text-base max-w-full my-[10px]",
        className
      )}
      text="Connect wallet"
      withWalletAggregator={true}
    />
  );
}
