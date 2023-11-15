import logo from '../assets/store.png'
import Pais from '../components/Country.jsx'
import Carrito from '../components/Carrito.jsx'

const NavBar = () => {
    return (
        <div className="w-full lg:h-[100px] flex justify-center mb-10 bg-gray-900">
            <div className=' text-2xl font-bold flex flex-col lg:flex-row flex-1'>
                <div className='w-full flex justify-center items-center'>
                    <img src={logo} alt="store" className='w-[110px] h-[110px]' />
                </div>
                <div className='w-full mb-4 lg:mb-0 mx-auto flex justify-center items-center'>
                    <input className='min-h-[45px]  max-w-[400px] outline-none rounded-lg text-sm border-2 border-red-500 hover:border-red-700 p-1' type="search" name="filter" id="filter" placeholder='Search your product' />
                </div>
                <div className='w-full mb-4 lg:mb-0 mx-auto flex justify-center items-center'>
                    <Pais />
                </div>
                <div className='w-full flex justify-center items-center'>
                    <Carrito />
                </div>
            </div>
        </div>
    )
}

export default NavBar