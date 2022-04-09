import * as Yup from "yup";

export const AccountSettingsSchema = Yup.object({
  fullName: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  email: Yup.string()
    .min(5, "Must be 50 characters or less")
    .max(50)
    .required("Required"),
  companyName: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  companyLogo: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  officialWebsite: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  dateOfEstablishment: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  phoneNumber: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  city: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  street: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  documents: Yup.string()
    .required("Required"),
});