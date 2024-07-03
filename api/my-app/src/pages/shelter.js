import React from "react";
import withAuth from "../components/withAuth.js";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";
import "../styles/styleshelter.css";

function Shelter() {
  return (
    <>
      <Navbar />
      <div class="body-shelter">
        <div className="bg-tertiary " style={{ backgroundColor: "#F8D571" }}>
          <div className="me-auto mb-2 mb-lg-0 ms-1 mt-1">
            <form
              class="d-flex justify-content-center align-item"
              role="search"
            >
              <input
                class="shelter me-2 "
                type="search"
                placeholder="Cari Lokasi Shelter"
                aria-label="Search"
                style={{
                  paddingLeft: "20px",
                  width: "600px",
                  height: "20px",
                  marginRight: "10px",
                  fontSize: "15px",
                }}
              />
              <select
                class="form-select me-2"
                aria-label="Default select example"
              >
                <option selected>Tipe Shelter</option>
                <option value="1">Semua Tipe</option>
                <option value="2">Khusus Anjing</option>
                <option value="3">Khusus Kucing</option>
              </select>
              <button
                class="btn btn-serch bi bi-search"
                type="submit"
                style={{
                  paddingLeft: "20px",
                  width: "200px",
                  height: "40px",
                  marginRight: "10px",
                }}
              >
                {" "}
                Cari Shelter
              </button>
            </form>
          </div>
        </div>

        <div class="container-fluid mt-0 z-0">
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <div
                class="card-shelter mb-3 mt-5 mx-3 my-3 px-5 py-4"
                style={{ maxWidth: "800px" }}
              >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="../../img/Rumah Singgah.png"
                      class="img-fluid rounded-start ms-2 mt-2"
                      style={{ width: "210px", height: "210px" }}
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body mt-2 pt-2 ms-4">
                      <h3 class="card-title">Rumah Singgah CLOW</h3>
                      <p class="card-text bi bi-geo-alt-fill">
                        {" "}
                        Bogor, Jawa Barat
                      </p>
                      <p class="card-text bi bi-telephone-fill">
                        {" "}
                        0812-1334-3415
                      </p>
                      <p class="card-text bi bi-house-heart-fill">
                        {" "}
                        Khusus Kucing
                      </p>
                      <Link to="/detailshelter" className="btn card-btn">
                        Lihat Shelter
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                class="card-shelter mb-3 mt-5 mx-3 my-3 px-5 py-4"
                style={{ maxWidth: "800px" }}
              >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="../../img/RumahSinggahTPP.png"
                      class="img-fluid rounded-start ms-2 mt-2"
                      style={{ width: "210px", height: "210px" }}
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body mt-2 pt-2 ms-4">
                      <h3 class="card-title">Rumah Singgah TPP</h3>
                      <p class="card-text bi bi-geo-alt-fill"> Serang Banten</p>
                      <p class="card-text bi bi-telephone-fill">
                        {" "}
                        0816-7233-079
                      </p>
                      <p class="card-text bi bi-house-heart-fill">
                        {" "}
                        Khusus Anjing
                      </p>
                      <Link to="/detailshelter" className="btn card-btn">
                        Lihat Shelter
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div
                class="card-shelter mb-3 mx-3 my-3 px-5 py-4"
                style={{ maxWidth: "800px" }}
              >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="../../img/RumahKucingParung.png"
                      class="img-fluid rounded-start ms-2 mt-2"
                      style={{ width: "210px", height: "210px" }}
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body mt-2 pt-2 ms-4">
                      <h3 class="card-title">Maria Stray Home</h3>
                      <p class="card-text bi bi-geo-alt-fill">
                        {" "}
                        Tanggerang, Banten
                      </p>
                      <p class="card-text bi bi-telephone-fill">
                        {" "}
                        0811-9416-888
                      </p>
                      <p class="card-text bi bi-house-heart-fill">
                        {" "}
                        Khusus Anjing
                      </p>
                      <Link to="/detailshelter" className="btn card-btn">
                        Lihat Shelter
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div
                class="card-shelter mb-3 mx-3 my-3 px-5 py-4"
                style={{ maxWidth: "800px" }}
              >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="../../img/Petduli.png"
                      class="img-fluid rounded-start ms-2 mt-2"
                      style={{ width: "210px", height: "210px" }}
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body mt-2 pt-2 ms-4">
                      <h3 class="card-title">Maria Stray Home</h3>
                      <p class="card-text bi bi-geo-alt-fill">
                        {" "}
                        Tanggerang, Banten
                      </p>
                      <p class="card-text bi bi-telephone-fill">
                        {" "}
                        0811-9416-888
                      </p>
                      <p class="card-text bi bi-house-heart-fill">
                        {" "}
                        Khusus Anjing
                      </p>
                      <Link to="/detailshelter" className="btn card-btn">
                        Lihat Shelter
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div
                class="card-shelter mb-3 mx-3 my-3 px-5 py-4"
                style={{ maxWidth: "800px" }}
              >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="../../img/MariaStrayHome.png"
                      class="img-fluid rounded-start ms-2 mt-2"
                      style={{ width: "210px", height: "210px" }}
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body mt-2 pt-2 ms-4">
                      <h3 class="card-title">Maria Stray Home</h3>
                      <p class="card-text bi bi-geo-alt-fill">
                        {" "}
                        Tanggerang, Banten
                      </p>
                      <p class="card-text bi bi-telephone-fill">
                        {" "}
                        0811-9416-888
                      </p>
                      <p class="card-text bi bi-house-heart-fill">
                        {" "}
                        Khusus Anjing
                      </p>
                      <Link to="/detailshelter" className="btn card-btn">
                        Lihat Shelter
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div
                class="card-shelter mb-3 mx-3 my-3 px-5 py-4"
                style={{ maxWidth: "800px" }}
              >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="../../img/Bawa.png"
                      class="img-fluid rounded-start ms-2 mt-2"
                      style={{ width: "210px", height: "210px" }}
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body mt-2 pt-2 ms-4">
                      <h3 class="card-title">BAWA</h3>
                      <p class="card-text bi bi-geo-alt-fill"> Gianyar, Bali</p>
                      <p class="card-text bi bi-telephone-fill">
                        {" "}
                        0812-3840-133
                      </p>
                      <p class="card-text bi bi-house-heart-fill">
                        {" "}
                        Anjing dan Kucing
                      </p>
                      <Link to="/detailshelter" className="btn card-btn">
                        Lihat Shelter
                      </Link>
                    </div>
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

        <Footer />
      </div>
    </>
  );
}

export default withAuth(Shelter)