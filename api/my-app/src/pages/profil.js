import "../styles/styleprofil.css";
import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";
import withAuth from "../components/withAuth.js";
import { useForm } from "react-hook-form";
import axios from "axios";

function Profil() {
  const userData = JSON.parse(localStorage.getItem('user_data'))
  const token = localStorage.getItem('token');

  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstname: userData.firstname,
      lastname: userData.lastname,
      location: userData.location,
      postcode: userData.postcode,
      tel: userData.tel,
      email: userData.email,
      bio: userData.bio,
    },
  });

  const onSubmit = async (data) => {
    const newData = {
      firstname: data.firstname,
      lastname: data.lastname,
      location: data.location,
      postcode: data.postcode,
      tel: data.tel,
      email: data.email,
      bio: data.bio
    }
    try {
      const response = await axios.put(`http://localhost:4000/profile/update`, newData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      alert(response.data.message);
      localStorage.setItem("user_data", JSON.stringify(newData));
      window.location.reload();
    } catch (error) {
      alert(error?.response?.data?.message ?? "Ada kesalahan pada server");
      console.error(error);
    }
  };

  return (
    <div class="body-profil">
      <Navbar />
      <div class="px-5 py-5">
        <div class="container-fluid container-profil">
          <h2 class="fw-bold px-5 pt-5">Pengaturan Akun</h2>

          <div class="row align-items">
            <div class="col-2 mx-5">
              <div class="row my-4">
                <div class="col">
                  <div class="list-group list-profil">
                    <a href="#" class="list-group-item list-group-item-action">
                      Profil Saya
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      Status Adopsi
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      Event Terdaftar
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      Favorit
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      Riwayat
                    </a>
                    <a
                      href="#"
                      class="list-group-item list-group-item-action list-group-item-danger"
                    >
                      Hapus Akun
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="container mt-5 my-5 ">
                <h3 className="pb-3 fw-bold">Profil Saya</h3>
                <div className="profile-header d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://via.placeholder.com/100"
                      alt="Profile Picture"
                    />
                    <div className="ms-3">
                      <h4>{userData.firstname} {userData.lastname}</h4>
                      <p>{userData.bio}</p>
                    </div>
                  </div>
                  <button class="btn btn-outline-primary edit-btn">
                    Edit <i class="bi bi-pencil"></i>
                  </button>
                </div>
                <div class="info-section">
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <h4>Informasi Pribadi</h4>
                    <button class="btn btn-outline-primary edit-btn">
                      Edit <i class="bi bi-pencil"></i>
                    </button>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="mb-3 row">
                      <div class="col-md-6">
                        <label for="firstName" class="col-form-label fw-bold">
                          Nama Depan
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="firstName"
                          // value={userData.firstname}                          
                          {...register("firstname")}
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="lastName" class="col-form-label fw-bold">
                          Nama Belakang
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="lastName"
                          // value={userData.lastname}
                          {...register("lastname")}
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <div class="col-md-6">
                        <label for="email" class="col-form-label fw-bold">
                          Email
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="email"
                          // value={userData.email}
                          {...register("email")}
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="Phone" class="col-form-label fw-bold">
                          Phone
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="tel"
                          // value={userData.tel}
                          {...register("tel")}
                        />
                      </div>
                    </div>
                    <div class="mb-3 row">
                      <div class="col-md-6">
                        <label for="bio" class="col-form-label fw-bold">
                          Bio
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="bio"
                          // value={userData.bio}
                          {...register("bio")}
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center w-100 mt-5">
                      <button type="submit" className="btn btn-profil">
                        Save
                      </button>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withAuth(Profil);
