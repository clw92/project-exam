import axios from "axios";
import Link from "next/link"
import { useEffect, useState } from "react";

const url = "https://still-eyrie-92313.herokuapp.com/hotels";




export const getStaticProps = async () => {
    const res = await axios.get(url)
    const data = res.data;

   
    return{
        props:{
        hotels:data
    }
    }
}




const Hotels = ({hotels}) => {

   
const [search, setSearch] = useState("");
const [filteredHotels, setFilteredHotels] = useState([]);

useEffect(() => {
setFilteredHotels(
    hotels.filter( hotel => {
        return hotel.title.toLowerCase().includes( search.toLocaleLowerCase())
    })
)
},[search,hotels])



return (

<>
<div
   className="establish text-4xl text-center mb-56 mt-56 p-10 flex m-auto text-usedColors-black  justify-center min-w-4/12"
   >
   FIND ESTABLISHMENTS
</div>
<div className="page-container w-8/12 m-auto">
    <div className="search mb-20 flex justify-between  m-auto max-w-7xl">
        <input 
            onChange={e => setSearch(e.target.value)}
            type="text"
            placeholder="search"
            className="border rounded-full border-usedColors-black px-4 outline-none w-full h-10"
            id="searchInput"
        />
     
    </div>
  
    <div id="results" className="mb-32 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {filteredHotels.map((hotel) => (
            <div className="relative rounded-lg overflow-hidden  shadow-2xl">
          
                <div className="bottom-card flex flex-col px-6 py-3 mt-2 mb-12 gap-5  ">
                <img src={hotel.img.url}/>
                    <h1 className="">
                        {hotel.title}
                    </h1>
                    <p className=" text-gray-500 font-extralight text-sm mt-2 ">
                        {hotel.adresse}
                    </p>
                    <p className=" text-gray-500 font-extralight text-sm mt-2 ">
                        {hotel.type}
                    </p>
                </div>
                <Link href={'/holidaze/' + hotel.id} key={hotel.title}>
                <button className=" absolute bottom-0 bg-usedColors-green text-white p-2 w-full tracking-widest font-light"><a>DETAILS</a></button>
                </Link>
            </div>
        ))}
    </div>            
</div>
</>
)
}
export default Hotels;

