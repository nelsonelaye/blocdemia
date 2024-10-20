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
    quiz: [
      {
        question: "What is a Web3 wallet primarily used for?",
        options: [
          {
            value: "Storing social media data",
            isCorrect: false,
          },
          {
            value: "Managing and storing cryptocurrency",
            isCorrect: true,
          },
          {
            value: "Holding personal files",
            isCorrect: false,
          },
          {
            value: "Writing code for websites",
            isCorrect: false,
          },
          {
            value: "Sending and receiving emails",
            isCorrect: false,
          },
        ],
      },
      {
        question: "How do you connect your Web3 wallet to a blockchain app?",
        options: [
          {
            value: "By downloading a separate app",
            isCorrect: false,
          },
          {
            value: "By scanning a QR code",
            isCorrect: false,
          },
          {
            value:
              "By clicking a “Connect Wallet” button and confirming in your wallet app",
            isCorrect: true,
          },
          {
            value: "By entering your password on the website",
            isCorrect: false,
          },
          {
            value: "By sending an email to the app developers",
            isCorrect: false,
          },
        ],
      },
      {
        question: "How can you fund a Web3 wallet?",
        options: [
          {
            value: "By transferring crypto from an exchange",
            isCorrect: true,
          },
          {
            value: "By connecting it to a physical bank",
            isCorrect: false,
          },
          {
            value: "By mining it directly",
            isCorrect: false,
          },
          {
            value: "By receiving crypto from another wallet",
            isCorrect: false,
          },
          {
            value: "By buying crypto from a store",
            isCorrect: false,
          },
        ],
      },

      {
        question: "Which of the following is a common Web3 wallet?",
        options: [
          {
            value: "MetaMask",
            isCorrect: false,
          },
          {
            value: "PayPal",
            isCorrect: false,
          },
          {
            value: "Coinbase Wallet",
            isCorrect: true,
          },
          {
            value: "Trust Wallet",
            isCorrect: false,
          },
          {
            value: "Google Wallet",
            isCorrect: false,
          },
        ],
      },

      {
        question: "What is your Web3 wallet address?",
        options: [
          {
            value: "The same as your email address",
            isCorrect: false,
          },
          {
            value: "A unique string of numbers and letters",
            isCorrect: true,
          },
          {
            value: "Your home address",
            isCorrect: false,
          },
          {
            value: "Your social security number",
            isCorrect: false,
          },
          {
            value: "A password you create when setting up the wallet",
            isCorrect: false,
          },
        ],
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
