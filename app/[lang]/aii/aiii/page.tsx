"use client";

import { getDictionary } from "@/get-dictionaries";
import { useRouter } from "next/navigation";
export default function AIII() {
  const router = useRouter();
  return (
    <div>
      App router - AIII Page <br />
      <div
        className="text-blue-500 cursor-pointer"
        onClick={() => router.back()}
      >
        返回上一页
      </div>
    </div>
  );
}
