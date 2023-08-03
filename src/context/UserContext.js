import { createContext,useState } from 'react';

const UserContext = createContext();

function Provider({ children }) {
    const [count, setCount] = useState(6);

    const objectToShare = {
        count: count,
        incrementCount: () => {
            setCount(count + 1);
        }
    };

    return (
        <UserContext.Provider value={objectToShare}>
            {children}
        </UserContext.Provider>
    );

}

export { Provider };
export default UserContext;