import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const { obtenerCantidad } = useContext(CartContext);
    const cantidad = obtenerCantidad();
  
    return (
      
      <nav className=" w-full bg-yellow-400  xl:bg-blue-500 icky top-0 z-50    ">
        <div className=" justify-between px-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
          <div>
            <div className="flex items-center justify-between py-2 md:py-2 md:block">
            
              <Link to="/" className=" flex items-center md:block">
                <img src="../../public/img/logo.png"  alt="Logo" />
              </Link>
              <div className=" flex flex-col m-0 md:flex-row items-center justify-center space-y-2  md:space-x-4 md:space-y-0  ">
            <h1 className="text-2xl text-white pr-2 font-semibold">
              <Link to="/">ECOMMERCE</Link>
            </h1>
          </div>
  
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
  
          <div>
            <div
              className={`flex-1 justify-self-center pb-3  md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              
              <div>
        
          <div>
            <Link
              to="/category/desayunos"
              className="m-2 my-4 inline-block rounded-full bg-red-500 text-white font-bold px-6 py-2 md:py-3 hover:bg-white hover:text-black transition duration-500 text-center"
            >
              Desayunos Sorpresa
            </Link>
            <Link
              to="/category/decoracion"
              className="m-2 my-4 inline-block rounded-full bg-red-500 text-white font-bold px-6 py-2 md:py-3 hover:bg-white hover:text-black transition duration-500 text-center"
            >
              Decoraciones
            </Link>
            <Link
              to="/category/peluches"
              className="my-4 inline-block rounded-full bg-red-500 text-white font-bold px-6 py-2 md:py-3 hover:bg-white hover:text-black transition duration-500 text-center"
            >
              Peluches
            </Link>
           { cantidad > 0 && (
            <div className=" m-2 my-4 inline-block rounded-full bg-black text-white font-bold px-6 py-2 md:py-3 hover:bg-white hover:text-black transition duration-500 text-center">  <CartWidget /></div>)}
          
          </div>

          
  
          
          </div>
  
  
              
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  
