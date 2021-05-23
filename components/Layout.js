import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
    return ( 
        <div className="content w-full font-text ">
            <Navbar/>
            {children}
            <Footer/>
        </div>
     );
}

export default Layout;