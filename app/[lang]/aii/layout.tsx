export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>App router - AII 路由 - 子 layout</div>
      <div>{children}</div>
    </>
  );
}
