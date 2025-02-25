export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>App router 子 layout</div>
      <div>{children}</div>
    </>
  );
}
