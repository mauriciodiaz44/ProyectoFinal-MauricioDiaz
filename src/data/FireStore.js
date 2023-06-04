import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";

const db = getFirestore();

export async function getAllItems() {
  const miColec = collection(db, "products");
  const itemsSnapshot = await getDocs(miColec);

  return itemsSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
}

export async function getItem(id) {
  const miColec = collection(db, "products");
  const itemRef = doc(miColec, id);
  const itemSnapshot = await getDoc(itemRef);

  return {
    ...itemSnapshot.data(),
    id: itemSnapshot.id,
  };
}
