import { Link, useNavigate } from "react-router-dom";
import "../styles/styleregister.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const validationSchema = yup
  .object({
    firstname: yup
      .string()
      .required("Nama depan diperlukan")
      .min(5, "Nama depan harus setidaknya 5 karakter")
      .max(100, "Nama depan tidak boleh lebih dari 100 karakter"),
    lastname: yup
      .string()
      .required("Nama belakang diperlukan")
      .min(5, "Nama belakang harus setidaknya 5 karakter")
      .max(100, "Nama belakang tidak boleh lebih dari 100 karakter"),
    location: yup
      .string()
      .required("Lokasi diperlukan")
      .min(5, "Lokasi harus setidaknya 5 karakter"),
    postcode: yup
      .string()
      .required("Kode pos diperlukan")
      .min(3, "Kode pos harus setidaknya 3 karakter")
      .max(10, "Kode pos tidak boleh lebih dari 10 karakter"),
    tel: yup
      .string()
      .required("Nomor telepon diperlukan")
      .matches(/^[0-9]+$/, "Nomor telepon hanya boleh berisi angka")
      .min(10, "Nomor telepon harus setidaknya 10 angka")
      .max(13, "Nomor telepon tidak boleh lebih dari 13 angka"),
    email: yup
      .string()
      .required("Email diperlukan")
      .email("Format email tidak valid"),
    password: yup
      .string()
      .required("Password diperlukan")
      .min(6, "Password harus setidaknya 6 karakter"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Konfirmasi password salah"),
  })
  .required();

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:4000/register", data);
      alert(response.data.message);
      navigate('/profil')
    } catch (error) {
      alert(error?.data?.message ?? "Ada kesalahan pada server");
      console.error(error);
    }
  };

  return (
    <div class=" container container-register mt-5">
      <div class="register">
        <form style={{ width: "700px" }} onSubmit={handleSubmit(onSubmit)}>
          <div class="mb-3 text-center">
            <h2 className="fw-bold text-center" style={{ color: "#32A5BB" }}>
              Daftar
            </h2>

            <div class="row">
              <div class="col sm-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nama Depan"
                  {...register("firstname")}
                />
                <div class="form-label text-start text-danger">
                  {errors.firstname?.message}
                </div>
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nama Belakang"
                  {...register("lastname")}
                />
                <div class="form-label text-start text-danger">
                  {errors.lastname?.message}
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Lokasi"
                  {...register("location")}
                />
                <div class="form-label text-start text-danger">
                  {errors.location?.message}
                </div>
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Kode Pos"
                  {...register("postcode")}
                />
                <div class="form-label text-start text-danger">
                  {errors.postcode?.message}
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="No Telephone"
                  {...register("tel")}
                />
                <div class="form-label text-start text-danger">
                  {errors.tel?.message}
                </div>
              </div>
              <div class="col">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  {...register("email")}
                />
                <div class="form-label text-start text-danger">
                  {errors.email?.message}
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Kata Sandi"
                  {...register("password")}
                />
                <div class="form-label text-start text-danger">
                  {errors.password?.message}
                </div>
              </div>
              <div class="col">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Konfirmasi Kata Sandi"
                  {...register("confirmPassword")}
                />
                <div class="form-label text-start text-danger">
                  {errors.confirmPassword?.message}
                </div>
              </div>
            </div>

            <button class="btn custom-button" type="submit">
              Daftar
            </button>

            <div
              class="separator"
              style={{ fontSize: "15px", marginLeft: "180px" }}
            >
              <span>Atau masuk dengan</span>
            </div>

            <div
              class="row justify-content-center "
              style={{ marginLeft: "100px", marginRight: "100px" }}
            >
              <div class="col-md-10 d-flex justify-content-between">
                <button class="btn btn-facebook btn-icon btn-block btn-lg btn-spacing btn-text-large">
                  <img
                    src="https://img.icons8.com/color/16/000000/facebook-new.png"
                    alt="Facebook Icon"
                  />
                  Facebook
                </button>
                <button class="btn btn-google btn-icon btn-outline-dark btn-lg btn-text-large">
                  <img
                    src="https://img.icons8.com/color/16/000000/google-logo.png"
                    alt="Google Icon"
                  />
                  Google
                </button>
              </div>
            </div>
            <p style={{ marginTop: "15px", fontSize: "15px" }}>
              Belum punya akun? <Link to={"/login"}>Masuk</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
