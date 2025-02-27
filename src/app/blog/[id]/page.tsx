import { getData } from "@/src/service/blog";
export async function generateStaticParams() {
  const res = await getData();
  return res;
}

export const revalidate = 60;

export const dynamicParams = true;

export default async function BlogChild({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div>blog child id:{id}</div>;
}
