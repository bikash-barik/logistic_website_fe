import { CiGrid2H, CiSearch } from "react-icons/ci";
import { FaShoppingBag, FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#003751] shadow-lg' : 'bg-transparent'}`}>
            {/* Navbar */}
            <div className='flex h-20 lg:h-24 w-full px-4 sm:px-6 lg:px-12 xl:px-16 justify-between items-center max-w-[1920px] mx-auto'>
                {/* Logo */}
                <div className='flex-shrink-0'>
                    <img
                        src="https://frexuswp.websitelayout.net/wp-content/uploads/2025/11/logo-inner.png"
                        className='h-10 sm:h-12 lg:h-14 w-auto'
                        alt="Frexus Logo" 
                    />
                </div>

                {/* Desktop Navigation */}
                <div className='hidden lg:flex justify-between gap-6 xl:gap-8 text-white font-medium text-base xl:text-lg'>
                    <div className="cursor-pointer hover:text-orange-500 transition-colors duration-300">Home</div>
                    <div className="cursor-pointer hover:text-orange-500 transition-colors duration-300">Pages</div>
                    <div className="cursor-pointer hover:text-orange-500 transition-colors duration-300">Service</div>
                    <div className="cursor-pointer hover:text-orange-500 transition-colors duration-300">Portfolio</div>
                    <div className="cursor-pointer hover:text-orange-500 transition-colors duration-300">Blog</div>
                    <div className="cursor-pointer hover:text-orange-500 transition-colors duration-300">Contact</div>
                </div>

                {/* Icons */}
                <div className="flex gap-4 lg:gap-5 text-white text-lg lg:text-xl">
                    <div className="cursor-pointer hover:text-orange-500 transition-colors duration-300 hidden sm:block">
                        <FaShoppingBag />
                    </div>
                    <div className="cursor-pointer hover:text-orange-500 transition-colors duration-300 hidden sm:block">
                        <CiSearch />
                    </div>
                    <div className="cursor-pointer hover:text-orange-500 transition-colors duration-300 hidden sm:block">
                        <CiGrid2H />
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <button 
                        className="lg:hidden text-2xl cursor-pointer hover:text-orange-500 transition-colors duration-300"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <FaBars />
                    </button>
                </div>
            </div>
            
            <div className={`w-full border-b transition-all duration-300 ${isScrolled ? 'border-white/10' : 'border-white/30'}`}></div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 bg-[#003751] z-40 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ top: '80px' }}>
                <div className='flex flex-col gap-6 p-8 text-white font-medium text-xl h-full overflow-y-auto'>
                    <div className="cursor-pointer hover:text-orange-500 transition-colors duration-300 border-b border-white/10 pb-4">Home</div>
                    <div className="cursor-pointer hover:text-orange-500 transition-colors duration-300 border-b border-white/10 pb-4">Pages</div>
                    <div className="cursor-pointer hover:text-orange-500 transition-colors duration-300 border-b border-white/10 pb-4">Service</div>
                    <div className="cursor-pointer hover:text-orange-500 transition-colors duration-300 border-b border-white/10 pb-4">Portfolio</div>
                    <div className="cursor-pointer hover:text-orange-500 transition-colors duration-300 border-b border-white/10 pb-4">Blog</div>
                    <div className="cursor-pointer hover:text-orange-500 transition-colors duration-300 border-b border-white/10 pb-4">Contact</div>
                </div>
            </div>
        </div>
    )
}

export default Nav