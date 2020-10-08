import { useState, useEffect } from "react";
import Firebase from "firebase";
import { useFirebase } from "../context/Firebase";

export default function useAuthListener() {
  const [user, setUser] = useState<Firebase.User | undefined>(
    JSON.parse(localStorage.getItem("authUser") || "{}")
  );
  const { firebase } = useFirebase();

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(undefined);
      }
    });

    return () => listener();
  }, [firebase]);

  return { user };
}
