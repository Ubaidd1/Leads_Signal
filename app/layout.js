import "./tailwind.css";
import { ToastProvider } from "@/components/providers/ToastProvider";

export const metadata = {
  title: "Hiring Intelligence",
  description: "Remote hiring lead intelligence for agencies, recruiters and business development teams."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
