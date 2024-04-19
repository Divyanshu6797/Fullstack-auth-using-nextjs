'use client'
import axios from "axios"
import { connect } from "http2";
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

import { toast } from "react-hot-toast";




const SignupPage = () => {
  const router = useRouter();

    const [user,setUser] = useState({
        username : "",
        email : "",
        password : ""
    })
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const onSignup = async () => {
      try {
          setLoading(true);
          const response = await axios.post("/api/users/signup", user);
          console.log("Signup success", response.data);
          router.push("/login");
          
      } catch (error:any) {
          console.log("Signup failed", error.message);
          
          toast.error(error.message);
      }finally {
          setLoading(false);
      }
  }
  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
        setButtonDisabled(false);
    } else {
        setButtonDisabled(true);
    }
}, [user]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Sign up</h1>
        <form className="w-full max-w-sm">
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
        Name
      </label>
    </div>
    <div className="md:w-2/3">
      <input  onChange={(e) => setUser({...user, username: e.target.value})} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" value={user.username}/>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
        Email
      </label>
    </div>
    <div className="md:w-2/3">
      <input  onChange={(e) => setUser({...user, email: e.target.value})} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="email" value = {user.email}/>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
        Password
      </label>
    </div>
    <div className="md:w-2/3">
      <input  onChange={(e) => setUser({...user, password: e.target.value})} value = {user.password} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="password" type="password"/>
    </div>
  </div>
  
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button onClick={onSignup} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
      {buttonDisabled ? "No signup" : "Signup"}
      </button>
    </div>
  </div>
</form>
      
    </div>
  )
}

export default SignupPage
