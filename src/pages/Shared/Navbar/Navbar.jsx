import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-black text-white py-4 px-10 fixed z-10 bg-opacity-50 max-w-screen-xl w-full ">
            <div className="container flex items-center justify-between">
                <div className="flex items-center">
                    <div className="mr-8 flex flex-col">
                        <a href="#" className="text-lg font-bold tracking-tighter italic hover:text-gray-400">BISTRO BOSS</a>
                        <a href="#" className="text-lg font-normal tracking-widest italic hover:text-gray-400">Restaurant</a>
                    </div>

                </div>
                <div className="flex items-center">
                    <div className="md:hidden">
                        <button onClick={handleMenuToggle} className="text-white focus:outline-none">
                            {isMobileMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}>
                        <div className="bg-gray-700 text-white">
                            <a href="#" className="block py-2 px-4 font-semibold hover:text-[#EEFF25]">Home</a>
                            <a href="#" className="block py-2 px-4 font-semibold hover:text-[#EEFF25]">Contact Us </a>
                            <a href="#" className="block py-2 px-4 font-semibold hover:text-[#EEFF25]">Dashboard</a>
                            <a href="#" className="block py-2 px-4 font-semibold hover:text-[#EEFF25]">Our Menu</a>
                            <a href="#" className="block py-2 px-4 font-semibold hover:text-[#EEFF25]">Our Shop</a>
                            <a href="#" className="block py-2 px-4 font-semibold hover:text-[#EEFF25]">Cart</a>
                            <a href="#" className="block py-2 px-4 font-semibold hover:text-[#EEFF25]">Sign Out</a>
                        </div>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <a href="#" className="font-semibold hover:text-[#EEFF25]">Home</a>
                        <a href="#" className="font-semibold hover:text-[#EEFF25]">Contact Us </a>
                        <a href="#" className="font-semibold hover:text-[#EEFF25]">Dashboard</a>
                        <a href="#" className="font-semibold hover:text-[#EEFF25]">Our Menu</a>
                        <a href="#" className="font-semibold hover:text-[#EEFF25]">Our Shop</a>
                        <a href="#" className="font-semibold hover:text-[#EEFF25]">Cart</a>
                        <a href="#" className="font-semibold hover:text-[#EEFF25]">Sign Out</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
