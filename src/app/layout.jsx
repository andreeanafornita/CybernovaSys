import "@/app/globals.css";

// Root layout — required by Next.js App Router.
// The [lang]/layout.jsx child provides the actual <html> and <body>.
// globals.css is imported here so it is available at the root level.
export default function RootLayout({ children }) {
  return children;
}
