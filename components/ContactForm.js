
import { useEffect } from "react";

const ContactForm = () => {


  useEffect(() => {
    const sendContact = document.getElementById("submit");
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let contactArray = localStorage.getItem('items')
    ? JSON.parse(localStorage.getItem('items'))
    : []
  
  localStorage.setItem('contact', JSON.stringify(contactArray))
 


  

  
  sendContact.addEventListener('click', function (e) {
    e.preventDefault()
   
 
    contactArray.push("name: " + name.value,"email: " + email.value,"message: " + message.value )
    localStorage.setItem('contact', JSON.stringify(contactArray))
    
    name.value= ''
    email.value= ''
    message.value= ''
   
    
   
  })

 
  

})






    return (
       
      <div class="font-sans min-h-screen antialiased bg-usedColors-black  pb-5">
      <div class="navbar h-40 flex items-center justify-evenly w-10/12 m-auto mb-20">
          <div class="logo text-white">
            CONTACT
          </div>
          <div class="bg-white h-0.5 w-6/12 mr-4 ml-4"></div>
          <div class="menu flex list-none text-white bg-black p-10">
            <li class="px-4">Home</li>
            <li class="px-4">Establishments</li>
            <li class="px-4">Enquires</li>
            <li>Contact</li>
          </div>
        </div>
  
    <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
      <h1 className="font-bold text-center text-white text-4xl bg-usedColors-black">Contact<span class="text-black">Us</span></h1>
      <form action="#" className="flex flex-col">
        <div class="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
          <h1 class="font-bold text-xl text-center">Sign in to your account</h1>

          <div class="flex flex-col space-y-1">
            <input type="text" name="name" id="name" className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="name" />
          </div>

          <div className="flex flex-col space-y-1">
            <input type="email" name="email" id="email" className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="email" />
          </div>

          <div className="flex flex-col space-y-1">
            <textarea type="message" name="message" id="message" className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="message" ></textarea>
          </div>

        

          <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
           
            <button type="submit" id="submit" className="bg-blue-500 w-full text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors">SEND</button>
          </div>
        </div>
      </form>
     
    </div>
  </div>
    )
}

export default ContactForm;