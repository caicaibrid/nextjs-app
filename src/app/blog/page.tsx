import Link from "next/link";
import { getData } from "@/src/service/blog";
// 防止预渲染
// export const dynamic = "force-dynamic";

export default async function Blog() {
  const data = await getData();
  return (
    <div>
      {data.map((item: { id: string }, i: number) => (
        <div className="p-5 border-b" key={i}>
          <Link className="text-blue-400" href={`/blog/${item.id}?q=${i + 1}`}>
            blog {i}
          </Link>
        </div>
      ))}
    </div>
  );
}
