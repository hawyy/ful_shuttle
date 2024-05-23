import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import BackgroundImageLayout from "../../layout/BackgroundImageLayout";
import Navbar from "../../components/NavBar/NavBar";

interface IFormInput {
  matricNo: string;
  department: string;
  gender: string;
  password: string;
  mobileNumber: string;
}

// Define the validation schema
const schema = yup.object().shape({
  matricNo: yup.string().required("Matric is required"),
  department: yup.string().required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
  gender: yup.string().required("Matric is required"),
  mobileNumber: yup.string().required("Matric is required"),
});

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
      <section className="form-section flex-1 flex flex-col justify-center items-center">
        <div className="form-container border-2 p-10 min-w-[40%]">
          <p className="text-4xl font-bold mb-2 text-white text-center">
            Sign Up
          </p>
          <form
            action=""
            className="flex flex-col p-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-4 border-2 rounded-sm">
              <input
                className="pl-1 py-2 w-full"
                {...register("matricNo")}
                placeholder="Matric No"
              />
            </div>
            <div className="mb-4 border-2 rounded-sm">
              <input
                className="pl-1 py-2 w-full"
                {...register("department")}
                placeholder="Department"
              />
            </div>
            <div className="mb-4 border-2 rounded-sm">
              <input
                className="pl-1 py-2 w-full"
                {...register("gender")}
                placeholder="Gender"
              />
            </div>
            <div className="mb-4 border-2 rounded-sm">
              <input
                className="pl-1 py-2 w-full"
                {...register("mobileNumber")}
                placeholder="Mobile Number"
              />
            </div>
            <div className="mb-4 border-2 rounded-sm">
              <input
                className="pl-1 py-2 w-full"
                {...register("password")}
                placeholder="Password"
                type="password"
              />
            </div>

            <div className="w-full h-[1px] bg-gray-400 mt-4"></div>
            <button className="mt-4 cursor-pointer" type="submit">
              Register
            </button>
          </form>
        </div>
      </section>
    </BackgroundImageLayout>
  );
};

export default RegisterDriver;
