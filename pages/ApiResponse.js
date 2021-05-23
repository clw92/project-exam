const url = "http://localhost:1337/Hotels";

export async function getStaticProps() {

  const res = await fetch(url)
  const data = await res.json()
  console.log(data)
  

  return {
    props: {
      hotels: data
    }
    
  }
 
  
}

function ApiResponse({ hotels }) {

  return (
    /*<ul>
      {hotels.map((hotel) => (
        <li>{hotel.title}</li>
      ))}
    </ul>*/
    <h1>Hello</h1>
   
   
  )
}




export default ApiResponse;




/*function ApiResponse( {data} ) {

return (
  <div class="relative rounded-lg overflow-hidden  shadow-2xl">
  <img class="w-full h-40" src="http://localhost:1337${item.img.url}" alt=""/>
 

<div class="bottom-card flex flex-col px-6 py-3 mt-2 mb-20 gap-5  ">
  <h1 class="">
  ${data.title}
  </h1>
  <p class=" text-gray-500 font-extralight text-sm mt-2 ">
  ${data.adresse}
  </p>
  <p class=" text-gray-500 font-extralight text-sm mt-2 ">
  ${data.type}
  </p>
 
</div>
<button class=" absolute bottom-0 bg-usedColors-green text-white p-2 w-full tracking-widest font-light">DETAILS</button>
</div>
      /*<div class="page-container w-10/12 m-auto">
<div
class="establish text-4xl text-center mb-56 mt-56 p-10 flex m-auto text-usedColors-black  justify-center min-w-4/12"
>
FIND ESTABLISHMENTS
</div>

<div class="search mb-20 flex justify-between w-10/12 m-auto max-w-7xl">
<input
  type="text"
  placeholder="search"
  class="border rounded-full border-usedColors-black px-4 outline-none"
/>
<ul class="flex">
  <li class="px-8">Hotels</li>
  <li class="px-8">B&B</li>
  <li class="pl-8">GUESTHOUSE</li>
</ul>
</div>

<div class="w-10/12 m-auto max-w-7xl mb-20">
<div
  id="results"
  class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
></div>
</div>
</div>
)
}

export async function getStaticProps() {

  const res = await fetch(url)
  const data = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
  }
}



export default ApiResponse;*/