import CartWidget from "../CartWidget/CartWidget"



const Navbar = () => {
    return (
        <nav className="relative w-full bg-gray-800 flex item-center justify-between py-3 text-white shadow-lg navbar navbar-expand-lg navbar-light">
            
            <div className="container-fluid w-full flex items-center justify-between px-6">  

                <div>
                    <h1 className='text-2xl text-white pr-2 font-semibold'>Ecommerce</h1>
                </div>
                <div>
                    <button className='px-2'>Desayunos Sorpresa</button>
                    <button className='px-2'>Decoraciones</button>
                    <button className='px-2'>Peluches</button>
                </div>

                <CartWidget/>
              
            </div>        
    </nav> 






    )
}

export default Navbar