import type { NextPage } from "next";
import { CoinflipPage } from './_components/CoinflipPage'
import { getMetadata } from "~~/utils/scaffold-stark/getMetadata";

export const metadata = getMetadata({
  title: "Coinflip",
  description:
    "Interactive and decentralized CoinFlip game built on the Starknet blockchain.",
});

const Debug: NextPage = () => {
  return (
    <>
        <CoinflipPage />
    </>
  );
};

export default Debug;
