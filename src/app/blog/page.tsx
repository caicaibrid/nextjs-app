import Link from "next/link";

const getData = (): Promise<number[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Array(20).fill(0));
    }, 1000);
  });
};

export default async function Blog() {
  const data = await getData();
  return (
    <div>
      {data.map((_, i: number) => (
        <div className="p-5 border-b" key={i}>
          <Link className="text-blue-400" href={`/blog/${i}?q=${i + 1}`}>
            blog {i}
          </Link>
        </div>
      ))}
    </div>
  );
}
