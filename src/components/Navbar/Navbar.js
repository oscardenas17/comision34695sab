import CartWidget from "../CartWidget/CartWidget"
import {Link} from 'react-router-dom'



const Navbar = () => {
    return (
        <nav className="relative w-full bg-gray-800 flex item-center justify-between py-3 text-white shadow-lg navbar navbar-expand-lg navbar-light">
            
            <div className="container-fluid w-full flex items-center justify-between px-6">  

                <div>
                    <h1 className='text-2xl text-white pr-2 font-semibold'>
                    <Link to='/'>
                             ECOMMERCE
                     </Link>
                    
                    </h1>
                </div>
                <div>
                    <Link to='/category/desayunos' className='px-2'>Desayunos Sorpresa</Link>
                    <Link to='/category/decoracion' className='px-2'>Decoraciones</Link>
                    <Link to='/category/peluches' className='px-2'>Peluches</Link>
                </div>

                <CartWidget/>
              
            </div>        
    </nav> 






    )
}

export default Navbar