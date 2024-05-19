import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

const RegisterPassanger = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen flex flex-row justify-between">
      <section
        className="form-section flex-1 flex flex-col 
        justify-center items-center min-h-[100%]"
      >
        <div className="form-container border-2 p-10 min-w-[40%]">
          <p className="text-4xl font-bold mb-2 text-main-blue text-center">
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

            <button type="submit">Register</button>
          </form>
        </div>
      </section>

      <section className="image-section bg-main-blue flex-1">
        <h1>Right hero section</h1>
      </section>
    </div>
  );
};

export default RegisterPassanger;
