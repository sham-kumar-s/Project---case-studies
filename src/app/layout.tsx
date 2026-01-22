import "./globals.css";
import Footer from "@/app/components/ui/Footer";

export const metadata = {
  title: "Case Studies",
  description: "Engineering case studies and system design deep dives",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
