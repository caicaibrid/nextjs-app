export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>aii layout</div>
      <div>{children}</div>
    </>
  );
}
