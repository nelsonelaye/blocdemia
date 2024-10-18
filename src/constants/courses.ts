import web3 from "@/assets/images/web3.png";
import blockchain from "@/assets/images/blockchain.png";
import nft from "@/assets/images/nfts.png";
import wallet from "@/assets/images/wallets.png";
import smartContract from "@/assets/images/smart_contracts.png";

const courses = [
  {
    title: "Web3",
    descriptiopn:
      "Web3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics.",
    duration: "20mins",
    courseImage: web3,
    lessons: [
      {
        title: "Introduction to Blockchain",
        duration: "3mins",
        courseImage: web3,
      },
      {
        title: "wow Web3 works",
        duration: "10mins",
        courseImage: web3,
      },
      {
        title: "Importance of Web3",
        duration: "12mins",
        courseImage: web3,
      },
    ],
    quiz: [
      {
        question: "What is a key feature of blockchain technology?",
        options: [
          {
            value: " It allows transactions to be erased after a certain time.",
            isCorrect: false,
          },
          {
            value:
              "It keeps a digital record of transactions that cannot be changed.",
            isCorrect: true,
          },
          {
            value: "It only works with cryptocurrency transactions.",
            isCorrect: false,
          },
        ],
      },
      {
        question: "What is a key feature of blockchain technology?",
        options: [
          {
            value: " It allows transactions to be erased after a certain time.",
            isCorrect: false,
          },
          {
            value:
              "It keeps a digital record of transactions that cannot be changed.",
            isCorrect: true,
          },
          {
            value: "It only works with cryptocurrency transactions.",
            isCorrect: false,
          },
        ],
      },
      {
        question: "What is a key feature of blockchain technology?",
        options: [
          {
            value: " It allows transactions to be erased after a certain time.",
            isCorrect: false,
          },
          {
            value:
              "It keeps a digital record of transactions that cannot be changed.",
            isCorrect: true,
          },
          {
            value: "It only works with cryptocurrency transactions.",
            isCorrect: false,
          },
        ],
      },
      {
        question: "What is a key feature of blockchain technology?",
        options: [
          {
            value: " It allows transactions to be erased after a certain time.",
            isCorrect: false,
          },
          {
            value:
              "It keeps a digital record of transactions that cannot be changed.",
            isCorrect: true,
          },
          {
            value: "It only works with cryptocurrency transactions.",
            isCorrect: false,
          },
        ],
      },
      {
        question: "What is a key feature of blockchain technology?",
        options: [
          {
            value: " It allows transactions to be erased after a certain time.",
            isCorrect: false,
          },
          {
            value:
              "It keeps a digital record of transactions that cannot be changed.",
            isCorrect: true,
          },
          {
            value: "It only works with cryptocurrency transactions.",
            isCorrect: false,
          },
        ],
      },
      {
        question: "What is a key feature of blockchain technology?",
        options: [
          {
            value: " It allows transactions to be erased after a certain time.",
            isCorrect: false,
          },
          {
            value:
              "It keeps a digital record of transactions that cannot be changed.",
            isCorrect: true,
          },
          {
            value: "It only works with cryptocurrency transactions.",
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    title: "Web3 Wallets",
    descriptiopn:
      "Web3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics.",
    duration: "20mins",
    courseImage: wallet,
  },
  {
    title: "NFTs",
    descriptiopn:
      "Web3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics.",
    duration: "20mins",
    courseImage: nft,
  },
  {
    title: "Blockchain",
    descriptiopn:
      "Web3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics.",
    duration: "20mins",
    courseImage: blockchain,
  },

  {
    title: "Smart Contracts",
    descriptiopn:
      "Web3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics.",
    duration: "20mins",
    courseImage: smartContract,
  },
];

export default courses;
