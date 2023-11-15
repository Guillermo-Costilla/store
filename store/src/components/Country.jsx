import { useState } from 'react';

const Country = () => {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleCountry = (countryName) => {
        setSelectedCountry(countryName);
        setDropdownVisible(false);
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <>
            <div className="relative inline-block">
                <button
                    id="dropdownDelayButton"
                    onClick={toggleDropdown}
                    className="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    type="button"
                >
                    Country: {selectedCountry ? selectedCountry : 'Select'}
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>

                {dropdownVisible && (
                    <div
                        id="dropdownDelay"
                        className="absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                            <li>
                                <button
                                    onClick={() => handleCountry('Argentina')}
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full"
                                >
                                    Argentina
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleCountry('Brasil')}
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full"
                                >
                                    Brasil
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleCountry('Uruguay')}
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full"
                                >
                                    Uruguay
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleCountry('Chile')}
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full"
                                >
                                    Chile
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Country;
