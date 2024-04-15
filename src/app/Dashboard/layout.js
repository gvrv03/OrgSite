import { UseDashboardContextProvider } from "@/Context/UseDashboardContext";

export default function DashLayout({ children }) {
  return (
    <main>
      <UseDashboardContextProvider>{children}</UseDashboardContextProvider>
    </main>
  );
}
