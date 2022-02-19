import { useEffect, useState } from "react";
import { UserContext } from "./mainContext";

const UserState = (props) => {
  const [session, setSession] = useState({});
  const [userData, setUserData] = useState({});
  const [userId, setUserId] = useState("404");
  const [loading, setLoading] = useState("");
  return (
    <UserContext.Provider
      value={{
        session,
        userData,
        userId,
        loading,
        setLoading,
        setUserId,
        setUserData,
        setSession,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;
