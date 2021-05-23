import { useEffect,useState } from "react";
import {createContext, useReducer} from "react"
import axios from "axios"









const Enquires = () => {
  const url = "https://still-eyrie-92313.herokuapp.com/enquires";

  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')



  async function handlePush() {

    let token   = await axios.post('https://still-eyrie-92313.herokuapp.com/auth/local', {
      identifier: 'admin@gmail.com',
      password: 'admin123',
    });
  
    token=token.data.jwt
  
    const  data  = await axios.get(
      url,
      
        {
          headers: {
            Authorization:
            `Bearer ${token}`, 
          },
        }
      );

  
  
     
        let  create  = await axios.post(
          'https://still-eyrie-92313.herokuapp.com/enquires',
          
            {
            
              message:message.toString(),
              email: email.toString()
            
         
            },
         {
              headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            
            }
          );
       

 
 
   }



  
      
     


      return (
        <>
        <div className="flex justify-center h-screen items-center bg-gray-200 antialiased">
        <div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
          <div
            className="bg-usedColors-green text-white flex flex-row justify-between p-6  border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
          >
            <p className=" text-white font-semibold ">Enquires</p>
        
       
          </div>
          <div className="flex flex-col px-6 py-5 bg-gray-50">
            <p className="mb-2 font-semibold text-gray-700">Message</p>
            <textarea
              type="text"
              name=""
            
              className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36"
              id="message"
              onChange={e => setMessage(e.target.value)} value={message}
              

            ></textarea>
            <p className="mb-2 font-semibold text-gray-700">Email</p>
            <input
              type="email"
              name=""
            
              className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-8"
              id="email"
              onChange={e => setEmail(e.target.value)} value={email}
            ></input>
      
            <hr />
  
      
          </div>
     
          <div
            className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
          >
            <p className="font-semibold text-gray-600">Cancel</p>
            <button  onClick={() => handlePush()} id="sende" className="px-4 py-2 text-white font-semibold bg-blue-500 rounded value" >
              Send
            </button>
          </div>
        </div>
      </div>
        <div id="enqCard" className="w-6/12 grid md:grid-cols-3 m-auto">
         
        </div>

    

      </>
      )      
       
        

    }
        
     
        
        
 
    

export default Enquires;



