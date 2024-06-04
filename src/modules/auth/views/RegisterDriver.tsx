import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BackgroundImageLayout from "../../../layout/BackgroundImageLayout";
import Navbar from "../../../components/NavBar/NavBar";
import RegisterFormContainer from "../../../layout/RegisterFormContainer";
import CustomInput from "../../../components/Input/CustomInputField";
import CustomDropdown from "../../../components/Input/CustomDropdown";
import {
  genderOptions,
  DriverSchema,
  CreateDriverRequest,
} from "../models/register.driver";

import { registerUser } from "../services";

const RegisterDriver = () => {
  const { register, handleSubmit } = useForm<CreateDriverRequest>({
    resolver: yupResolver(DriverSchema),
  });

  const onSubmit: SubmitHandler<CreateDriverRequest> = (data) => {
    registerUser(data);
  };

  return (
    <BackgroundImageLayout>
      <Navbar />
      <RegisterFormContainer header="Sign Up" footer="Register as a driver.">
        <form
          action=""
          className="flex flex-col p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <CustomInput
            label="Plate No"
            placeholder="14/30GC110"
            name="plateNumber"
            register={register}
          />
          <CustomInput
            label="Email Address"
            placeholder="johnson@gmail.com"
            name="email"
            register={register}
          />

          <CustomDropdown
            label="Gender"
            options={genderOptions}
            placeholder="Select Gender"
            name="gender"
            register={register}
          />

          <CustomInput
            label="Mobile Number"
            placeholder="+23450198364"
            name="mobileNumber"
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
            Register
          </button>
        </form>
      </RegisterFormContainer>
    </BackgroundImageLayout>
  );
};

export default RegisterDriver;
