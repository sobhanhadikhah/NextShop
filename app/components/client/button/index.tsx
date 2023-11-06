"use client"

import { User } from "@phosphor-icons/react/dist/ssr/User";
import { signIn, signOut, useSession } from "next-auth/react"

type Props = {}

function LoginButton({}: Props) {
    const {status,data} = useSession();

    

  return <button  onClick={()=> {
    if (status === "authenticated") {
      signOut();  
    } 
    if (status === "unauthenticated") {
        signIn();
    }
  }}  type='button' className='border px-3 py-2 rounded-md' >
    {
        status === "unauthenticated" ? "ورود | ثبت‌ نام" : null
    }
    {
        status === "authenticated" ? <User size={24} /> : null
    }
  </button>
  
}

export default LoginButton