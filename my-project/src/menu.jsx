import { useState, useEffect, useRef } from 'react';
import { DotsThreeCircle } from "@phosphor-icons/react";
import Draggable from 'react-draggable';

export default function Project() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const menuRef = useRef(null);

  useEffect(() => {
    function updateMenuPosition() {
      const button = document.getElementById('menu-button');
      if (button) {
        const buttonRect = button.getBoundingClientRect();
        setMenuPosition({ top: buttonRect.bottom, left: buttonRect.left });
      }
    }

    updateMenuPosition(); // Atualizar posição inicialmente
    window.addEventListener('resize', updateMenuPosition);
    return () => {
      window.removeEventListener('resize', updateMenuPosition);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Draggable>
      <div className="relative h-fit w-fit">
        <button id="menu-button" onClick={toggleMenu} className="focus:outline-none" aria-expanded={menuOpen} aria-haspopup="true">
          <div className="rounded-full bg-white p-1">
            <DotsThreeCircle size={32} />
          </div>
        </button>
        {menuOpen && (
          <div ref={menuRef} className="absolute bg-white rounded shadow-md" style={{ top: menuPosition.top, left: menuPosition.left }}>
            <a href="https://portfolio-plum-rho-37.vercel.app/" className="block p-2 hover:bg-gray-100">Home</a>
            <a href="CV.pdf" className="block p-2 hover:bg-gray-100" download="CV.pdf">Download</a>
          </div>
        )}
      </div>
    </Draggable>
  );
}
