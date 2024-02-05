import {
  getDocs,
  getDoc,
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
  where,
  query,
} from "firebase/firestore";
import { db } from "../config/firebase";

export const getAllCartItems = async () => {
  const querySnapshot = await getDocs(collection(db, "cart"));
  const data = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  console.log("Retrieved all cart items.");

  return data;
};

export const addItemToCart = async ({ setID, name, img, price, stock }) => {
  try {
    if (!setID || !name || !img || !price || stock === undefined) {
      const missingFields = [];
      if (!setID) missingFields.push("setID");
      if (!name) missingFields.push("name");
      if (!img) missingFields.push("img");
      if (!price) missingFields.push("price");
      if (stock === undefined) missingFields.push("stock");

      console.error(
        `Invalid data. Missing values for: ${missingFields.join(", ")}`
      );
      return;
    }

    const docRef = await addDoc(collection(db, "cart"), {
      setID: setID,
      name: name,
      img: img,
      price: price,
      stock: stock,
      totalPrice: price * qty,
      qty: qty,
    });

    console.log(`Item with ID ${setID} added to cart.`);
  } catch (error) {
    console.error("Error adding item to cart:", error);
  }
};

export const removeItemFromCart = async (name) => {
  console.log("Removing item with ID:", name);

  await deleteDoc(doc(db, "cart", name));
  window.location.reload(); //probs use a .then

  console.log(`Cart item with ID ${name} removed from cart.`);
};

export const adjustQty = async (cartItemId, stock, oldQty, newQty, price) => {
  console.log(cartItemId, stock + (oldQty - newQty), oldQty, newQty);
  const docRef = doc(db, "cart", cartItemId);

  await updateDoc(docRef, {
    inStockQty: stock + (oldQty - newQty),
    qty: newQty,
    totalPrice: newQty * price,
  });

  console.log(`Adjusted quantity of cart item ${cartItemId}.`);
};
