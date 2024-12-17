import React, { createContext, useState } from 'react';
import { app } from '../config/FirebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  getDownloadURL,
  getStorage,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { getDatabase,push,ref,set,remove } from "firebase/database";
import { useEffect } from 'react';

const AuthContext = createContext();
const MyContextProvider = ({ children }) => {

  useEffect(()=>{
    
  },[])
  const [myState, setMyState] = useState('Hello from Context!');
  const [auth,setAuth]=useState(false);
  const [load,setLoad]=useState(false);
  const Auth=getAuth(app);
  const db=getDatabase(app);
  const storage=getStorage(app);
  const signin=(email,password)=>{
    signInWithEmailAndPassword(Auth,email,password).then((user)=>{
      setAuth(true);
      console.log(user);
    }).catch((e)=>{
      alert(e);
    })
  }
  const add=async(productName,
    image,
    store,
    collection,
    price,
    discountPrice,
    tags)=>{
      const url=await uploadFile(image);

      push(ref(db,`products`),{
        name:productName,
        image:url,
        store,
        collection,
        price,
        discountPrice,
        tags:tags.split(',').map(tag => tag.trim()),
      })
  }

  const deleteP=async(productId)=>{
    setLoad(true);
    await remove(ref(db,`products/${productId}`));
    setLoad(false);

  }

  const uploadFile = async(imageUpload) => {
    if (imageUpload === null) {
      alert("Please select an image");
      return;
    }
    setLoad(true);
    const imageRef = storageRef(storage, `products/${imageUpload.name}`);

    const snapshot=await uploadBytes(imageRef, imageUpload)
      
    const url=await getDownloadURL(snapshot.ref)
    setLoad(false);
    return url;
     
  };

  return (
    <AuthContext.Provider value={{ myState, setMyState,auth,signin,add,load ,deleteP}}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, MyContextProvider };