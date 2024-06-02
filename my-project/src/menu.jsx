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
        const menuHeight = menuRef.current ? menuRef.current.offsetHeight : 0;
        const menuWidth = menuRef.current ? menuRef.current.offsetWidth : 0;
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;

        let top = buttonRect.bottom;
        let left = buttonRect.left;

        if (top + menuHeight > viewportHeight) {
          top = buttonRect.top - menuHeight; // Position above the button if it overflows
        }
        if (left + menuWidth > viewportWidth) {
          left = viewportWidth - menuWidth; // Adjust to fit within viewport width
        }

        setMenuPosition({ top, left });
      }
    }

    updateMenuPosition();
    window.addEventListener('resize', updateMenuPosition);
    return () => {
      window.removeEventListener('resize', updateMenuPosition);
    };
  }, [menuOpen]);

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
        <button
          id="menu-button"
          onClick={toggleMenu}
          className="focus:outline-none"
          aria-expanded={menuOpen}
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <div className="rounded-full bg-white p-1">
            <DotsThreeCircle size={32} />
          </div>
        </button>
        {menuOpen && (
          <div
            id="dropdown-menu"
            ref={menuRef}
            className="absolute bg-white rounded shadow-md z-50"
            style={{ top: menuPosition.top, left: menuPosition.left }}
          >
            <a
              href="https://portfolio-plum-rho-37.vercel.app/"
              className="block p-2 hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="CV.pdf"
              className="block p-2 hover:bg-gray-100"
              download="CV.pdf"
            >
              Download
            </a>
          </div>
        )}
      </div>
    </Draggable>
  );
}
