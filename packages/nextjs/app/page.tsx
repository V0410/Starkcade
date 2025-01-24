"use client";

import type { NextPage } from "next";
import { useAccount } from "~~/hooks/useAccount";
import StarryBackground from "../components/starryBackground/_components/StarryBackground";
import { useRouter } from "next/navigation"; 

const Home: NextPage = () => {
  const connectedAddress = useAccount();

  const router = useRouter();

  const handlePlayButtonClick = () => {
    router.push("/coinflip");
  };

  return (
    <>
      <div className="relative flex justify-center items-center min-h-screen text-white overflow-hidden">
        <StarryBackground />
        <div className="relative text-center p-4 space-y-6 -z-5">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Welcome to the Starknet Arcade
          </h1>
          <p className="text-xl mb-8 ">
            Experience the world of Web3 gaming with decentralized play and
            rewards
          </p>

          <div>
            <img
              src="/starkcade.png"
              alt="Web3 Arcade Coin"
              className="w-72 h-72 md:w-96 md:h-96 mx-auto"
            />
          </div>

          <button className="px-6 py-3 bg-yellow-500 text-black rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300 "
          onClick={handlePlayButtonClick}>
            Start Playing Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
