'use client'
import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

const LoginPage = () => {
  const router = useRouter()
  const [loading,setLoading] = useState(false)

  const [user,setUser] = useState({
    
    email : "",
    password : ""
})
const onLogin = async () => {

  try {
    setLoading(true)
    const response = await axios.post("/api/users/login", user);

    console.log("login successfull");
    toast.success("login successfull");
    router.push("/profile");
    
    
  } catch (error:any) {
    console.log("login failed")
    console.log(error)
    console.log(error.message)
    
  } finally {
    setLoading(false)
  }

}
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">{loading ? "Processing" : "Login"}</h1>
        <form className="w-full max-w-sm">
  
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
        Email
      </label>
    </div>
    <div className="md:w-2/3">
      <input  onChange={(e) => setUser({...user, email: e.target.value})} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value = {user.email}/>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
        Password
      </label>
    </div>
    <div className="md:w-2/3">
      <input  onChange={(e) => setUser({...user, password: e.target.value})} value = {user.password} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************"/>
    </div>
  </div>
  
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button onClick={onLogin} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Log in 
      </button>
    </div>
  </div>
</form>
      
    </div>
  )
}

export default LoginPage
