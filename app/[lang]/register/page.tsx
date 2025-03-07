"use client";
import useLocal from "@/hooks/useLocal";

export default function Register() {
  const { i18n } = useLocal();
  return <div>Register 语言：{i18n.name}</div>;
}
