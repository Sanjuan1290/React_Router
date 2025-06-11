
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBIPKS8nnvdvgWNn_JEO9xxLkp-svX1YLs",
  authDomain: "vanlife-df57d.firebaseapp.com",
  projectId: "vanlife-df57d",
  storageBucket: "vanlife-df57d.firebasestorage.app",
  messagingSenderId: "849426406293",
  appId: "1:849426406293:web:fad14ff9db9b7285ed349c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, 'vans')

export async function getVans(){
    const querySnapShot = await getDocs(vansCollectionRef)
    const dataArr = querySnapShot.docs.map(doc => (
        {
            ...doc.data(),
            id: doc.id
        }
    ))
    return dataArr
}

export async function getVan(id){
    const docRef = doc(db, 'vans', id)
    const vanSnapshot = await getDoc(docRef)
    
    return { ...vanSnapshot.data(), id: vanSnapshot.id}
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}