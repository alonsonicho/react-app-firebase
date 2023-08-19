import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase/Connection";

import { getFirestore, collection, getDocs, doc, getDoc, addDoc, query, where, orderBy } from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getDataCollections = async () => {
    const itemsCollectionRef = collection(db, "products");
    const docSnapshot = await getDocs(itemsCollectionRef);
    const dataDocs = docSnapshot.docs.map((item) => {
        const product = {
        ...item.data(),
        id: item.id,
        };
        return product;
    });
    return dataDocs;
}

export const getDataItemDetail = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    const item = docSnap.data();
    item.id = docSnap.id;

    return item;
}

export const sendOrder = async (order) => {
    try {
        await addDoc(collection(db, "orders"), order);
    } catch (error) {
        console.log(error);
    }
}

export const getOrders = async (userid) => {
    const q = query(collection(db, "orders"), where("id_user", "==", userid));
    const querySnapshot = await getDocs(q);
    const ordersDocs = querySnapshot.docs.map((item) => {
        const order = {
        ...item.data(),
        id: item.id,
        };
        return order;
    });
    return ordersDocs;
}

export const getDataCategories = async (category, order) => {
    let q;

    if (order === "def" || order === "") {
        q = query(collection(db, "products"), where("category", "==", category));
    } else {
        q = query(collection(db, "products"), where("category", "==", category), orderBy("price", order));
    }

    const querySnapshot = await getDocs(q);
    const docsCategory = querySnapshot.docs.map((item) => {
        const product = {
        ...item.data(),
        id: item.id,
        };
        return product;
    });
    return docsCategory;
}