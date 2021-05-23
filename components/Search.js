import axios from "axios";
import {useState,useEffect} from "react";





export const getStaticProps = async (context) => {
  const res = await axios.get(url)
  const data = res.data;

 
  return{
    props:{
    hotels:data
    }
  }
  }


  



const SearchFilter = (props) => {


 

 
 



}

export default SearchFilter;

