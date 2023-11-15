import { useState, useEffect } from 'react';
import axios from 'axios';

const Articulos = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products/');
                setData(response.data);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };
        fetchData();

        return () => {
            // Código de limpieza si es necesario
        };
    }, []);

    // Función para generar estrellas basadas en el rating
    const renderStars = (rating) => {
        const totalStars = 5;
        const fullStars = Math.floor(rating);
        const halfStars = Math.ceil(rating - fullStars);
        const emptyStars = totalStars - fullStars - halfStars;

        const stars = [];

        // Estrellas llenas
        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <svg key={`star-full-${i}`} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffec00" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                    </svg>
                </svg>
            );
        }

        // Estrellas a la mitad
        for (let i = 0; i < halfStars; i++) {
            stars.push(
                <svg key={`star-half-${i}`} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star-half" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffec00" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253z" />
                    </svg>
                </svg>
            );
        }

        // Estrellas vacías
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <svg key={`star-empty-${i}`} className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star-off" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffec00" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 3l18 18" />
                        <path d="M10.012 6.016l1.981 -4.014l3.086 6.253l6.9 1l-4.421 4.304m.012 4.01l.588 3.426l-6.158 -3.245l-6.172 3.245l1.179 -6.873l-5 -4.867l6.327 -.917" />
                    </svg>
                </svg>
            );
        }

        return stars;
    };

    return (
        <div className='w-full mb-10'>
            {data && (
                <div key={4} className='flex flex-wrap gap-4 justify-center items-center'>
                    {data.map((item, index) => (
                        <div className="w-full max-w-sm h-[550px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={index}>
                            <a href="#">
                                <img className="bg-auto p-8 h-[350px] w-full rounded-lg" src={item.image} alt="product image" />
                            </a>
                            <div className="px-5 pb-2">
                                <a href="#">
                                    <h5 className="text-base tracking-tight text-gray-900 dark:text-white min-h-[70px]">{item.title}</h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5">
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse min-h-[22px]">
                                        {renderStars(item.rating.rate)}
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{item.rating.rate}</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between min-h-[50px]">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${item.price}</span>
                                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More details</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Articulos;
