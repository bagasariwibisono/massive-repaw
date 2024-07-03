import "../styles/stylelogin.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const validationSchema = yup
  .object({
    email: yup
      .string()
      .required("Email diperlukan")
      .email("Format email tidak valid"),
    password: yup
      .string()
      .required("Password diperlukan")
      .min(6, "Password harus setidaknya 6 karakter")
  })
  .required();

export default function Login() {
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
      const loginResponse = await axios.post("http://localhost:4000/login", data);
      alert(loginResponse.data.message);

      if (loginResponse.data.success) {
        localStorage.setItem('token', loginResponse.data.token)
  
        const profileResponse = await axios.get("http://localhost:4000/profile", {
          headers: {
            Authorization: `Bearer ${loginResponse.data.token}`
          }
        });
  
        localStorage.setItem('user_data', JSON.stringify(profileResponse.data.user))
        navigate('/profil')
      }

    } catch (error) {
      alert(error?.data?.message ?? "Ada kesalahan pada server");
      console.error(error);
    }
  };

  return (
    <div class="container container-login">
      <div class="login">
        <form class="form-group mt-5" onSubmit={handleSubmit(onSubmit)}>
          <div class="mb-3 text-center">
            <h2 class="mb-3" style={{ color: "#32A5BB", fontWeight: "bolder" }}>
              Masuk
            </h2>
            <div className="">
              <div class="mb-3 ">
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
            <div class="mb-3 ">
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
            <button class="btn custom-button" type="submit">
              Masuk
            </button>
            <p>
              <a href="register.html" style={{ fontSize: "15px" }}>
                Lupa Kata Sandi?
              </a>
            </p>
            <div class="separator-login" style={{ fontSize: "15px" }}>
              <span>Atau masuk dengan</span>
            </div>

            <div class="row justify-content-center">
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
              Belum punya akun? <Link to={"/register"}>Daftar</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
