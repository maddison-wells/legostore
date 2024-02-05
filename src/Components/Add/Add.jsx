import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../src/config/firebase";

const Add = () => {
  const addDocument = async () => {
    const docRef = await addDoc(collection(db, "legoSets"), {
      name: "LEGO® Classic Creative Color Fun",
      collection: "classic",
      description:
        "If you’re looking for a playset that’s packed with creative possibilities, LEGO® Classic Creative Color Fun (11032) is bursting with art-and-craft inspiration for kids aged 5 and up.",
      image:
        "https://lego.bricksmegastore.com/cdn/shop/files/1_fb5785c3-5abd-482c-9416-58ee57f95846.jpg?v=1688972606&width=1440",
      inStock: true,
      price: 104.99,
      rare: false,
      stock: 99,
      pieces: 150,
      setID: 11032,
      // colour: ,
    });
  };

  return (
    <div>
      <h1>Add</h1>
      <button onClick={addDocument}>Add Document</button>
    </div>
  );
};

export default Add;

//  name: "LEGO® Classic Baseplate",
//       collection: "Classic",
//       description:
//         "Lay the foundations for open-ended creative play with the LEGO® Classic Baseplate. Measuring over 14.5 in. (38cm) square, this high-quality building toy gives kids a spacious 48x48-stud LEGO landscape on which to build, play and display.",
//       image:
//         "https://lego.bricksmegastore.com/cdn/shop/products/1_032d03eb-afbc-4ae3-93b8-b1632ce70349.jpg?v=1645662281&width=1600",
//       inStock: true,
//       price: 22.99,
//       rare: false,
//       stock: 177,
//       pieces: 1,
