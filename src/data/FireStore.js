import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFFrMTIyo1DmdCkffnLPE_9LlXdwWSieI",
  authDomain: "mauriciodiaz-43190.firebaseapp.com",
  projectId: "mauriciodiaz-43190",
  storageBucket: "mauriciodiaz-43190.appspot.com",
  messagingSenderId: "731153267144",
  appId: "1:731153267144:web:997a712fb8dd6ff47ca8fd",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Obtén una referencia a la colección 'productos'
const db = getFirestore(app);
export default db;

export const fetchAllProducts = async () => {
  const miColec = collection(db, "products");
  const itemsSnapshot = await getDocs(miColec);

  return itemsSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
};

export const fetchCategory = async (categoryId) => {
  const miColec = collection(db, "products");
  const queryItem = query(miColec, where("category", "==", categoryId));
  const itemSnapshot = await getDocs(queryItem);

  return itemSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
};

export const fetchProduct = async (productId) => {
  try {
    const productRef = doc(db, "products", productId);
    const productSnapshot = await getDoc(productRef);

    if (productSnapshot.exists()) {
      return productSnapshot.data();
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export const sendOrder = async (order) => {
  const buyTimeStamp = Timestamp.now();
  const orderWithDate = {
    ...order,
    date: buyTimeStamp,
  };
  const miColec = collection(db, "orders");
  const orderDoc = await addDoc(miColec, orderWithDate);
  return orderDoc.id;
};
