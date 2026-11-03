import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AdminChrome } from "@/components/admin/chrome";

export const Route = createFileRoute("/admin")({
  component: () => (
    <AdminChrome>
      <Outlet />
    </AdminChrome>
  ),
});
