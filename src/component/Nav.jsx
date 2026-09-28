import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
    <>
        
    <nav className="flex items-center   justify-between px-5 py-6 sticky top-5  bg-white backdrop-blur-md">
        
      <h1 className="text-4xl font-black  hover:text-red-500 hover:scale-130 transition ease-in-out items-center"  >
        <Link to={"/"} > Flone. </Link>
      </h1>

      <div className="flex gap-10 ">
        <Link to="/" className =" hover:text-blue-950 hover:scale-110 transition ease-in-out font-bold text-xl"> Home</Link>
        <Link to="/about" className =" hover:text-blue-950 hover:scale-110 transition ease-in-out font-bold text-xl">About</Link>
        <Link to="/services" className =" hover:text-blue-950 hover:scale-110 transition ease-in-out font-bold text-xl">Services</Link>
        <Link to="/contact" className =" hover:text-blue-950 hover:scale-110 transition ease-in-out font-bold text-xl">Contact</Link>
     
      </div>

      <div className=" flex w-4 gap-5 mr-35">
        <img src="search.png" alt="search" className =" hover:text-blue-950 hover:scale-150 transition ease-in-out " />
        <img src="star.png" alt="star" className =" hover:text-blue-950 hover:scale-150 transition ease-in-out"   />
        <img src="crown.png" alt="crown" className =" hover:text-blue-950 hover:scale-150 transition ease-in-out" />
        <img src="heart.png" alt="heart" className =" hover:text-blue-950 hover:scale-150 transition ease-in-out" />
        <img src="email.png" alt="email" className =" hover:text-blue-950 hover:scale-150 transition ease-in-out" />
      </div>
    </nav>
        </>


  );
};

export default Navbar;
