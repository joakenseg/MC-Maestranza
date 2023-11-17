// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6jTAZcHzVAgiOaaaWGvB9zrNnZa4UNpM",
  authDomain: "mc-maestranza.firebaseapp.com",
  projectId: "mc-maestranza",
  storageBucket: "mc-maestranza.appspot.com",
  messagingSenderId: "281003235056",
  appId: "1:281003235056:web:11e53b8f5a18ce077f5435",
  measurementId: "G-6FYM5RP57T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage(app);

async function getAllImages() {
  const imagesRef = ref(storage, '/'); // Ajusta la ruta si es necesario
  const imagesList = await listAll(imagesRef);
  const imageUrls = await Promise.all(imagesList.items.map((item) => getDownloadURL(item)));

  console.log('Image URLs:', imageUrls);

  return imageUrls;
}

export { storage, getAllImages };