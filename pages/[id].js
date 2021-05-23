const url = "https://still-eyrie-92313.herokuapp.com/hotels";
import axios from "axios";



export const getStaticPaths = async () => {
    const res = await axios.get (url);
    const data = res.data

const paths = data.map(item => {
    return {
        params: {id:item.id.toString()}
    }
})

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (context) => {
    const id = context.params.id;
 
    const res = await axios(url + '/' +id);
    const data = res.data;
    console.log(res)
    

        return {
            props:{
                hotels:data
                }
            }

  
    
 
    
}

const Details = ({hotels}) => {
   




      
    return (

        
        <div className=" w-10/12  m-auto flex flex-col items-center mt-32 mb-32 ">    
            <h1 className="text-center text-3xl mb-6"> {hotels.title} </h1>
            <img className="mb-32" src={hotels.img.url}/>
            
      
            <h3 className="text-left mb-6" >Detail</h3>
            <p className="w-7/12"> {hotels.description} </p>
        
            
            
        </div>


      )      
       
        

    }
        
     
        
        
 
    

export default Details;

