export default async function BlogChild({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ q: string }>;
}) {
  const { id } = await params;
  const { q } = await searchParams;
  return (
    <div>
      blog child id:{id} q:{q}
    </div>
  );
}
