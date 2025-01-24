import { useEffect, useState } from "react";
import { useAccount, useNetwork } from "@starknet-react/core";
import { useTargetNetwork } from "~~/hooks/scaffold-stark/useTargetNetwork";

export const useAccountConnection = () => {
  const { account, status, address: accountAddress } = useAccount();
  const { chain } = useNetwork();
  const { targetNetwork } = useTargetNetwork();
  const [accountChainId, setAccountChainId] = useState<bigint>(0n);

  useEffect(() => {
    if (account) {
      const getChainId = async () => {
        const chainId = await account.channel.getChainId();
        setAccountChainId(BigInt(chainId as string));
      };
      getChainId();
    }
  }, [account]);

  return {
    account,
    status,
    accountAddress,
    chain,
    targetNetwork,
    accountChainId,
  };
};
