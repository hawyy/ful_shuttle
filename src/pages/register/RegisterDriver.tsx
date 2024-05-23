import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import BackgroundImageLayout from "../../layout/BackgroundImageLayout";
import Navbar from "../../components/NavBar/NavBar";
import RegisterFormContainer from "../../layout/RegisterFormContainer";
import CustomInput from "../../components/Input/CustomInputField";
import CustomDropdown from "../../components/Input/CustomDropdown";

interface IFormInput {
  plateNumber: string;
  email: string;
  gender: string;
  password: string;
  mobileNumber: string;
}

// Define the validation schema
const schema = yup.object().shape({
  plateNumber: yup.string().required("Matric is required"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
  gender: yup.string().required("gender is required"),
  mobileNumber: yup.string().required("mobile number is required"),
});

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const RegisterDriver = () => {
  const { register, handleSubmit } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
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
