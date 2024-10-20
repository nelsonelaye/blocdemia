"use client";
import React from "react";
import SignupButton from "../common/SignupButton";
import * as Tooltip from "@radix-ui/react-tooltip";

const Header = () => {
  return (
    <div className="border-b-[0.6px] w-full  h-[70px] fixed flex items-center justify-between bg-[#222] border-[#545454] p-5 mb-[28px]">
      <h2 className="text-[#B977FF] text-lg font-semibold leading-6">
        Dashboard
      </h2>

      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <div className="flex items-center">
              <SignupButton className="bg-purple-100" />
            </div>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="select-none rounded bg-[#222] px-[15px] py-2.5 text-[12px] leading-none text-vio shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
              sideOffset={5}
            >
              Connect to a VPN to connect wallet
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
};

export default Header;
