import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Deny, DeskTitle } from "@/components/admin/chrome";
import { Button } from "@/components/ui/button";
import { ROLE_OPTIONS, canManageUsers, roleLabel } from "@/lib/cms/access";
import { PREVIEW_STAFF, useSession } from "@/lib/cms/session";
import { useCms } from "@/lib/cms/store";
import type { Role } from "@/lib/cms/types";

export const Route = createFileRoute("/admin/users")({
  component: UsersDesk,
  head: () => ({ meta: [{ title: "Users · UNIPRA staff desk" }] }),
});

function UsersDesk() {
  const staff = useCms((state) => state.staff);
  const addStaff = useCms((state) => state.addStaff);
  const removeStaff = useCms((state) => state.removeStaff);
  const { session } = useSession();
  const [role, setRole] = useState<Role>("media");
  if (!session) return null;
  if (!canManageUsers(session.role)) return <Deny>Only the super administrator manages accounts.</Deny>;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const password = String(form.get("password") ?? "");
    if (password.length < 8) {
      toast.error("Use at least 8 characters.");
      return;
    }
    const error = addStaff({
      id: crypto.randomUUID(),
      name: String(form.get("name") ?? "").trim(),
      email: String(form.get("email") ?? ""),
      password,
      role,
    });
    if (error) {
      toast.error(error);
      return;
    }
    event.currentTarget.reset();
    toast.success("Preview account added on this browser.");
  }

  return (
    <>
      <DeskTitle
        title="Users and roles"
        lede="Preview accounts live in this browser, in plain storage, and are not a production lock. Real staff belong in Supabase, with passwords hashed by the Cloudflare Worker."
      />
      <h2 className="text-xl">Built-in preview roles</h2>
      <ul className="mt-2 divide-y divide-line border-y border-line bg-paper">
        {PREVIEW_STAFF.map((member) => (
          <li key={member.id} className="px-4 py-3 text-sm">
            {roleLabel(member.role)} — {member.email}
          </li>
        ))}
      </ul>
      <h2 className="mt-8 text-xl">Extra preview accounts</h2>
      <form onSubmit={onSubmit} className="mt-3 grid gap-3 border border-line bg-paper p-4">
        <input className="field" name="name" placeholder="Name" required />
        <input className="field" name="email" type="email" placeholder="Email" required />
        <input className="field" name="password" type="text" placeholder="Password" required />
        <select className="field" value={role} onChange={(event) => setRole(event.target.value as Role)}>
          {ROLE_OPTIONS.map((option) => (
            <option key={option} value={option}>{roleLabel(option)}</option>
          ))}
        </select>
        <Button type="submit">Add preview account</Button>
      </form>
      <ul className="mt-4 divide-y divide-line border-y border-line bg-paper">
        {staff.map((member) => (
          <li key={member.id} className="flex items-center justify-between px-4 py-3">
            <span>{member.name} · {roleLabel(member.role)} · {member.email}</span>
            <button type="button" className="text-sm font-semibold" onClick={() => removeStaff(member.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}
