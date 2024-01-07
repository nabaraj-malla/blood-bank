import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
// import { toast } from "react-toastify";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", { role, email, password });
      // store token
      if (data.success) {
        alert(data.message);
        localStorage.setItem("token", data.token);
        window.location.replace("/");
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// register
export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      name,
      email,
      password,
      role,
      organisationName,
      hospitalName,
      website,
      address,
      phone,
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post("/auth/register", {
        name,
        email,
        password,
        role,
        organisationName,
        hospitalName,
        website,
        address,
        phone,
      });
      if (data.success) {
        alert("user registered successfully");
        // alert(data.message)
        // toast.success(data.message);
        // toast.success("user registered successfully");
        window.location.replace("/login");
      }
      //   return data; // using this will remove the error that we see on consolse while register
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// current-user
export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async ({ rejectWithValue }) => {
    try {
      const res = await API.get("/auth/current-user");
      if (res?.data) {
        return res?.data;
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
