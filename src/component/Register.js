import React, { useState } from "react";
import { register } from "../firebase";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import { useFormik } from "formik";

export default function Register() {
  const userLoginSchema = Yup.object().shape({
    userName: Yup.string().required('Bu alanın doldurulması zorunludur.'),
    fullName: Yup.string().required('Bu alanın doldurulması zorunludur.'),
    email: Yup.string().required("Bu alanın doldurulması zorunludur.").email('Lütfen email formatında giriniz.'),
    password: Yup.string().required("Bu alanın doldurulması zorunludur.").length(6, 'Sadece 6 karakterden oluşan bir parola giriniz.'),
  });
  
 
  const navigate = useNavigate();

  // Using useFormik hook to handle form state and validation
  const formik = useFormik({
    initialValues: {
      userName: '',
      fullName: '',
      email: '',
      password: '',
    },
    validationSchema: userLoginSchema,
    onSubmit: async (values) => {
      try {
        await register(values.email, values.password, values.userName, values.fullName);
        toast.success("Sisteme kayıt işlemi başarı ile gerçekleştirildi!");
        setTimeout(() => {
          navigate('/');
        }, 4000);
      } catch (error) {
        toast.error("Kayıt işlemi gerçekleştirilemedi. Bilgilerinizi kontrol ederek tekrar deneyiniz!");
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className=" mt-3 ml-8">
          {/* Kullanıcı Adı */}
          <div className="flex flex-row">
            <div className="my-4 text-md font-display2 text-left font-semibold text-green-900 ">
              Kullanıcı Adı
            </div>
            <div className="text-red-500 ml-1 translate-y-2 text-xl">*</div>
          </div>
          <input
            name="userName" // Added name attribute to correspond to formik field
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border  shadow rounded-full focus:none md:w-96 w-72  h-12 mx-auto -translate-x-4 outline-none"
           
          />
           {formik.touched.userName && formik.errors.userName ? (
                    <div className="error_msg text-rose-500 text-sm flex justify-start mt-2">
                      {formik.errors.userName}
                    </div>
                  ) : null}

          {/* Ad Soyad */}
          <div className="flex flex-row">
            <div className="my-4 text-md font-display2 text-left font-semibold text-green-900 ">
              Ad Soyad
            </div>
            <div className="text-red-500 ml-1 translate-y-2 text-xl">*</div>
          </div>
          <input
            name="fullName" // Added name attribute to correspond to formik field
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border  shadow rounded-full focus:none md:w-96 w-72  h-12 mx-auto -translate-x-4 outline-none"
            
          />
          {formik.touched.fullName && formik.errors.fullName ? (
                    <div className="error_msg text-rose-500 text-sm flex justify-start mt-2">
                      {formik.errors.fullName}
                    </div>
                  ) : null}

          {/* E-posta */}
          <div className="flex flex-row">
            <div className="my-4 text-md font-display2 text-left font-semibold text-green-900 ">
            E-posta
            </div>
            <div className="text-red-500 ml-1 translate-y-2 text-xl">*</div>
          </div>
          <input
            type="email"
            name="email" // Added name attribute to correspond to formik field
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border  shadow rounded-full focus:none md:w-96 w-72  h-12 mx-auto -translate-x-4 outline-none"
            
          />
           {formik.touched.email && formik.errors.email ? (
                    <div className="error_msg text-rose-500 text-sm flex justify-start mt-2">
                      {formik.errors.email}
                    </div>
                  ) : null}

          {/* Parola */}
          <div className="flex flex-row">
            <div className="my-4 text-md font-display2 text-left font-semibold text-green-900 ">
              Parola
            </div>
            <div className="text-red-500 ml-1 translate-y-2 text-xl">*</div>
          </div>
          <input
            type="password"
            name="password" // Added name attribute to correspond to formik field
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border  shadow rounded-full focus:none md:w-96 w-72 h-12 mx-auto -translate-x-4 outline-none"
            
          />
           {formik.touched.password && formik.errors.password ? (
                    <div className="error_msg text-rose-500 text-sm flex justify-start mt-2">
                      {formik.errors.password}
                    </div>
                  ) : null}

          {/* Checkbox */}
          <div className="flex flex-row mt-6 -translate-x-4">
            <input
              className="mr-3 -translate-y-2 checkbox"
              type="checkbox"
              required
            />

            <div className="text-left text-sm">
              <a
                href="/kullanıcı-sozlesmesi"
                className="font-bold font-display2"
              >
                Kullanıcı Sözleşmesini
              </a>{" "}
              ve{" "}
              <a href="/aydınltma-metni" className="font-bold font-display2">
                Üyelik Formu Aydınlatma
              </a>
              <br />{" "}
              <a href="/aydınltma-metni" className="font-bold font-display2">
                Metnini
              </a>{" "}
              okudum, kabul ediyorum.
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="border md:w-80 w-64 h-16 bg-green-900 hover:bg-black text-white px-3 py-2 shadow rounded-full font-display2 duration-500 mb-6 mt-8 mr-6"
          >
            Üye Ol
          </button>
        </div>
        <Toaster />
      </form>
    </div>
  );
}