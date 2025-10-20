import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false); // Close dropdown after language change
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full top-0 z-10 p-4 ${isScrolled ? 'bg-white bg-opacity-10 duration-500 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="mx-auto px-10 flex justify-between items-center">
        <h1 className="text-2xl text-primary font-bold">Zakary BEN EL GHARIB</h1>
        <nav className="hidden md:flex space-x-4 items-center">
          <a href="#home" className="menu-link">
            <FaHome className="mr-2" /> {t('home')}
          </a>
          <a href="#about" className="menu-link">
            <FaUser className="mr-2" /> {t('about')}
          </a>
          <a href="#projects" className="menu-link">
            <FaProjectDiagram className="mr-2" /> {t('projects')}
          </a>
          <a href="mailto:benelgharib.zakarypro@gmail.com" className="menu-link">
            <FaEnvelope className="mr-2" /> {t('contact')}
          </a>
          <div className="relative">
            <button 
              className="text-primary menu-link flex items-center" 
              onClick={toggleDropdown}
            >
              <span className="mr-2 text-primary">{t('language')}</span>
              <FaChevronDown />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white bg-opacity-10 duration-500 backdrop-blur-md rounded shadow-lg">
                <a className="block px-4 py-2 menu-link " onClick={() => changeLanguage('fr')}>Français</a>
                <a className="block px-4 py-2 menu-link " onClick={() => changeLanguage('en')}>English</a>
              </div>
            )}
          </div>
        </nav>
        <button 
          className="md:hidden text-gray-100 focus:outline-none" 
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col bg-transparent backdrop-blur-md p-4 space-y-4 mt-4 rounded">
          <a href="#home" className="text-gray-100 hover:text-white flex items-center">
            <FaHome className="mr-2" /> {t('home')}
          </a>
          <a href="#about" className="text-gray-100 hover:text-white flex items-center">
            <FaUser className="mr-2" /> {t('about')}
          </a>
          <a href="#projects" className="text-gray-100 hover:text-white flex items-center">
            <FaProjectDiagram className="mr-2" /> {t('projects')}
          </a>
          <a href="mailto:benelgharib.zakarypro@gmail.com" className="text-gray-100 hover:text-white flex items-center">
            <FaEnvelope className="mr-2" /> {t('contact')}
          </a>
          <div className="relative">
            <button 
              className="text-gray-300 flex items-center" 
              onClick={toggleDropdown}
            >
              <span className="mr-2">{t('language')}</span>
              <FaChevronDown />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 border border-gray-200 rounded shadow-lg">
                <a className="block px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('fr')}>Français</a>
                <a className="block px-4 py-2 hover:bg-gray-100" onClick={() => changeLanguage('en')}>English</a>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
