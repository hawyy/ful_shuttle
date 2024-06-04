import * as yup from "yup";

export const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

export interface CreateDriverRequest {
  plateNumber: string;
  email: string;
  gender: string;
  password: string;
  mobileNumber: string;
}
export interface IUser {
  firstname?: string;
  lastname?: string;
  phone: string;
  age: number;
  password: string;
  email: string;
}


// Define the validation schema
export const DriverSchema = yup.object().shape({
  plateNumber: yup.string().required("Matric is required"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
  gender: yup.string().required("gender is required"),
  mobileNumber: yup.string().required("mobile number is required"),
});

