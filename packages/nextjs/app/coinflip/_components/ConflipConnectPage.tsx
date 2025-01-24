"use client";

import { useAccountConnection } from "~~/hooks/starkcade/useAccountConnection";
import { FLIPS } from "../../assets/constants";

export const ConflipConnectPage = () => {
  const { status } = useAccountConnection();

  const handleConnect = () => {
    console.log(status);
    // if (status === "disconnected") return <ConnectModal />;
  };

  return (
    <div className="relative flex flex-col justify-center items-center pb-20">
      <h1 className="text-lg font-semibold mt-3 pt-4">#1 Starknet Coinflip</h1>

      <div className="flex justify-center mt-3">
        <img
          src="/coin-removebg.png"
          alt="Web3 Arcade Coin"
          className="w-48 h-48 md:w-64 md:h-64"
        />
      </div>

      <div className="flex justify-center mt-6">
        <button
          className="w-64 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition"
          onClick={handleConnect}
        >
          Connect Wallet
        </button>
      </div>

      {/* Recent Flips */}
      <div className="border-t border-gray-500 w-96 mt-6"></div>
      <h2 className="mt-7 text-lg font-semibold tracking-wide">Recent Flips</h2>
      <div className="w-full max-w-lg mt-4 rounded-xl p-4">
        <div className="space-y-2">
          {FLIPS.map((flip, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={flip.icon}
                  alt={`${flip.user} icon`}
                  className="w-12 h-10 rounded-full"
                />
                <p className="text-gray-800">
                  <span className="font-bold">{flip.user}</span> {flip.message}
                </p>
              </div>
              {/* Time */}
              <span className="text-sm text-gray-500">{flip.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
