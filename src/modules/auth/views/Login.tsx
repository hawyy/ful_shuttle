import { FC } from "react";
import BackgroundImageLayout from "../../../layout/BackgroundImageLayout";
import Navbar from "../../../components/NavBar/NavBar";
import RegisterFormContainer from "../../../layout/RegisterFormContainer";
import CustomInput from "../../../components/Input/CustomInputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IAuthModel, loginSchema } from "../models/index";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { login } from "../services";

interface AppProps {
  title: string;
}

const Login: FC<AppProps> = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<IAuthModel>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<IAuthModel> = (data) => {
    login(data);
    navigate("/dashboard");
  };
  return (
    <BackgroundImageLayout>
      <Navbar />
      <RegisterFormContainer header="Login" footer="">
        <form
          action=""
          className="flex flex-col p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <CustomInput
            label="Email"
            placeholder="mark@gmail.com"
            name="email"
            register={register}
          />

          <CustomInput
            label="Password"
            placeholder="**********"
            name="password"
            type="password"
            register={register}
          />

          <div className="w-full h-[1px] bg-gray-400 mt-4"></div>
          <button
            className=" bg-button-blue py-2 w-full max-w-md mx-auto mt-4 rounded-md"
            type="submit"
          >
            Login
          </button>

          <div className="text-[10px] text-center mt-4">
            <Link to="/">
              Don't have an account ? <span>Register</span>
            </Link>
          </div>
        </form>
      </RegisterFormContainer>
    </BackgroundImageLayout>
  );
};

export default Login;
