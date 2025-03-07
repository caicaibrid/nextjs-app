"use client";

import useLocal from "@/hooks/useLocal";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

export default function AIII() {
  const router = useRouter();
  const params = useParams();
  const { i18n } = useLocal(params.lang);
  return (
    <div>
      App router - AIII Page <br />
      <div className="p-5">lang: {params.lang}</div>
      <div className="p-5">name: {i18n.name}</div>
      <div
        className="text-blue-500 cursor-pointer"
        onClick={() => router.back()}
      >
        返回上一页
      </div>
      <Link href={"/"}>home</Link>
    </div>
  );
}
