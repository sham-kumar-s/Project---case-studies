import Sidebar from "@/app/components/sidebar/SideBar";

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 px-10 py-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
