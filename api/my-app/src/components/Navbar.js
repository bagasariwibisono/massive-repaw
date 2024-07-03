import "../styles/stylecomponent/stylenavbar.css";
import { Link } from "react-router-dom";

export function Navbar() {
  const isVerified = Boolean(localStorage.getItem('token'))
  const userData = JSON.parse(localStorage.getItem('user_data'))

  return (
    <header>
      <div className="header-wrap">
        <div className="header-logo">
          <Link to="/">
            <img className="header-logo-img" src="/img/logo1.png" />
          </Link>
        </div>
        <nav>
          <Link to={isVerified ? '/adopsi' : '/login'}>ADOPSI</Link>
          <Link to={isVerified ? '/donasi' : '/login'}>DONASI</Link>
          <Link to={isVerified ? '/event' : '/login'}>EVENT</Link>
          <Link to={isVerified ? '/shelter' : '/login'}>SHELTER</Link>
          <Link to={isVerified ? '/blog' : '/login'}>BLOG</Link>
        </nav>
        {isVerified ? (
          <div className="header-user">
              <img src="/img/img6.png" alt="" className="header-user-img" />
              <span className="header-user-label">{userData.firstname}</span>
              <i className="fa fa-angle-down"></i>
          </div>
        ) : (
          <div className="header-action">
            <Link to="/login">
              <button className="btn btn-outline">MASUK</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-fill">DAFTAR</button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
