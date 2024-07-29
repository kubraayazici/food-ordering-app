import * as Yup from "yup";

export const reservationSchema = Yup.object({
    fullName: Yup.string().min(3, "Must be at least 3 characters.").required("Required."),
    phoneNumber: Yup.string().min(9, "Must be at least 9 characters.").required("Required."),
    email: Yup.string().email("Invalid email address.").required("Required."),
    persons: Yup.string().required("Required."),
    date: Yup.string().required("Required."),
})