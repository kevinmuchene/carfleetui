import * as Yup from "yup";
import { styled } from "@mui/material/styles";

export const CustomErrorDiv = styled("div")({
    color: "red",
});

export const signUpValidationSchema = {
    firstName: Yup.string()
        .min(2, "Must be 2 characters or more")
        .required("Required"),
    lastName: Yup.string()
        .min(2, "Must be 2 characters or more")
        .required("Required"),
    username: Yup.string()
        .min(3, "Must be 3 characters or more")
        .required("Required"),
    phone: Yup.string()
        .length(10, "Phone number must be exactly 10 characters")
        .matches(/^\d+$/, "Phone number must only contain digits")
        .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
        .min(5, "Must be at least 8 characters")
        .matches(/[A-Z]/, "Must contain at least one uppercase letter")
        .matches(/[a-z]/, "Must contain at least one lowercase letter")
        .matches(/[0-9]/, "Must contain at least one number")
        .matches(
            /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
            "Must contain at least one special character"
        )
        .required("Required"),
    confirmpassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
};

export const signInValidationSchema = {

    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
        .min(5, "Must be at least 8 characters")
        .matches(/[A-Z]/, "Must contain at least one uppercase letter")
        .matches(/[a-z]/, "Must contain at least one lowercase letter")
        .matches(/[0-9]/, "Must contain at least one number")
        .matches(
            /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
            "Must contain at least one special character"
        )
        .required("Required"),

}