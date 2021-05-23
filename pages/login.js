import { useState } from "react";
import axios from "axios";







const url = "https://still-eyrie-92313.herokuapp.com/";




const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



  async function handleLogin() {
    

  
   const loginInfo = {
     identifier: email,
     password: password
   }
   
   
   const login = await fetch(url +'auth/local', {
    method: 'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      
    },
    body: JSON.stringify(loginInfo)
      
  })

  /*setCookie (null, 'jwt'. loginResponse.jwt , {
    maxAge: 30 * 24 * 60 * 60,
    path: '/'
  })*/


  const loginResponse = await login.json();

 const res = await fetch(url + 'adminsites', {
    headers: {
       Authorization: `Bearer ${loginResponse.jwt}`
     },
    
    
   })

   
  

  
  
console.log(res)






  }





    
    return (






        <>


  <div className="h-screen w-full flex justify-center items-center bg-gray-200">
    <div className="bg-image w-full sm:w-1/2 md:w-9/12 lg:w-1/2 mx-3 md:mx-5 lg:mx-0 shadow-md flex flex-col md:flex-row items-center rounded z-10 overflow-hidden bg-center bg-cover bg-usedColors-black">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white my-2 md:my-0">
          HOLIDAZE
        </h1>
       
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center bg-white py-5 md:py-8 px-4">
        <h3 className="mb-4 font-bold text-3xl flex items-center text-usedColors-black">
          LOGIN
        </h3>
        <form className="px-3 flex flex-col justify-center items-center w-full gap-3">
          <input 
            type="email" placeholder="email.."
            className="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
            id="email"
            onChange={e => setEmail(e.target.value)} value={email}
          />
          <input 
            type="password" placeholder="password.."
            className="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
            id="password"
            onChange={e => setPassword(e.target.value)} value={password}
          />
          <button onClick={() => handleLogin()} className="flex justify-center items-center bg-usedColors-black hover:bg-blue-600 text-white focus:outline-none focus:ring rounded px-3 py-1">
            <svg className="w-5 h-5 inline"fill="none"stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
            </svg>
            <p className="ml-1 text-lg">
              Login
            </p>
          </button>
        </form>
      
      </div>
    </div>
  </div>
        </>

      )      
       
        

    }
        
     
        
        
 
    

export default LoginPage;



