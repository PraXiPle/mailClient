import { createContext, useContext, useState } from "react";
export const UserContexts = createContext({
    userId: "",
})
function UserContextsProvider({ children }) {
    const [userId, setUserId] = useState("6614021f31a18818eb678277")
    const value = {
        userId: userId
    }
    return <UserContexts.Provider value={value}> {children}</UserContexts.Provider>
}

export default UserContextsProvider;