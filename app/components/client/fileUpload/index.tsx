/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import { Plus } from "@phosphor-icons/react/dist/ssr/Plus";
import Image from "next/image";
import {
  MutableRefObject, Ref, useEffect, useRef, useState
} from "react";
import toast from "react-hot-toast";

function FileUpload({ images, setImages }:{images: string[], setImages:CallableFunction}) {
  const [file, setFile] = useState<File | null | undefined>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  async function onSubmit() {
    if (!file) return;
    try {
      setIsLoading(true);
      toast.loading("در حال اپلود...", { id: "upload" });
      const data = new FormData();
      data.set("file", file);
      const res = await fetch("/api/upload", {
        method: "POST",
        body: data
      });
      if (res.status === 200) {
        toast.success("انجام شد", { id: "upload" });
        const resultJson = await res.json();
        setImages((prev:string[]) => ([...prev, resultJson.url]));
        setFile(null);
      } else {
        toast.error("ریده شد", { id: "upload" });
      }
      console.log(res);
    } catch (error) {
      throw new Error("");
    } finally {
      setIsLoading(false);
    }
  }
  function clickOnFile(ref:MutableRefObject<HTMLInputElement | null>) {
    if (ref) {
      ref.current?.click();
    }
  }
  useEffect(() => {
    onSubmit();
  }, [file]);
  return (
    <div dir="rtl" className="col-span-12">
      <div dir="rtl" className="carousel w-full   max-w-[1560px] gap-3  carousel-center  p-4  bg-neutral-50 rounded-box  ">
        {
          images.length <= 6 ? <button
            type="button"
            onClick={() => clickOnFile(fileRef)}
            className="carousel-item bg-neutral-300 rounded-xl flex items-center justify-center  relative w-[180px] h-[180px]">
            <Plus size={24} />
          </button> : null
        }
        {
        images?.map((item, index) => (
          <div key={item} className="carousel-item relative w-[180px] h-[180px]">
            <Image src={item} alt={item} fill />
            {
              index === 0 ? (
                <span className="bg-black text-white z-50 h-8 w-8 m-2 rounded-full flex items-center text-center justify-center  ">
                  کاور
                </span>
              ) : <span className="bg-black text-white z-50 h-8 w-8 m-2 rounded-full flex items-center text-center justify-center  ">
                {index}
              </span>
            }
          </div>
        ))
      }

      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        <input disabled={isLoading} style={{ display: "none" }} ref={fileRef} type="file" name="file" id="file" onChange={(e) => setFile(e.target.files?.[0])} />
      </form>
    </div>
  );
}

export default FileUpload;
