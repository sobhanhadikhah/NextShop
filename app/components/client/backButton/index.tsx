"use client";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { useRouter } from "next/navigation";

type Props = {
  size:number
}

function BackButton({ size }: Props) {
  const { back } = useRouter();
  return <ArrowRight className="cursor-pointer" onClick={() => back()} size={size} />;
}

export default BackButton;
