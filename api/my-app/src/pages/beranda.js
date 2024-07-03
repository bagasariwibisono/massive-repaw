import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";
import "../styles/styleberanda.css";

export default function Beranda() {
  return (
    <div className="body-beranda">
      <Navbar />
      <main>
        <div className="hero-container">
          <div className="hero">
            <img className="hero-img" src="/img/img1.png" alt="" />
            <div className="hero-wrap">
              <h2 className="hero-title">
                Satu Langkah Kecil Kita Menyelamatkan Satu Kehidupan
              </h2>
              <p className="hero-description">
                Mari bersama-sama memberikan mereka kesempatan hidup yang layak
                dan membangun ikatan yang tak tergantikan dengan menyambut
                mereka ke dalam keluarga Anda. Bersama, kita bisa menjadi
                harapan bagi mereka!
              </p>
              <button className="btn btn-fill btn-main">ADOPSI SEKARANG</button>
            </div>
            <div className="hero-offset">
              <div className="hero-box">
                <img className="hero-box-image" src="/img/anjing.png" alt="" />
                <h3 className="hero-box-title">Anjing</h3>
              </div>
              <div className="hero-box">
                <img className="hero-box-image" src="/img/kucing.png" alt="" />
                <h3 className="hero-box-title">Kucing</h3>
              </div>
              <div className="hero-box">
                <img className="hero-box-image" src="/img/donasi.png" alt="" />
                <h3 className="hero-box-title">Donasi</h3>
              </div>
              <div className="hero-box">
                <img className="hero-box-image" src="/img/event.png" alt="" />
                <h3 className="hero-box-title">Event</h3>
              </div>
              <div className="hero-box">
                <img className="hero-box-image" src="/img/shelter.png" alt="" />
                <h3 className="hero-box-title">Shelter</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-container">
          <div className="faq">
            <img className="faq-img" src="/img/img2.png" alt="" />
            <div className="faq-wrap">
              <h2 className="faq-title">Kenapa Sih Harus REPAW?</h2>
              <div className="faq-box">
                <img className="faq-box-img" src="/img/img8.png" alt="" />
                <div className="faq-box-wrap">
                  <h3 className="faq-box-title">Proses Adopsi yang Mudah</h3>
                  <p className="faq-box-description">
                    Menyediakan proses adopsi yang mudah dan transparan,dengan
                    formulir dan panduan lengkap untuk membantu calon pemilik
                    melewati proses dengan lancar.
                  </p>
                </div>
              </div>
              <div className="faq-box">
                <img className="faq-box-img" src="/img/img9.png" alt="" />
                <div className="faq-box-wrap">
                  <h3 className="faq-box-title">Pilihan Hewan yang Beragam</h3>
                  <p className="faq-box-description">
                    Menawarkan beragam hewan kucing dan anjing dari berbagai
                    jenis, usia, dan latar belakang. Terjaminnya kondisi dan
                    kesehatan hewan yang siap diadopsi.
                  </p>
                </div>
              </div>
              <div className="faq-box">
                <img className="faq-box-img" src="/img/img10.png" alt="" />
                <div className="faq-box-wrap">
                  <h3 className="faq-box-title">
                    Memberi Kesejahteraan Hewan Terlantar
                  </h3>
                  <p className="faq-box-description">
                    Menekankan pentingnya kesejahteraan hewan dan juga
                    menyelamatkan hewan-hewan yang terlantar, melalui program
                    donasi dan adopsi memastikan setiap hewan mendapatkan rumah
                    yang aman dan nyaman.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="showcase-container">
          <div className="showcase">
            <div className="showcase-content">
              <h2 className="showcase-title">
                SAMPAI SAAT INI MEREKA MASIH MENUNGGU UNTUK DIADOPSI !
              </h2>
              <p className="showcase-description">
                Mereka tidak memiliki rumah, telah dicampakkan di jalanan, atau
                ditinggalkan tanpa alasan yang jelas. Mereka mencari cinta dan
                keamanan yang pantas mereka dapatkan. Sudah saatnya kita memberi
                mereka kesempatan untuk merasakan kasih sayang yang mereka
                rindukan selama ini.{" "}
              </p>
            </div>
            <div className="showcase-wrap">
              <div className="showcase-box">
                <img className="showcase-box-img" src="/img/img3.png" alt="" />
                <h3 className="showcase-box-title">Milo dan Miko</h3>
                <p className="showcase-box-description">
                  Jenis Kelamin : Jantan <br />
                  Usia : 3 Bulan
                </p>
                <p className="showcase-box-location">
                  <i className="fa fa-map-marker-alt"></i> Bandung, Jawa Barat
                </p>
              </div>
              <div className="showcase-box">
                <img className="showcase-box-img" src="/img/img4.png" alt="" />
                <h3 className="showcase-box-title">Pushy Abu</h3>
                <p className="showcase-box-description">
                  Jenis Kelamin : Betina <br />
                  Usia : 1 Bulan
                </p>
                <p className="showcase-box-location">
                  <i className="fa fa-map-marker-alt"></i> Cakung, Jakarta Timur
                </p>
              </div>
              <div className="showcase-box">
                <img className="showcase-box-img" src="/img/img3.png" alt="" />
                <h3 className="showcase-box-title">Bonbon</h3>
                <p className="showcase-box-description">
                  Jenis Kelamin : Jantan <br />
                  Usia : 2 Tahun
                </p>
                <p className="showcase-box-location">
                  <i className="fa fa-map-marker-alt"></i> Tangerang, Banten
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="testimony-container">
          <div className="testimony">
            <h2 className="testimony-title">MASIH RAGU UNTUK MULAI ADOPSI ?</h2>
            <h3 className="testimony-subtitle">
              Ini Cerita Mereka Tentang REPAW
            </h3>
            <div className="testimony-wrap">
              <div className="testimony-box">
                <img
                  className="testimony-box-bg"
                  src="/img/bg-img1.png"
                  alt=""
                />
                <div className="testimony-box-wrap">
                  <img
                    className="testimony-box-img"
                    src="/img/img5.png"
                    alt=""
                  />
                  <h4 className="testimony-box-username">
                    Putri Wulandari Ariani
                  </h4>
                  <h5 className="testimony-box-subtitle">Karyawan, Bandung</h5>
                  <p className="testimony-box-description">
                    Saya telah mengadopsi beberapa hewan dari REPAW. Salah
                    satunya kucing saya saat ini telah membawa begitu banyak
                    kebahagiaan ke dalam hidup saya. Saya akan selalu mendukung
                    program adopsi ini dan akan merekomendasikan REPAW kepada
                    semua orang yang saya kenal.
                  </p>
                </div>
                value
              </div>
              <div className="testimony-box">
                <img
                  className="testimony-box-bg"
                  src="/img/bg-img2.png"
                  alt=""
                />
                <div className="testimony-box-wrap">
                  <img
                    className="testimony-box-img"
                    src="/img/img6.png"
                    alt=""
                  />
                  <h4 className="testimony-box-username">
                    Bagas Dwiya Yudhana
                  </h4>
                  <h5 className="testimony-box-subtitle">
                    Mahasiswa, Surabaya
                  </h5>
                  <p className="testimony-box-description">
                    Proses untuk adopsi dan Informasi yang disediakan di REPAW
                    sangat mudah dan lengkap. Sehingga saya tidak lagi mengalami
                    kesulitan mencari data terkait shelter guna memudahkan
                    proses penyelamatan hewan untuk diserahkan ke shleter.
                    Terima kasih REPAW!
                  </p>
                </div>
              </div>
              <div className="testimony-box">
                <img
                  className="testimony-box-bg"
                  src="/img/bg-img3.png"
                  alt=""
                />
                <div className="testimony-box-wrap">
                  <img
                    className="testimony-box-img"
                    src="/img/img7.png"
                    alt=""
                  />
                  <h4 className="testimony-box-username">Anisa Aninditha</h4>
                  <h5 className="testimony-box-subtitle">Perawat, Jakarta</h5>
                  <p className="testimony-box-description">
                    Saya sangat bersyukur bisa membantu pengobatan hewan dari
                    program donasi disini. saat ini juga saya telah mengadopsi
                    anjing dari REPAW. Saya belajar bahwa adopsi bukan hanya
                    tentang memberi rumah bagi hewan, tetapi juga tentang
                    menemukan sahabat sejati.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
