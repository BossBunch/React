import React, { useState, createContext, FC, ReactNode } from 'react';


export type GlobalContent = {
    count: number,
    incrementCount: () => void
} 

const UserContext = createContext<GlobalContent>({
    count: 0,
    incrementCount: ()=>{}
});

type BoxProps = {
    children: React.ReactNode; // 👈️ define children prop
};

export const UserProvider = ({ children }: BoxProps) => {
    

    const [count, setCount] = useState<number>(6);

    
    const objectToShare: GlobalContent = {
        count: count,
        incrementCount: () => {
            setCount(count + 1);
        }
    };

    return (
        <UserContext.Provider value={objectToShare}>
            {children}
        </UserContext.Provider>
    )

}



export default UserContext;
