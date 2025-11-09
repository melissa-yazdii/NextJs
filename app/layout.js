import "./globals.css";

export const metadata = {
  title: "Next Auth",
  description: "Next.js Authentication",
};

if (process.env.NODE_ENV === "development") {
  const originalLog = console.log;
  console.log = (...args) => {
    if (
      args[0] &&
      typeof args[0] === "string" &&
      args[0].includes("[Fast Refresh]")
    ) {
      return;
    }
    originalLog(...args);
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="root-body">{children}</body>
    </html>
  );
}
