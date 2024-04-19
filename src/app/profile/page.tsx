'use client'
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

import {toast} from "react-hot-toast"

const ProfilePage = () => {

  const [data, setData] = useState("nothing")

  const router = useRouter();

  const logout = async () => {
    try {
        await axios.get('/api/users/logout')
        toast.success('Logout successful')
        router.push('/login')
    } catch (error:any) {
        console.log(error.message);
        toast.error(error.message)
    }
}
const getUserDetails = async () => {

  const res = await axios.get('/api/users/me')
  console.log(res.data);
  setData(res.data.data._id);

}
  return (
    <div>
        <h1>profile page</h1>
        
        <button onClick={logout} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
Logout</button>

      <h2>{data === 'nothing' ? "nothing" : <Link
          href={`/profile/${data}`}>{data}</Link>}</h2>

          <button onClick={getUserDetails}>Get user Details</button>
      
    </div>
  )
}

export default ProfilePage
