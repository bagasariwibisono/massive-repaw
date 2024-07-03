import React from "react";
import withAuth from "../components/withAuth.js";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";
import "../styles/styleblog.css";

function blog() {
  return (
    <div class="body-blog">
      <Navbar />

      <div className="blog-action-container">
        <div className="blog-action">
          <div className="blog-links">
            <Link href="#">Edukasi</Link>
            <Link href="#">Event</Link>
            <Link href="#">Penyaluran Donasi</Link>
            <Link href="#">Serba-Serbi</Link>
          </div>
          <div className="blog-search">
            <input
              type="search"
              placeholder="Cari artikel, topik, atau berita lainnya"
            />
            <i className="fa fa-search"></i>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <div class="d-flex">
          <h2 class="mb-4 section-title fw-bold">Terbaru</h2>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {Array.from(Array(9), (e, i) => {
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

      <nav
        class="custom-nav"
        aria-label="Page navigation example justify-content-center"
      >
        <ul class="pagination justify-content-center mt-5">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              4
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              5
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>

      <Footer />
    </div>
  );
}

export default withAuth(blog)