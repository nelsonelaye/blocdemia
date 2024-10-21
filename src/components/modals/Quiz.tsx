import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Button from "../common/Button";
import { IoClose } from "react-icons/io5";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import certificate from "@/assets/images/certificate.png";
// import { NEXT_PUBLIC_CONTRACT_ADDRESS } from "../../../config";
// import { contractABI } from "@/utils/contractABI";

interface optionInterface {
  value: string;
  isCorrect: boolean;
}

interface quizInterface {
  question: string;
  options: optionInterface[] | undefined;
}
interface scoreInterface {
  step: number;
  isCorrect: boolean;
}

const Quiz = ({ quiz, title }: { quiz: quizInterface[]; title: string }) => {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<scoreInterface[]>(
    [] as scoreInterface[]
  );
  const [percentageScore, setPercentageScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleScore = (questionIndex: number, isCorrect: boolean) => {
    const existingScore = scores.find((e) => e?.step === questionIndex);
    if (existingScore) {
      const newsScores = scores.map((e) =>
        e.step === questionIndex ? { ...e, isCorrect: isCorrect } : e
      );

      setScores(newsScores);
    } else {
      setScores((prev) => {
        return [...prev, { step: questionIndex, isCorrect: isCorrect }];
      });
    }
  };

  const calculateScore = () => {
    let totalScore = 0;

    for (let i = 0; i < scores.length; i++) {
      if (scores[i].isCorrect) {
        totalScore += 1;
      }
    }

    setPercentageScore(Math.round((totalScore / quiz.length) * 100));
    setShowResult(true);
    // console.log(Math.round((totalScore / quiz.length) * 100));
    return Math.round((totalScore / quiz.length) * 100);
  };

  const resetQuizStats = () => {
    setStep(0);
    setScores([]);
    setPercentageScore(0);
    setShowResult(false);
  };

  // const { address } = useAccount(); // Get the connected wallet address
  // const [isMinting, setIsMinting] = useState(false);
  // const [txHash, setTxHash] = useState(null);

  // const mintCertificate = async () => {
  //   if (address) {
  //     try {
  //       setIsMinting(true);

  //       // Prepare the transaction for the mintCertificate function
  //       const { request } = await prepareWriteContract({
  //         address: NEXT_PUBLIC_CONTRACT_ADDRESS,
  //         abi: contractABI,
  //         functionName: "mintCertificate",
  //         // Add additional arguments if your function requires them
  //       });

  //       // Send the transaction using writeContract
  //       const { hash } = await writeContract(request);
  //       setTxHash(hash);
  //       console.log("Transaction hash:", hash);
  //     } catch (error) {
  //       console.error("Error minting certificate:", error);
  //     } finally {
  //       setIsMinting(false);
  //     }
  //   } else {
  //     alert("Connect your wallet to mint the certifcate");
  //   }
  // };

  // const { writeContract } = useWriteContract();
  // const mintCertificate = async () => {
  //   try {
  //     setIsMinting(true);

  //     // Fetch the signer to interact with the contract
  //     const signer = await fetchSigner();

  //     if (!signer) {
  //       throw new Error("No signer available");
  //     }

  //     // Get contract instance with signer
  //     const contract = getContract({
  //       address: NEXT_PUBLIC_CONTRACT_ADDRESS,
  //       abi: contractABI,
  //       signerOrProvider: signer,
  //     });

  //     writeContract({
  //       address: NEXT_PUBLIC_CONTRACT_ADDRESS,
  //       abi: contractABI,
  //       functionName: "mintCertificate",
  //     })
  //     // Call the mintCertificate function on the contract
  //     const tx = await contract.mintCertificate();

  //     // Wait for the transaction to be mined
  //     await tx.wait();
  //     setTxHash(tx.hash);
  //     console.log("Transaction hash:", tx.hash);
  //   } catch (error) {
  //     console.error("Error minting certificate:", error);
  //   } finally {
  //     setIsMinting(false);
  //   }
  // };

  // const publicClient = usePublicClient(); // Get provider to interact with the blockchain

  // const { write, data, error } = useContractWrite({
  //   address: NEXT_PUBLIC_CONTRACT_ADDRESS,
  //   abi: contractABI,
  //   functionName: "mintCertificate",
  //   args: [], // No arguments for this function
  // });

  // const mintCertificate = async () => {
  //   try {
  //     // const tx = await writeContract({
  //     //   address: NEXT_PUBLIC_CONTRACT_ADDRESS,
  //     //   abi: contractABI,
  //     //   functionName: "mintCertificate",
  //     //   args: [], // Add function arguments here if needed
  //     //   signer: publicClient, // Provide the connected signer or provider
  //     // });

  //     const { data } = await write({
  //       address, // Pass the user's address as the sender
  //     });
  //     console.log("Transaction hash:", data.hash);
  //   } catch (error) {
  //     console.error("Error minting certificate:", error);
  //   }
  // };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button text="Start quiz" size="fit" withArrow />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-[#000]/80 data-[state=open]:animate-overlayShow" />

        {showResult ? (
          <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-[16px] bg-[#222] p-[25px]  focus:outline-none data-[state=open]:animate-contentShow">
            <div className="flex items-center justify-end mb-4">
              <Dialog.Title className="hidden">
                {decodeURIComponent(title)}
              </Dialog.Title>
              <Dialog.Close asChild>
                <IoClose
                  color="#E95959"
                  fontSize={16}
                  className="cursor-pointer"
                  onClick={resetQuizStats}
                />
              </Dialog.Close>
            </div>

            <Dialog.Description className="hidden">
              Quiz result
            </Dialog.Description>

            <h3 className="text-[#CA99FF] text-lg font-semibold my-5 text-center">
              {percentageScore >= 80 ? "Congratulations champ!" : "Hmmm!"}
            </h3>
            <p className="text-base text-center font-medium mb-10 max-w-[450px] mx-auto">
              {percentageScore >= 80
                ? `You aced the quiz. You scored ${percentageScore}% and you have been
              awarded with this NFT certificate`
                : `You didn’t do well in the quiz. You scored ${percentageScore}% and you have just 1 slot available to make it right. `}
            </p>

            {percentageScore >= 80 ? (
              <>
                <Image
                  src={certificate}
                  width={200}
                  height={281.94}
                  alt="NFT certificate"
                  className="object-cover mb-10 mx-auto"
                  unoptimized
                  quality={100}
                />

                <div className="mx-auto w-[284px]">
                  <Button
                    text="Mint certificate"
                    withArrow
                    rotateIcon
                    onClick={() => {}}
                    disabled
                  />
                  <span className="text-center text-xs block">
                    Minting of NFT certificate not available yet
                  </span>
                </div>
              </>
            ) : (
              <div className="flex items-center flex-row gap-5 w-full mx-auto px-5">
                <Button
                  text="Retake the quiz"
                  className="!w-full"
                  variant="outline"
                  onClick={resetQuizStats}
                />
                <Dialog.Close asChild>
                  <Button
                    text="Watch the course"
                    className="!w-full"
                    onClick={() => {}}
                  />
                </Dialog.Close>
              </div>
            )}
          </Dialog.Content>
        ) : (
          <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[769px] -translate-x-1/2 -translate-y-1/2 rounded-[16px] bg-[#222] p-[25px]  focus:outline-none data-[state=open]:animate-contentShow">
            <div className="flex items-center justify-between text-lg font-semibold mb-4">
              <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
                {decodeURIComponent(title)}
              </Dialog.Title>
              <Dialog.Close asChild>
                <IoClose
                  color="#E95959"
                  fontSize={16}
                  className="cursor-pointer"
                  onClick={resetQuizStats}
                />
              </Dialog.Close>
            </div>

            <Dialog.Description>
              <h3 className="text-[#CA99FF] text-lg font-semibold my-5">
                Question {step + 1}/{quiz.length}
              </h3>
            </Dialog.Description>

            <h4 className="text-base font-medium mb-6">
              {quiz[step]?.question}
            </h4>

            <ul className="space-y-4 > * + * mb-6">
              {quiz[step]?.options?.map((e, i) => (
                <li
                  key={e?.value}
                  className="flex items-center gap-3"
                  onClick={() => {
                    handleScore(step, e.isCorrect);
                  }}
                >
                  <input
                    type="radio"
                    name={quiz[step]?.question}
                    value={e?.value}
                    id={quiz[step]?.question + e?.value}
                    className="w-[18px] h-[18px] border-purple-100 bg-purple-100"
                  />

                  <label
                    htmlFor={quiz[step]?.question + e?.value}
                    className="font-normal text-base"
                  >
                    {e?.value}
                  </label>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-[32px] mb-[50px]">
              <button
                className="text-white border border[#EAD6FF] disabled:text-[#7e7e7e] disabled:bg-[#323232]  disabled:border-[#323232] rounded-3xl h-[50px] px-6 py-3 flex items-center justify-center"
                disabled={step === 0}
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                <FaArrowLeftLong />
              </button>
              <button
                className=" disabled:text-[#7e7e7e] disabled:bg-[#323232] disabled:border-[#323232] text-white border border[#EAD6FF] rounded-3xl h-[50px] px-6 py-3 flex items-center justify-center"
                disabled={step === quiz.length - 1}
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                <FaArrowRightLong />
              </button>
            </div>

            <div className="mt-[25px] flex justify-end">
              <Button
                text="Submit"
                size="fit"
                withArrow
                onClick={calculateScore}
                disabled={step + 1 !== quiz.length}
              />
            </div>
          </Dialog.Content>
        )}
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Quiz;
