"use client";

import React from 'react'
import { useAccountConnection } from '~~/hooks/starkcade/useAccountConnection';
import { ConflipConnectPage } from './ConflipConnectPage';
import { ConflipPlayPage } from './ConflipPlayPage';


export const CoinflipPage = () => {

    const { account } = useAccountConnection();
    return (
        <>
            {
                account ?  <ConflipPlayPage /> : < ConflipConnectPage /> 
            }
            
        </>
    );
}
