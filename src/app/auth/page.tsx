import BackgroundLayout from "@/layout/BackgroundLayout";
import {
  Address,
  Avatar,
  Badge,
  EthBalance,
  Identity,
  Name,
} from "@coinbase/onchainkit/identity";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownBasename,
  WalletDropdownDisconnect,
  WalletDropdownLink,
} from "@coinbase/onchainkit/wallet";
import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.png";
import Button from "@/components/common/Button";
import WalletWrapper from "@/components/onchain/WalletWrapper";

const Auth = () => {
  return (
    <BackgroundLayout>
      <div className="w-full h-full max-h-[1024px] gap-[99px] flex flex-col sm:flex-row items-center justify-center">
        <div className="hidden w-full max-w-[480px] h-[513px] sm:block">
          <h1 className="font-semibold text-[52px] leading-[62px]">
            Learn the <br /> Basics of Web3...
          </h1>
        </div>

        <div className="w-full   max-w-[626px] h-[60vh] md:h-[80vh] p-[20px] sm:bg-[#32323233]/20 rounded-[32px]">
          <Image
            src={logo}
            alt="Blocdemia logo"
            width={200}
            height="50"
            className="w-[132px] h-[50px] mb-2  sm:mb-4 mx-auto object-contain"
          />
          <h3 className="font-medium text-2xl leading-8 text-center mb-[40px]">
            Create account
          </h3>

          <div>
            <Button text="Create account" disabled />

            <WalletWrapper
              className="w-full rounded-3xl h-[50px] bg-[#323232] font-medium text-base max-w-full my-[10px]"
              text="continue with conibase"
            />
            <p className="text-sm font-normal text-center">
              Connect to a VPN to use your coinbase wallet{" "}
            </p>
          </div>
          {/* <Wallet>
          <ConnectWallet>
            <Avatar className="h-6 w-6" />
            <Name />
          </ConnectWallet>
          <WalletDropdown>
            <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
              <Avatar />
              <Name>
                <Badge className="badge" />
              </Name>
              <Address />
              <EthBalance />
            </Identity>
            <WalletDropdownLink icon="wallet" href="https://keys.coinbase.com">
              Wallet
            </WalletDropdownLink>
            <WalletDropdownBasename />
            <WalletDropdownDisconnect />
          </WalletDropdown>
        </Wallet> */}
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default Auth;
