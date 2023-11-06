"use client"
type Props = {}
import {Form, Formik,Field,ErrorMessage} from "formik";
import Input from "../components/client/inputForm";
import InputPercent from "./featcher/inputPercent";
function Profile({}: Props) {
    interface ProductValue {
        title: string,
        price: number | string,
        description: string,
        isOff:boolean,
        offPercent?: number | string
    }
    const initialState = {
        title: "",
        price: '',
        description: "",
        isOff: false,
        offPercent: ""
      };

      async function createProduct(values:ProductValue) {
        try {
            await fetch("http://localhost:3000/api/product",{method:"POST",body:JSON.stringify(values)})
        } catch (error) {
            console.log(error);
            
        }
      }

  return (
    <div className="max-w-[1560px] mx-auto p-3 " >
        <Formik
       initialValues={initialState}
       onSubmit={(values, actions) => {
         console.log(values);
         createProduct(values);
       }}
     >
       {({values}) => (
         <Form  className="grid grid-cols-12 gap-5 ">
             <h2 className="col-span-12 text-2xl md:text-4xl  " >ساخت محصول</h2>
            <Field type="text" name="title" label="نام محصول" component={Input} />
            <Field type="number" name="price" label="قیمت محصول به تومان" component={Input} />
            <Field type="text" name="description" label="معرفی کوتاه" component={Input} />
            <div className="col-span-12 md:col-span-6  flex  flex-col justify-center " >
            <label htmlFor="" className="text-lg font-semibold flex gap-2 items-center " >فروش ویژه  <Field type="checkbox" name="isOff" label="label"  /></label>
            <Field type="number" name="offPercent"  component={InputPercent} disabled={values.isOff}   />
            </div>
            <button  className="col-span-12 md:col-span-12 bg-red-500 text-white rounded-sm py-2  " type="submit"  >ثبت</button>
            
         </Form>
       )}
     </Formik>

    </div>
  )
}

export default Profile