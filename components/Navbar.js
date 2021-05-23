import Link from "next/link";

const Navbar = () => {
    return (
      <>

      <nav class="bg-white shadow h-32">
  <div class="container mx-auto px-6 py-3 md:flex  md:justify-between md:items-center">
    <div class="flex justify-between items-center">
      <div>
        <a class="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700" href="#">HZ</a>
      </div>

   
      <div class="flex md:hidden">
        <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
          <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
          </svg>
        </button>
      </div>
    </div>

   
    <div class="md:flex items-center">
      <div class="flex flex-col md:flex-row md:mx-6">
        <Link href={'/holidaze/'}>
        <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Home</a>
        </Link>
        <Link href={'/hotels/'}>
        <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Establishments</a>
        </Link>
        <Link href={'/enquires/'}>
        <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Enquires</a>
        </Link>
        <Link href={'/contact/'}>
        <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Contact</a>
        </Link>

        <Link href={'/adminsite/'}>
        <a class="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Log In</a>
        </Link>
    
       
       
        
      </div>

     
    </div>
  </div>
  
</nav>


      </>
    )
}

export default Navbar;