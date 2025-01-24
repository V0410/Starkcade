"use client";

import React from 'react'

export const ProfilePage = () => {
    const [profileName, setProfileName] = React.useState('USER PROFILE');
    const [name, setName] = React.useState('');
    // Add simple behavior to the ProfilePage component that allows users to save their profile name limited to frontend.
    const handleSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();
        setProfileName(name);
        setName('');
    }
    return (
        <div className="relative flex justify-center items-center min-h-screen text-white overflow-hidden">
            <div className="relative text-center p-4 space-y-6 -z-5 w-full flex flex-col justify-center items-center gap-4">
                {/* User name  */}
                <div className='flex justify-center h-4 text-white text-4xl'>
                    {profileName}
                </div>
                <img
                    src="/coin-removebg.png"
                    alt="Web3 Arcade Coin"
                    className="w-24 h-24 md:w-64 md:h-64 flex justify-center"
                />
                <input 
                    type='text' 
                    placeholder='Coinflip Expert' 
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                    value={name}
                    className='w-64 h-12 text-yellow-500 text-center bg-transparent rounded-md text-lg border border-white placeholder-yellow-500 focus:outline-none focus:border-yellow-500 caret-yellow-500' 
                />
                <hr className="border-t-2 border-gray-300 flex justify-center w-1/2" />
                {/* Save button  */}
                <button className="w-1/2 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition" onClick={(event) => {
                    handleSave(event);
                }}>
                    Save
                </button>
            </div>
        </div>
    );
}
