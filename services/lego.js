import { collection, getDocs } from "firebase/firestore";
import { db } from "../src/config/firebase";

export const getAllLegoSets = async () => {
  const querySnapshot = await getDocs(collection(db, "legoSets"));
  const dataToReturn = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return dataToReturn;
};
