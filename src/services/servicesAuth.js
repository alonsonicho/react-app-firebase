import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase/Connection";

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

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  export const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential;
    } catch (error) {
      return error;
    }
  }

  export const signOff = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }

  export const createUser = async (name, email, password) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, { displayName: name });
      await sendEmailVerification(user);
    } catch (error) {
      return error;
    }
  }

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
      return error;
    }
  }

    export const updateDisplayNameProfile = async (name) => {
        try {
            await updateProfile(auth.currentUser, {
            displayName: name,
            });
        } catch (error) {
            return error;
        }
    }

    export const updateEmailProfile = async (email) => {
        try {
            await updateEmail(auth.currentUser, email);
            await sendEmailVerification(auth.currentUser);
        } catch (error) {
            return error;
        }
    }

    export const updatePasswordProfile = async (password) => {
        try {
            const user = auth.currentUser;
            return await updatePassword(user, password);
        } catch (error) {
            return error;
        }
    }

    export const reauthenticateUser = async (email, password) => {
        try {
            const user = auth.currentUser;
            const credential = EmailAuthProvider.credential(email, password);
            return await reauthenticateWithCredential(user, credential);
        } catch (error) {
            return error;
        }
    }

    export const resetPassword = async (email) => {
        try {
            await sendPasswordResetEmail(auth, email);
        } catch (error) {
            return error;
        }
    }

    export const confirmPassword = async (code, password) => {
        try {
            await confirmPasswordReset(auth, code, password);
        } catch (error) {
            return error;
        }
    }

    export const confirmEmail = async (actionCode) => {
        try {
            await applyActionCode(auth, actionCode);
        } catch (error) {
            return error;
        }
    }
