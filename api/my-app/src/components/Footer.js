import "../styles/stylecomponent/stylefooter.css";

export function Footer() {
  return (
    <footer>
      <div className="footer-wrap">
        <div className="footer-col">
          <div className="footer-logo">
            <img className="footer-logo" src="/img/logo2.png" alt="" />
          </div>
        </div>
        <div className="footer-col">
          <h4 className="footer-title">Layanan</h4>
          <p className="footer-subtitle">Adopsi</p>
          <p className="footer-subtitle">Donasi</p>
          <p className="footer-subtitle">Event</p>
          <p className="footer-subtitle">Informasi Shelter</p>
          <p className="footer-subtitle">Blog</p>
        </div>
        <div className="footer-col">
          <h4 className="footer-title">Informasi</h4>
          <p className="footer-subtitle">Tentang Kami</p>
          <p className="footer-subtitle">Kebijakan REPAW</p>
          <p className="footer-subtitle">Kebijakan Privasi</p>
        </div>
        <div className="footer-col">
          <h4 className="footer-title">Ikuti Kami</h4>
          <a href="#" className="footer-subtitle">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="#" className="footer-subtitle">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="#" className="footer-subtitle">
            <i className="fab fa-youtube"></i> Youtube
          </a>
        </div>
        <div className="footer-col">
          <h4 className="footer-title">Kontak Kami</h4>
          <a href="#" className="footer-subtitle">
            <i className="fab fa-whatsapp"></i> Whatsapp
          </a>
          <a href="#" className="footer-subtitle">
            <i className="fab fa-line"></i> Line
          </a>
          <a href="#" className="footer-subtitle">
            <i className="fa fa-envelope"></i> cs@repaw.com
          </a>
        </div>
      </div>
    </footer>
  );
}
