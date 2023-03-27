import { initializeApp } from "firebase/app";
import firebaseConfig from "./Connection";
// Methods auth
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  updateEmail,
  sendEmailVerification,
  onAuthStateChanged,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  sendPasswordResetEmail,
  confirmPasswordReset,
  applyActionCode,
} from "firebase/auth";
// Methods collections
import { getFirestore, collection, getDocs, doc, getDoc, addDoc, query, where, orderBy } from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

// --- Functions --- //
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
};

export const getDataItemDetail = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  const item = docSnap.data();
  item.id = docSnap.id;

  return item;
};

export const sendOrder = async (order) => {
  try {
    await addDoc(collection(db, "orders"), order);
  } catch (error) {
    console.log(error);
  }
};

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
};

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
};

// --- Functions user --- //
export const signIn = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOff = async () => {
  await signOut(auth);
};

export const createUser = async (name, email, password) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(user, { displayName: name });
  await sendEmailVerification(user);
};

export const getUserActive = async () => {
  try {
    const data = await new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const dataId = auth.currentUser.uid;
          const dataUser = auth.currentUser.providerData[0];
          dataUser.id_user = dataId;
          resolve(dataUser);
        } else {
          reject("Not user");
        }
      });
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateDisplayNameProfile = async (name) => {
  await updateProfile(auth.currentUser, {
    displayName: name,
  });
};

export const updateEmailProfile = async (email) => {
  await updateEmail(auth.currentUser, email);
  await sendEmailVerification(auth.currentUser);
};

export const updatePasswordProfile = async (password) => {
  const user = auth.currentUser;
  return await updatePassword(user, password);
};

export const reauthenticateUser = async (email, password) => {
  const user = auth.currentUser;
  const credential = EmailAuthProvider.credential(email, password);
  return await reauthenticateWithCredential(user, credential);
};

export const resetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email);
};

export const confirmPassword = async (code, new_password) => {
  await confirmPasswordReset(auth, code, new_password);
};

export const confirmEmail = async (actionCode) => {
  return await applyActionCode(auth, actionCode);
};
