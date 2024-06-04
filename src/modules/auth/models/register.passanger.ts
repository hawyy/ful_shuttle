import * as yup from "yup";

export interface PassangerFormInput {
  matricNo: string;
  department: string;
  gender: string;
  password: string;
  mobileNumber: string;
}

// Define the validation schema
export const PassangerSchema = yup.object().shape({
  matricNo: yup.string().required("Matric is required"),
  department: yup.string().required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
  gender: yup.string().required("Matric is required"),
  mobileNumber: yup.string().required("Matric is required"),
});

export const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];