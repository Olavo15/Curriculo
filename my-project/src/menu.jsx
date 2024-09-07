import { useState, useEffect, useRef } from 'react';
import { DotsThreeCircle } from "@phosphor-icons/react";

export default function Project() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const menuRef = useRef(null);

  useEffect(() => {
    function updateMenuPosition() {
      const button = document.getElementById('menu-button');
      if (button) {
        const buttonRect = button.getBoundingClientRect();
        const menuWidth = menuRef.current?.offsetWidth || 0;
        const screenWidth = window.innerWidth;

        // Agora o top é fixo (valor fixo para deixar o menu no topo da tela)
        const top = buttonRect.bottom + window.scrollY; // Alinha o menu logo abaixo do botão

        // O left é calculado para estar centralizado no botão, mas considerando os limites da tela
        let left = buttonRect.left + (buttonRect.width / 2) - (menuWidth / 2);

        // Verifica se o menu sairia da tela pela direita
        if (left + menuWidth > screenWidth) {
          left = screenWidth - menuWidth - 10;
        }

        // Verifica se o menu sairia da tela pela esquerda
        if (left < 0) {
          left = 10;
        }

        setMenuPosition({ top, left });
      }
    }

    if (menuOpen) {
      updateMenuPosition();
      window.addEventListener('resize', updateMenuPosition);
    }

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

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setMenuOpen(false);
    }
  };

  return (
    <div className="relative h-fit w-fit" onKeyDown={handleKeyDown}>
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
          className="absolute bg-white rounded shadow-md z-50 transition-opacity duration-300 ease-in-out"
          style={{ top: `${menuPosition.top}px`, left: `${menuPosition.left}px` }}
        >
          <a
            href="https://portfolio-plum-rho-37.vercel.app/"
            className="block p-2 hover:bg-gray-100"
          >
            Home
          </a>
          <a
            href="src/CV.pdf"
            className="block p-2 hover:bg-gray-100"
            download="CV.pdf"
          >
            Download
          </a>
        </div>
      )}
    </div>
  );
}
