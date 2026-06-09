// Root page — middleware redirects to /en or /ro before this renders.
// This is a safety fallback only.
import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/en");
}
