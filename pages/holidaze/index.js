


import Link from "next/link";




const Landing = () => {
    return (

  <div id="landing-page" className="flex flex-col h-screen w-10/12 m-auto">


<div
  className="landing-text flex flex-col h-5/6 items-center justify-evenly"
>
  <div
    className="upper-text text-center animate__animated animate__backInLeft"
  >
    <div className="">
      <div
        className="flex text-center tracking-widest md:tracking-underTitle lg:tracking-title text-6xl"
      >
        <div className="text-usedColors-black">H</div>
        <div className="text-usedColors-lightbeige">O</div>
        <div className="text-usedColors-green">L</div>
        <div className="text-usedColors-black">I</div>
        <div className="text-usedColors-middlebeige">D</div>
        <div className="text-usedColors-black">A</div>
        <div className="text-usedColors-middlebeige">Z</div>
        <div className="text-usedColors-black">E</div>
      </div>
      <div className="mt-10 md:tracking-underTitle font-thin">
        FIND YOUR PERFECT STAY IN
    <span className="bg-usedColors-green text-white px-4">BERGEN</span>
      </div>
    </div>
  </div>

  <div
    id="images"
    className="transform rotate-6 flex w-10/12 sm:w-6/12 lg:w-6/12 gap-4 p-6 rounded shadow-2xl max-w-xl"
  >
    <div>
      <img
        
        src="/michael-fousert-lE5-z4nTCTQ-unsplash.jpg"
      
        alt=""
      />
    </div>
    <div>
      <img
        src="/nathan-van-de-graaf-hG5s3QZ5tJ4-unsplash.jpg"
        alt=""
        className="mt-5"
      />
    </div>
    <div>
      <img
        src="/florencia-viadana-9z3LiQeBY_o-unsplash.jpg"
        alt=""
        className="mt-10"
      />
    </div>



 
  </div>

  <Link href={'/hotels/'}>
  <button
    className="landing-button  hover:bg-usedColors-black hover:text-white text-usedColors-black border border-usedColors-black p-4 rounded-full w lg:w-3/12 tracking-wide"
  >
    VIEW ESTABLISHMENTS
</button>
</Link>
</div>
</div>

    )
}

export default Landing;





