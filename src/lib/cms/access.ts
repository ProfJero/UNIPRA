import type { ArticleStatus, Role } from "./types";

export function canDraft(role: Role) {
  return role !== "viewer";
}

export function canReview(role: Role) {
  return role === "super" || role === "admin" || role === "editor";
}

export function canPublish(role: Role) {
  return role === "super" || role === "admin";
}

export function canDelete(role: Role) {
  return role === "super" || role === "admin";
}

export function canManageUsers(role: Role) {
  return role === "super";
}

export function canEditSettings(role: Role) {
  return role === "super" || role === "admin";
}

export function canReadEnquiries(role: Role) {
  return role === "super" || role === "admin";
}

export function allowedStatuses(role: Role): ArticleStatus[] {
  if (role === "super" || role === "admin") {
    return ["draft", "in_review", "ready", "published", "archived"];
  }
  if (role === "editor") return ["draft", "in_review", "ready"];
  if (role === "media") return ["draft", "in_review"];
  return [];
}

export function roleLabel(role: Role) {
  switch (role) {
    case "super":
      return "Super Administrator";
    case "admin":
      return "School Administrator";
    case "editor":
      return "Editor";
    case "media":
      return "Media Team";
    case "viewer":
      return "Viewer";
  }
}

export const ROLE_OPTIONS: Role[] = ["super", "admin", "editor", "media", "viewer"];
