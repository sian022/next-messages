export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-50">
      {children}
    </div>
  );
}
