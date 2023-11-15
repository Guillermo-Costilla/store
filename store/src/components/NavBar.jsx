import logo from '../assets/store.png'

const NavBar = () => {
    return (
        <div className="w-full h-[100px] flex grow mb-10">
            <div className=' text-2xl font-bold flex flex-1'>
                <div className='w-full '>
                    <img src={logo} alt="store" className='w-[75px] h-[75px]' />
                </div>
                <div className='w-full'>
                    <input type="search" name="filter" id="filter" placeholder='Search your product' />
                </div>
                <div className='w-full'>
                    <h3 className='text-lg'>Country: Argentina</h3>
                </div>
            </div>
        </div>
    )
}

export default NavBar