"use client"
import { NextPage } from 'next'
import { signIn, useSession } from 'next-auth/react'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return <div>
    
    <button onClick={()=> void signIn()} > login</button>
  </div>
}

export default Page