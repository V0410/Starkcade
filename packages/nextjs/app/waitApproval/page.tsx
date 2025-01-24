import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-stark/getMetadata";
import { WaitApprovalPage } from "./_components/WaitApprovalPage";
export const metadata = getMetadata({
  title: "Wait Approval",
  description:
    "Interactive and decentralized CoinFlip game built on the Starknet blockchain.",
});

const WaitApproval: NextPage = () => {
  return (
    <>
        <WaitApprovalPage />
    </>
  );
};

export default WaitApproval;
