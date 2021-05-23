import { useState,useEffect } from "react";
import axios from "axios";
const url = "https://still-eyrie-92313.herokuapp.com/";

import getConfig from 'next/config'
import { parseCookies  } from 'nookies'




export const getStaticProps = async () => { 

  let token   = await axios.post('https://still-eyrie-92313.herokuapp.com/auth/local', {
    identifier: 'admin@gmail.com',
    password: 'admin123',
  });

  token=token.data.jwt;


  let  enquires  = await axios.get(
    url + 'enquires',
    
      {
        headers: {
          Authorization:
            `Bearer ${token}`,  
        },
      }
  );

 
  enquires = enquires.data




  let  contactMessages  = await axios.get(
    url + 'contact-messages',
    
      {
        headers: {
          Authorization:
          `Bearer ${token}`, 
        },
      }
  );
    
contactMessages=contactMessages.data;

console.log(contactMessages)






return{
      props:{
      contactMessages:contactMessages,
      enquires:enquires
  }
  
  }


 

 
 };








  
    const Admin = ({contactMessages,enquires}) => {


    

      const [title,setTitle] = useState('')
      const [adresse,setAdresse] = useState('')
      const [type,setType] = useState('')
 




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
          'https://still-eyrie-92313.herokuapp.com/hotels',
          
            {
            
              title:title.toString(),
              adresse: adresse.toString(),
              type: type.toString()
            
         
            },
         {
              headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            
            }
          );
         console.log(create)
    

}


    return (




<>

    
  


  
        <h1 className="text-center font-bold mb-32 text-5xl mt-32">ADMIN SITE</h1>
      <h1 className="text-center mb-32 text-2xl font-bold">ENQUIRES</h1>
        <div id="enqCard" className="w-8/12 grid sm:grid-cols-2 lg:grid-cols-3 m-auto">
        {enquires.map((eMessage) => (
            <div className="relative rounded-lg overflow-hidden  shadow-2xl">
         
                <div className="bottom-card flex flex-col px-6 py-3 mt-2 mb-20 gap-5  ">
                    <h1 className="">
                        {eMessage.message}
                    </h1>
                    <p className=" text-gray-500 font-extralight text-sm mt-2 ">
                        {eMessage.email}
                    </p>
                  
                </div>
             
            </div>
        ))}
      
        </div>

        <h1 className="text-center font-bold mb-32 text-2xl mt-32">Contact Messages</h1>
        <div id="contactCard" className="w-8/12 grid sm:grid-cols-2 lg:grid-cols-3 m-auto">
        {contactMessages.map((cMessage) => (
            <div className="relative rounded-lg overflow-hidden  shadow-2xl">
         
                <div className="bottom-card flex flex-col px-6 py-3 mt-2 mb-20 gap-5  ">
                    <h1 className="">
                        {cMessage.message}
                    </h1>
                    <p className=" text-gray-500 font-extralight text-sm mt-2 ">
                        {cMessage.email}
                    </p>
                  
                </div>
             
            </div>
        ))}
         
         </div>

         <div className="flex flex-col justify-center  sm:w-96 sm:m-auto mx-5 mb-5 m  space-y-8 mt-36">
      <h1 className="font-bold text-center mt-16  text-4xl ">Create establishment</h1>
      <form action="#" className="flex flex-col">
        <div class="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
       

          <div class="flex flex-col space-y-1">
            <input onChange={e => setTitle(e.target.value)} value={title} type="text" name="title" id="title" className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="title" />
          </div>

          <div className="flex flex-col space-y-1">
            <input onChange={e => setAdresse(e.target.value)} value={adresse} type="text" name="adresse" id="adresse" className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="adresse" />
          </div>

          <div className="flex flex-col space-y-1">
            <textarea onChange={e => setType(e.target.value)} value={type} type="text" name="type" id="type" className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="type" ></textarea>
          </div>

        

          <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
           
            <button onClick={() => handlePush()} type="submit" id="submit" className="bg-blue-500 w-full text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors">Publish</button>
          </div>
        </div>
      </form>
     
    </div>
  
     
</>
)      
}


        


    

export default Admin;



