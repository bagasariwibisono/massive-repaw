import React from "react";
import withAuth from "../components/withAuth.js";
import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";
import "../styles/styledetailblog.css";

function detailblog() {
  return (
    <div class="body-blog">
      <Navbar />

      <maindetail>
        <article>
          <h1 class="fw-bold">
            Peduli Akan Kesejahteraan Hewan Terlantar, Repaw Kembali Memberi
            Bantuan ke Shelter Hewan di Tangerang Banten
          </h1>

          <img src=".../../img/content-blog.jpg" alt="" />
          <p class="tahun-terbit">
            Fitriyani | 20 Mei 2034 | Penyaluran Donasi
          </p>
          <p>
            <strong>Tangerang, 20 Mei 2034</strong> — Di Indonesia terdapat
            ratusan hingga ribuan hewan terlantar yang membutuhkan tempat
            tinggal dan makanan untuk bertahan hidup. Oleh karena itu Tim REPAW
            membuatkan sebuah program donasi melalui website REPAW, yang saat
            ini telah berhasil menyalurkan donasi berupa dana sebesar 15 juta
            rupiah dan 10 ton makanan hewan kepada shelter hewan di Tangerang,
            Banten. Donasi ini merupakan hasil penggalangan dana melalui website
            REPAW, sebagai wujud komitmen perusahaan dalam mendukung
            kesejahteraan hewan terlantar yang membutuhkan. Program donasi ini
            bertujuan untuk memberikan kontribusi positif kepada kehidupan
            hewan-hewan terlantar di berbagai shelter atau tempat penampungan
            Indonesia. Bantuan dana dan makanan hewan yang disalurkan diharapkan
            dapat membantu menyediakan perawatan yang layak serta lingkungan
            yang aman dan sehat bagi hewan-hewan di shelter.
          </p>
          <p>
            Salah satu perwakilan tim donasi REPAW mengungkapkan rasa terima
            kasih yang mendalam kepada para donatur yang telah mempercayai
            mereka dalam menyalurkan bantuan. "Kami sangat berterima kasih
            kepada semua donatur yang telah mendukung program ini. Kepercayaan
            dan kebaikan Anda adalah dorongan bagi kami untuk terus
            berkontribusi dalam meningkatkan kesejahteraan hewan-hewan terlantar
            yang membutuhkan," ujar Yovan sebagai ketua tim donasi REPAW.
            Pengurus shelter hewan yaitu Maria Muslimatul di Tangerang, Banten
            juga menyampaikan apresiasi mereka atas bantuan yang diberikan.
            "Partisipasi REPAW dan para donaturnya memberikan semangat dan
            harapan baru bagi kami di shelter. Dengan bantuan ini, kami dapat
            terus memberikan perawatan yang layak dan menyediakan lingkungan
            yang aman bagi hewan-hewan terlantar," kata salah satu pengurus
            shelter.
          </p>
          <p>
            Pengurus shelter hewan yaitu Maria Muslimatul di Tangerang, Banten
            juga menyampaikan apresiasi mereka atas bantuan yang diberikan.
            "Partisipasi REPAW dan para donaturnya memberikan semangat dan
            harapan baru bagi kami di shelter. Dengan bantuan ini, kami dapat
            terus memberikan perawatan yang layak dan menyediakan lingkungan
            yang aman bagi hewan-hewan terlantar," kata salah satu pengurus
            shelter.
          </p>
          <p>
            Donasi yang diberikan oleh REPAW tidak hanya berupa dana tetapi juga
            10 ton makanan hewan yang berkualitas tinggi, kaya akan nutrisi,
            vitamin, dan mineral yang diperlukan untuk kesehatan hewan. Bantuan
            ini diharapkan dapat memenuhi kebutuhan makanan hewan di shelter
            untuk beberapa bulan ke depan, memastikan hewan-hewan tersebut
            mendapatkan asupan gizi yang cukup dan sehat.
          </p>
          <p>
            Program donasi ini merupakan bagian dari upaya berkelanjutan REPAW
            untuk terus mendukung kesejahteraan hewan. Melalui berbagai
            inisiatif dan kolaborasi dengan shelter hewan, REPAW berkomitmen
            untuk menciptakan dunia yang lebih baik bagi hewan-hewan yang
            membutuhkan perhatian dan kasih sayang.
          </p>
          <p>
            Dengan adanya dukungan dari masyarakat dan para donatur, REPAW
            berharap dapat terus melanjutkan program-program serupa di masa
            mendatang dan menjangkau lebih banyak hewan yang membutuhkan
            bantuan. Perusahaan ini juga berkomitmen untuk terus meningkatkan
            upaya mereka dalam mendukung kesejahteraan hewan melalui berbagai
            program dan inisiatif yang berdampak positif.
          </p>
          <div class="mb-3">
            <label
              for="exampleFormControlTextarea1"
              class="form-label fw-bold mb-4"
            >
              Kirim Komentar
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-dblog">
              Kirim
            </button>
          </div>
        </article>
        <aside>
          <ul>
            <li>
              <a href="#">Edukasi</a>
            </li>
            <li>
              <a href="#">Event</a>
            </li>
            <li>
              <a href="#">Penyaluran Donasi</a>
            </li>
            <li>
              <a href="#">Serba-Serbi</a>
            </li>
            <li>
              <a href="#">Lihat Semua</a>
            </li>
          </ul>
        </aside>
      </maindetail>

      <Footer />
    </div>
  );
}

export default withAuth(detailblog)
