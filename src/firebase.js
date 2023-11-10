import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
} from "firebase/auth"; 
import {getFirestore} from "firebase/firestore"                                                                                                                                                                                                                                                                                                                                                                        
import toast from "react-hot-toast";

const firebaseConfig = {
  apiKey: "AIzaSyAtz141tXLUsFuRXxEsILHrBmidDYMrSIo",
  authDomain: "new-mizanplas-net.firebaseapp.com",
  projectId: "new-mizanplas-net",
  storageBucket: "new-mizanplas-net.appspot.com",
  messagingSenderId: "478882574438",
  appId: "1:478882574438:web:0bc21fcf763cd6ff42fda7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app)


export const register = async (email, password, username, fullName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Kullanıcı adı ve ad-soyadı güncellemesi
    await updateProfile(user, {
      displayName: fullName,
      userName: username,
    });

    // E-posta doğrulama linkini gönder
    await sendVerificationEmail(user);

    // Diğer kayıt işlemleri burada yapılacak

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Diğer giriş işlemleri burada yapılacak

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const getUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
}
export const logout = async () => {
  try {
    await signOut(auth);
    // Çıkış işlemi başarılı olduğunda yapılması gereken işlemler burada gerçekleştirilebilir
  } catch (error) {
    throw new Error(error.message);
  }
};



export const sendVerificationEmail = async (user) => {
  try {
    await sendEmailVerification(user);
    toast.success("E-posta doğrulama linki gönderildi!");
  } catch (error) {
    throw new Error("E-posta doğrulama linki gönderilemedi: " + error.message);
  }
};



export default app;
export {db}