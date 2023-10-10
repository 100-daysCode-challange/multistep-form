import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  name: Yup.string().required("Full name is required!"),
  email: Yup.string().email().required("Email is requires!"),
  phoneNumber: Yup.string().required("phone number is required!").min(8).max(15),
});
