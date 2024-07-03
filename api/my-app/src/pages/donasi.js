import React from "react";
import withAuth from "../components/withAuth.js";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";
import "../styles/styledonasi.css";

function donasi() {
  return (
    <div class="body-blog">
      <Navbar />
      <main>
        <div className="donation">
          <div className="donation-bg">
            <img src="/img/donation.png" alt="Donation" />
            <div className="donation-box">
              <img src="/img/logo3.png" alt="REPAW" className="donation-logo" />
              <h2 className="donation-title">
                Kami butuh bantuan Anda ! <br />
                Bantu shelter hewan dengan donasi anda Guna keberlangsungan
                hidup para hewan!
              </h2>
              <p className="donation-description">
                Satu donasi dari Anda bisa menyelamatkan hidup mereka, dengan
                memberi bantuan berupa makanan, bantuan pengobatan medis dan
                kesehatan bagi mereka. Tidak perlu khawatir, kami akan terus
                membuat berita terbaru sebagai bentuk laporan bagi Anda tentang
                penyaluran donasi ini. Bersama-sama, kita bisa menjadi pelindung
                bagi yang tak berbicara. Ayo, mari kita jadikan dunia ini lebih
                hangat dengan kasih sayang kita!
              </p>
            </div>
          </div>
          <div className="donation-form">
            <div className="option-group">
              <div className="option">
                <input
                  type="radio"
                  name="donation-option"
                  id="donation-option-1"
                  value={10000}
                />
                <label htmlFor="donation-option-1">Rp. 10.000</label>
              </div>
              <div className="option">
                <input
                  type="radio"
                  name="donation-option"
                  id="donation-option-2"
                  value={20000}
                />
                <label htmlFor="donation-option-2">Rp. 20.000</label>
              </div>
              <div className="option">
                <input
                  type="radio"
                  name="donation-option"
                  id="donation-option-3"
                  value={50000}
                />
                <label htmlFor="donation-option-3">Rp. 50.000</label>
              </div>
            </div>
            <div className="option-group">
              <div className="option">
                <input
                  type="radio"
                  name="donation-option"
                  id="donation-option-4"
                  value={100000}
                />
                <label htmlFor="donation-option-4">Rp. 100.000</label>
              </div>
              <div className="option">
                <input
                  type="radio"
                  name="donation-option"
                  id="donation-option-5"
                  value={150000}
                />
                <label htmlFor="donation-option-5">Rp. 150.000</label>
              </div>
              <div className="option">
                <input
                  type="radio"
                  name="donation-option"
                  id="donation-option-6"
                  value={200000}
                />
                <label htmlFor="donation-option-6">Rp. 200.000</label>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-text">Rp.</div>
                <input
                  type="number"
                  className="input"
                  placeholder="Nominal Lainnya"
                />
              </div>
            </div>
            <div className="form-group">
              <span className="form-label">Pilih Tipe Donasi untuk Hewan</span>
              <div className="option-group">
                <div className="option">
                  <input
                    type="radio"
                    name="donation-type"
                    id="donation-type-1"
                    value="Pengobatan"
                  />
                  <label htmlFor="donation-type-1">Pengobatan</label>
                </div>
                <div className="option">
                  <input
                    type="radio"
                    name="donation-type"
                    id="donation-type-2"
                    value="Makanan"
                  />
                  <label htmlFor="donation-type-2">Makanan</label>
                </div>
                <div className="option">
                  <input
                    type="radio"
                    name="donation-type"
                    id="donation-type-3"
                    value="Kesehatan"
                  />
                  <label htmlFor="donation-type-3">Kesehatan</label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <span className="form-label">Isi data diri</span>
              <input type="text" className="input" placeholder="Nama Lengkap" />
              <input
                type="email"
                className="input"
                placeholder="Alamat Email"
              />
              <input type="tel" className="input" placeholder="Nomor Telepon" />
            </div>
            <div className="form-select">
              <span className="form-select-label">Pilih metode Pembayaran</span>
              {/* <span className="form-select-action" onClick={popupPaymentToggle}>
                Pilih
                <img src="./img/caret.png" alt="Caret" />
              </span> */}
            </div>
            {/* <button className="btn btn-form" onClick={popupSuccessToggle}>DONASI SEKARANG</button> */}
          </div>
        </div>
        <h2 className="blog-heading">Informasi Seputar Penyaluran Donasi</h2>
        <div class="container mt-5">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {Array.from(Array(3), (e, i) => {
              return (
                <div class="col">
                  <div class="card news-card">
                    <img
                      src="../../img/content-blog.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h6 class="blog-card-title">
                        Peduli Akan Kesejahteraan Hewan Terlantar, Repaw Kembali
                        Memberi Bantuan ke Shelter Hewan di Tange..
                      </h6>
                      <p class="card-text">Fitriyani | 20 Mei 2034</p>
                      <Link to="/detailblog" className="btn btn-blog">
                        Lebih lanjut
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="pagination pagination-side">
          <Link to="/blog" className="pagination-link">
            Lihat Selengkapnya
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function PopupPayment({ setOpened }) {
  return (
    <div className="popup-container">
      <div className="popup popup-payment">
        <button className="btn btn-close" onClick={() => setOpened(false)}>
          <i className="fa fa-times"></i>
        </button>
        <h2 className="payment-title">
          <span>Debit Card</span>
        </h2>
        <div className="payment-list">
          <div className="payment-item">
            <img src="./img/bca.png" alt="BCA" className="payment-img" />
            <span className="payment-label">Bank BCA</span>
          </div>
          <div className="payment-item">
            <img
              src="./img/mandiri.png"
              alt="Mandiri"
              className="payment-img"
            />
            <span className="payment-label">Bank Mandiri</span>
          </div>
          <div className="payment-item">
            <img src="./img/bni.png" alt="BNI" className="payment-img" />
            <span className="payment-label">Bank BNI</span>
          </div>
          <div className="payment-item">
            <img src="./img/bri.png" alt="BRI" className="payment-img" />
            <span className="payment-label">Bank BRI</span>
          </div>
        </div>
        <h2 className="payment-title">
          <span>eWallet</span>
        </h2>
        <div className="payment-list">
          <div className="payment-item">
            <img src="./img/dana.png" alt="DANA" className="payment-img" />
            <span className="payment-label">DANA</span>
          </div>
          <div className="payment-item">
            <img src="./img/gopay.png" alt="GOPAY" className="payment-img" />
            <span className="payment-label">GOPAY</span>
          </div>
          <div className="payment-item">
            <img src="./img/ovo.png" alt="OVO" className="payment-img" />
            <span className="payment-label">OVO</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PopupSuccess({ setOpened }) {
  return (
    <div className="popup-container">
      <div className="popup popup-success">
        <div className="success-icon">
          <i className="fa fa-check"></i>
        </div>
        <h2 className="success-title">BERHASIL TERKIRIM !</h2>
        <p className="success-subtitle">
          Terima Kasih atas bantuan Anda
          <br />
          Tunggu informasi laporan donasi
          <br />
          di berita terbaru ya!
        </p>
        <button className="btn btn-success" onClick={() => setOpened(false)}>
          Kembali
        </button>
      </div>
    </div>
  );
}

export default withAuth(donasi)
