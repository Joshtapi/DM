import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import SidebarMenu from './SidebarMenu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => setMenuOpen(!menuOpen);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <nav className="nav container">
          {/* ==== LADO IZQUIERDO ==== */}
          <div className="nav-left">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAzNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMS43NTIgMjMuMDM4NUMwLjgxMzc2NyAyMy4wMzg1IDAuMDQyNDY2NyAyMi4yOTg2IDAuMDAzNDk5OTggMjEuMzYxMkMtMC4wMzc4MjUzIDIwLjM2NyAwLjc1Njk3NyAxOS41Mzg1IDEuNzUxOTkgMTkuNTM4NUgzMi4yNDlDMzMuMTg3MiAxOS41Mzg1IDMzLjk1ODUgMjAuMjc4NCAzMy45OTc1IDIxLjIxNThDMzQuMDM4OCAyMi4yMSAzMy4yNDQgMjMuMDM4NSAzMi4yNDkgMjMuMDM4NUgxLjc1MlpNNS45NjcxNSAxMy41QzQuOTM2ODYgMTMuNSA0LjEwMTY1IDEyLjY2NDggNC4xMDE2NSAxMS42MzQ1QzQuMTAxNjUgMTAuNjA0MiA0LjkzNjg2IDkuNzY5IDUuOTY3MTUgOS43NjlIMjYuODQ0OEMyNy44NzUxIDkuNzY5IDI4LjcxMDMgMTAuNjA0MiAyOC43MTAzIDExLjYzNDVDMjguNzEwMyAxMi42NjQ4IDI3Ljg3NTEgMTMuNSAyNi44NDQ4IDEzLjVINS45NjcxNVpNMS43NTE5OSAzLjVDMC44MTM3NjMgMy41IDAuMDQyNDY4MiAyLjc2MDEgMC4wMDM1MDA5OCAxLjgyMjY4Qy0wLjAzNzgyNDggMC44Mjg1MjcgMC43NTY5NzYgMCAxLjc1MTk5IDBIMzIuMjQ5QzMzLjE4NzIgMCAzMy45NTg1IDAuNzM5OTAxIDMzLjk5NzUgMS42NzczMkMzNC4wMzg4IDIuNjcxNDcgMzMuMjQ0IDMuNSAzMi4yNDkgMy41SDEuNzUxOTlaIiBmaWxsPSJ3aGl0ZSI+PC9wYXRoPjwvc3ZnPg=="
              alt="Menú"
              className="menu-icon"
              onClick={handleToggleMenu}
            />

            <a href="/" className="logo">
              <img
                src="https://i.postimg.cc/W4M8sBR9/images-4-1.png"
                alt="Doña Martha"
              />
            </a>
          </div>

          {/* ==== LADO DERECHO ==== */}
          <div className="nav-right">
            <a href="/recetas" className="btn white-bubble">
              <FontAwesomeIcon
                icon={faBagShopping}
                style={{ color: '#ff0000', marginRight: '10px' }}
              />
              <span className="bold">Recetas</span>
            </a>

            <a href="/tienda" className="btn white-circle">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: '#ff0000', fontSize: '24px' }}
              />
            </a>
          </div>
        </nav>
      </header>

      {/* ==== MENÚ LATERAL ==== */}
      <SidebarMenu isOpen={menuOpen} onClose={handleCloseMenu} />
    </>
  );
};

export default Header;
