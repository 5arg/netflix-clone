import { useState, useEffect } from "react";
import { useFirebase } from "../context/Firebase";

export default function useContent(target: "series" | "films") {
  const [content, setContent] = useState<{}[]>([]);
  const { firebase } = useFirebase();

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [firebase, target]);

  return { [target]: content };
}
