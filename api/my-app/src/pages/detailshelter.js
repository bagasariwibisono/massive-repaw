import React from "react";
import withAuth from "../components/withAuth.js";
import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";
import "../styles/styledetailshelter.css";

function DetailShelter() {
  return (
    <div class="body-details">
      <Navbar />
      <div class="container-fluid container-details px-5 py-5">
        <div class="row align-items-start">
          <div class="col-md-7">
            <h1 class="fw-bold">Maria Stray Home (Khusus Anjing)</h1>
            <p class="fw-bold">Deskripsi</p>
            <p>
              MARIA STRAY HOME terbentuk atas dasar empati terhadap anjing
              terlantar dan mengajak semua orang berperan serta lebih peduli
              terhadap kelangsungan hidup anjing dan kucing terlantar.
            </p>
            <p>
              Visi : Di masa yg akan datang tidak ada lagi anjing atau kucing
              terlantar.
              <br />
              Misi : Kami memiliki 4 misi utama yaitu :
            </p>
            <ul>
              <li>
                <b>Edukasi :</b> memberikan informasi kepada semua orang tentang
                pentingnya tanggung jawab atas hewan peliharaannya termasuk
                tentang steril/kebiri
              </li>
              <li>
                <b>Rescue :</b> menyelamatkan anjing terlantar sesuai kemampuan
              </li>
              <li>
                <b>Pengobatan :</b> setelah diselamatkan dibawa ke dokter untuk
                di check kesehatannya. Lalu di vaksin dan dikebiri agar tidak
                berkembang
              </li>
              <li>
                <b>Foster :</b> menampung anjing terlantar untuk sementara waktu
                dan mencarikan keluarga yg mau merawat anjing tersebut dgn
                ketentuan dan syarat yg berlaku atau biasa disebut adopsi.
              </li>
            </ul>
            <div class="d-flex">
              <button class="btn btn-hubungis me-2">
                <i class="bi bi-whatsapp"></i> Hubungi Sekarang
              </button>
              <button class="btn btn-lokasis">Lokasi Shelter</button>
            </div>
          </div>

          <div class="col-md-5">
            <div class="d-flex justify-content-end mt-3">
              <img
                src="https://via.placeholder.com/400"
                alt="Adopt me"
                class="img-fluid"
              />
            </div>
            <div class="d-flex justify-content-end mt-3">
              <a href="#" class="btn btn-outline-secondary me-2">
                <i class="bi bi-share"></i>
              </a>
              <a href="#" class="btn btn-outline-secondary me-2">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#" class="btn btn-outline-secondary me-2">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#" class="btn btn-outline-secondary">
                <i class="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex content-details mt-3">
        <h1 class="fw-bold mt-3 justify-content-center ">
          {" "}
          Hewan yang masih ada di shelter saat ini
        </h1>
        <div class="d-flex mt-5 ms-5 me-5">
          <div class="row g-4">
            <div class="col-3">
              <div class="card card-content-details">
                <img
                  src="../../img/Rumah Singgah.png"
                  class="card-img-top"
                  alt="Poppers"
                />
                <div class="icon">
                  <i class="bi bi-award-fill"></i>
                </div>
                <div class="card-body pt-1">
                  <h5 class="card-title">Poppers</h5>
                  <p class="card-text">Jenis Kelamin: Betina</p>
                  <p class="card-text">Usia: 3 Tahun</p>
                  <div class="location">
                    <i class="bi bi-geo-alt"></i>
                    <span>Tangerang, Banten</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-3">
              <div class="card card-content-details">
                <img
                  src="../../img/Rumah Singgah.png"
                  class="card-img-top"
                  alt="Poppers"
                />
                <div class="icon">
                  <i class="bi bi-award-fill"></i>
                </div>
                <div class="card-body pt-1">
                  <h5 class="card-title">Poppers</h5>
                  <p class="card-text">Jenis Kelamin: Betina</p>
                  <p class="card-text">Usia: 3 Tahun</p>
                  <div class="location">
                    <i class="bi bi-geo-alt"></i>
                    <span>Tangerang, Banten</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-3">
              <div class="card card-content-details">
                <img
                  src="../../img/Rumah Singgah.png"
                  class="card-img-top"
                  alt="Poppers"
                />
                <div class="icon">
                  <i class="bi bi-award-fill"></i>
                </div>
                <div class="card-body pt-1">
                  <h5 class="card-title">Poppers</h5>
                  <p class="card-text">Jenis Kelamin: Betina</p>
                  <p class="card-text">Usia: 3 Tahun</p>
                  <div class="location">
                    <i class="bi bi-geo-alt"></i>
                    <span>Tangerang, Banten</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-3">
              <div class="card card-content-details">
                <img
                  src="../../img/Rumah Singgah.png"
                  class="card-img-top"
                  alt="Poppers"
                />
                <div class="icon">
                  <i class="bi bi-award-fill"></i>
                </div>
                <div class="card-body pt-1">
                  <h5 class="card-title">Poppers</h5>
                  <p class="card-text">Jenis Kelamin: Betina</p>
                  <p class="card-text">Usia: 3 Tahun</p>
                  <div class="location">
                    <i class="bi bi-geo-alt"></i>
                    <span>Tangerang, Banten</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-3">
              <div class="card card-content-details">
                <img
                  src="../../img/Rumah Singgah.png"
                  class="card-img-top"
                  alt="Poppers"
                />
                <div class="icon">
                  <i class="bi bi-award-fill"></i>
                </div>
                <div class="card-body pt-1">
                  <h5 class="card-title">Poppers</h5>
                  <p class="card-text">Jenis Kelamin: Betina</p>
                  <p class="card-text">Usia: 3 Tahun</p>
                  <div class="location">
                    <i class="bi bi-geo-alt"></i>
                    <span>Tangerang, Banten</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-3">
              <div class="card card-content-details">
                <img
                  src="../../img/Rumah Singgah.png"
                  class="card-img-top"
                  alt="Poppers"
                />
                <div class="icon">
                  <i class="bi bi-award-fill"></i>
                </div>
                <div class="card-body pt-1">
                  <h5 class="card-title">Poppers</h5>
                  <p class="card-text">Jenis Kelamin: Betina</p>
                  <p class="card-text">Usia: 3 Tahun</p>
                  <div class="location">
                    <i class="bi bi-geo-alt"></i>
                    <span>Tangerang, Banten</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-3">
              <div class="card card-content-details">
                <img
                  src="../../img/Rumah Singgah.png"
                  class="card-img-top"
                  alt="Poppers"
                />
                <div class="icon">
                  <i class="bi bi-award-fill"></i>
                </div>
                <div class="card-body pt-1">
                  <h5 class="card-title">Poppers</h5>
                  <p class="card-text">Jenis Kelamin: Betina</p>
                  <p class="card-text">Usia: 3 Tahun</p>
                  <div class="location">
                    <i class="bi bi-geo-alt"></i>
                    <span>Tangerang, Banten</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-3">
              <div class="card card-content-details">
                <img
                  src="../../img/Rumah Singgah.png"
                  class="card-img-top"
                  alt="Poppers"
                />
                <div class="icon">
                  <i class="bi bi-award-fill"></i>
                </div>
                <div class="card-body pt-1">
                  <h5 class="card-title">Poppers</h5>
                  <p class="card-text">Jenis Kelamin: Betina</p>
                  <p class="card-text">Usia: 3 Tahun</p>
                  <div class="location">
                    <i class="bi bi-geo-alt"></i>
                    <span>Tangerang, Banten</span>
                  </div>
                </div>
              </div>
            </div>
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
      </div>

      <Footer />
    </div>
  );
}

export default withAuth(DetailShelter)