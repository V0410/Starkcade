import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-stark/getMetadata";
import { ProfilePage } from "./_components/ProfilePage";
export const metadata = getMetadata({
  title: "Profile",
  description:
    "Interactive and decentralized CoinFlip game built on the Starknet blockchain.",
});

const Debug: NextPage = () => {
  return (
    <>
        <ProfilePage />
    </>
  );
};

export default Debug;
