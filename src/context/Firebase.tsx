import React, { createContext, useContext, ReactNode } from "react";
import Firebase from "firebase";
import { firebase } from "../lib/firebase.prod";

type State = {
  firebase: Firebase.app.App;
};

const FirebaseContext = createContext<State | undefined>(undefined);

type FirebaseProviderPropsType = {
  children: ReactNode;
};

const FirebaseProvider = ({ children }: FirebaseProviderPropsType) => {
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      {children}
    </FirebaseContext.Provider>
  );
};

function useFirebase() {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error("useFirebase must be used within a FirebaseProvider");
  }
  return context;
}

export { FirebaseProvider, useFirebase };
