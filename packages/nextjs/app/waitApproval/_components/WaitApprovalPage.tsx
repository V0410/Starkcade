import ApprovalSVG from "./ApprovalSVG";

export const WaitApprovalPage = () => {
    return (
        <div className="relative flex justify-center items-center min-h-screen text-white overflow-hidden">
            <div className="relative text-center p-4 space-y-6 -z-5 w-full flex flex-col justify-center items-center gap-8">
                <img
                    src="/coin-removebg.png"
                    alt="Web3 Arcade Coin"
                    className="w-24 h-24 md:w-64 md:h-64 flex justify-center"
                />
                <div className='flex justify-center h-4 text-white text-sm uppercase'>
                    Waiting for Approval
                </div>
                <ApprovalSVG />
            </div>
        </div>
    );
}
