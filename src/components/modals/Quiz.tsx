import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Button from "../common/Button";
import { IoClose } from "react-icons/io5";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

interface optionInterface {
  value: string;
  isCorrect: boolean;
}

interface quizInterface {
  question: string;
  options: optionInterface[] | undefined;
}

const Quiz = ({ quiz, title }: { quiz: quizInterface[]; title: string }) => {
  const [step, setStep] = useState(0);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button text="Start quiz" variant="fit" withArrow />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[769px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-[#222] p-[25px]  focus:outline-none data-[state=open]:animate-contentShow">
          <div className="flex items-center justify-between text-lg font-semibold mb-4">
            <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
              {title}
            </Dialog.Title>
            <Dialog.Close asChild>
              <IoClose color="#A755FF" fontSize={16} />
            </Dialog.Close>
          </div>

          <Dialog.Description>
            <h3 className="text-[#CA99FF] text-lg font-semibold my-5">
              Question 1/5
            </h3>
          </Dialog.Description>

          <h4 className="text-base font-medium mb-6">{quiz[step]?.question}</h4>

          <ul className="space-y-4 > * + * mb-6">
            {quiz[step]?.options?.map((e, i) => (
              <li key={e?.value}>
                <input
                  type="radio"
                  name={quiz[step]?.question}
                  value={e?.value}
                  id={quiz[step]?.question + e?.value}
                />

                <label htmlFor={quiz[step]?.question + e?.value}>
                  {e?.value}
                </label>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-[32px] mb-[50px]">
            <button className="text-[#7e7e7e] bg-[#323232] border border-[#323232] rounded-3xl h-[50px] px-6 py-3 flex items-center justify-center">
              <FaArrowLeftLong />
            </button>
            <button className="text-white border border[#EAD6FF] rounded-3xl h-[50px] px-6 py-3 flex items-center justify-center">
              <FaArrowRightLong />
            </button>
          </div>

          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <Button text="Submit" variant="fit" withArrow />
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Quiz;
