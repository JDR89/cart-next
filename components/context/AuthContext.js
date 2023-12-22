"use client"
import { auth, provider } from "@/firebase/config"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"


const AuthContext = createContext()

export const useAuthContext =()=> useContext(AuthContext)



export const AuthProvider =({children})=>{

    
    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid:null,
        isAdmin:false
    })

    const registerUser=async(values)=>{
         await createUserWithEmailAndPassword(auth, values.email,values.password)

    }

    const loginUser = async(values)=>{
         await signInWithEmailAndPassword(auth,values.email,values.password)
    }

    const logout=async()=>{
        await signOut(auth)
    }

    const googleLogin=async()=>{
        await signInWithPopup(auth,provider)
    }

    useEffect(() => {
      onAuthStateChanged(auth,(user)=>{
        
        
        // CARGAR EN UNA VARIABLE DE ENT EL ID
        if(user){
            setUser({
                logged:true,
                email:user.email,
                uid:user.uid,
                isAdmin:(user.uid === "wNGQ7qz1MRcKfDRGktPKTuTkIcv1") ? true : false
            })
        } else{
            setUser({
                logged: false,
                email:null,
                uid:null,
                isAdmin: false
            })
        }
            
      })
    },[])
    
    

    return(
        <AuthContext.Provider value={{
            user,
            registerUser,
            loginUser,
            logout,
            googleLogin
        }}>

            {children}
        </AuthContext.Provider>
    )

}

