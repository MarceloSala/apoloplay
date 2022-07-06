import { Link } from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {
  return (
    <>
      <input type="checkbox" id="btn-menu" />
      <div className="container-menu">
        <div className="cont-menu">
          <nav>
            <Link to={'/'}>Inicio</Link>
            <Link to={'/songs'}>Canciones</Link>
            <Link to={'/artists'}>Artistas</Link>
          </nav>
          <label htmlFor="btn-menu">✖️</label>
        </div>
      </div>
    </>
  );
};

export default Navbar;
