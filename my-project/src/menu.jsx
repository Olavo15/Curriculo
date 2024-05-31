import { useState, useEffect, useRef } from 'react';
import { DotsThreeCircle } from "@phosphor-icons/react";
import Draggable from 'react-draggable';

export default function Project() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const menuRef = useRef(null);

  useEffect(() => {
    function updateMenuPosition() {
      const buttonRect = document.getElementById('menu-button').getBoundingClientRect();
      setMenuPosition({ top: buttonRect.bottom, left: buttonRect.left });
    }

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
      <div className="relative">
        <button id="menu-button" onClick={toggleMenu} className="focus:outline-none">
          <div className="rounded-full bg-white p-1">
            <DotsThreeCircle size={32} />
          </div>
        </button>
        {menuOpen && (
          <div ref={menuRef} className="absolute bg-white rounded shadow-md" style={{ top: menuPosition.top, left: menuPosition.left }}>
            <a href="#home" className="block p-2 hover:bg-gray-100">Home</a>
            <a href="#download" className="block p-2 hover:bg-gray-100">Download</a>
          </div>
        )}
      </div>
    </Draggable>
  );
}
