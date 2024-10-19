import web3 from "@/assets/images/web3.png";
import blockchain from "@/assets/images/blockchain.png";
import nft from "@/assets/images/nfts.png";
import wallet from "@/assets/images/wallets.png";
import smartContract from "@/assets/images/smart_contracts.png";

const courses = [
  {
    title: "Web3 Wallets",
    category: "Wallets",
    descriptiopn:
      "Web3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics.",
    duration: "10mins",
    courseImage: wallet,
    lessons: [
      {
        title: "How to create Web3 wallet",
        duration: "3mins",
        courseImage: wallet,
        source:
          "https://drive.google.com/file/d/1EMiEahaof7uKQ_Qyhs_fMVxcI7sbxyik/preview",
      },
      {
        title: "How to fund Web3 wallet",
        duration: "6mins",
        courseImage: wallet,
        source:
          "https://drive.google.com/file/d/1a1JwIdhIEnsd6438rcNEzWKOJCp7zBEe/preview",
      },
    ],
  },

  {
    title: "Blockchain",
    category: "Blockchain",
    descriptiopn:
      "Web3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics.",
    duration: "20mins",
    courseImage: blockchain,
    lessons: [],
  },

  {
    title: "Web3",
    category: "Web3",
    descriptiopn:
      "Web3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics.",
    duration: "20mins",
    courseImage: web3,
    lessons: [
      {
        title: "Introduction to Blockchain",
        duration: "3mins",
        courseImage: web3,
        source: "",
      },
      {
        title: "wow Web3 works",
        duration: "10mins",
        courseImage: web3,
        source: "",
      },
      {
        title: "Importance of Web3",
        duration: "12mins",
        courseImage: web3,
        source: "",
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
    title: "NFTs",
    category: "NFTs",
    descriptiopn:
      "Web3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics.",
    duration: "20mins",
    courseImage: nft,
    lessons: [],
  },

  {
    title: "Smart Contracts",
    descriptiopn:
      "Web3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics.",
    duration: "20mins",
    courseImage: smartContract,
    lessons: [],
  },
];

export default courses;
