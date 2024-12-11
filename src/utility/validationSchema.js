import * as Yup from "yup";
export const noteSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .trim()
    .min(10, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
});
