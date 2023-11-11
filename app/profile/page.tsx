/* eslint-disable jsx-a11y/label-has-associated-control */

"use client";

import {
  Field, Form, Formik
} from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import FileUpload from "../components/client/fileUpload";
import Input from "../components/client/inputForm";
import InputPercent from "./featcher/inputPercent";

interface ProductValue {
        title: string,
        price: number | string,
        description: string,
        isOff:boolean,
        offPercent?: number | string,
        total: number
        images: string[]
    }
function Profile() {
  const [images, setImages] = useState<string[]>([]);
  const router = useRouter();

  const initialState = {
    title: "",
    price: 0,
    description: "",
    isOff: false,
    offPercent: "",
    total: 1,
    images: []
  };

  async function createProduct(values:ProductValue) {
    toast.loading("در حال ساخت محصول ...", { id: "createProduct" });
    try {
      const result = await fetch("/api/product", { method: "POST", body: JSON.stringify(values) });
      if (result.status === 200) {
        toast.success("محصول با موفقیت ساخته شد", { id: "createProduct" });
        router.push("/");
      }
    } catch (error) {
      toast.error("خطا", { id: "createProduct" });
    }
  }

  return (
    <div className="max-w-[1560px] mx-auto p-3 grid grid-cols-12 gap-5 ">
      <h2 className="col-span-12 text-2xl md:text-4xl text-right hidden md:block  ">ساخت محصول</h2>
      <FileUpload images={images} setImages={setImages} />
      <Formik
        initialValues={initialState}
        onSubmit={(values) => {
          createProduct({ ...values, images });
        }}
     >
        {({ values }) => (
          <Form className="grid grid-cols-12 gap-5 col-span-12">

            <Field type="text" name="title" label="نام محصول" component={Input} />
            <Field type="number" name="price" label="قیمت محصول به تومان" component={Input} />
            <Field type="number" name="total" label="تعداد محصول" component={Input} />
            <Field type="text" name="description" label="معرفی کوتاه" component={Input} />
            <div className="col-span-12 md:col-span-6  flex  flex-col justify-center ">
              <label htmlFor="" className="text-lg font-semibold flex gap-2 items-center ">
                فروش ویژه
                {" "}
                <Field type="checkbox" name="isOff" label="label" />
              </label>
              <Field type="number" name="offPercent" component={InputPercent} disabled={values.isOff} />
            </div>
            <button className="col-span-12 md:col-span-12 bg-red-500 text-white rounded-sm py-2  " type="submit">ثبت</button>

          </Form>
        )}
      </Formik>

    </div>
  );
}

export default Profile;
