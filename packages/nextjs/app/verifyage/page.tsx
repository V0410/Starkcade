import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-stark/getMetadata";
import { VerifyAge } from "./_components/VerifyAge";
// import { ProfilePage } from "./_components/ProfilePage";
export const metadata = getMetadata({
  title: "Verify Age",
  description:
    "Verify your age",
});

const Debug: NextPage = () => {
  return (
    <>
       <VerifyAge />
    </>
  );
};

export default Debug;
