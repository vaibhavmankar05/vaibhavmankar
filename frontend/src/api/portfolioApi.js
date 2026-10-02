const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export async function getProfile() {
  const response = await fetch(`${API_URL}/api/profile`);

  if (!response.ok) {
    throw new Error("Failed to load profile");
  }

  return response.json();
}

export async function getProjects() {
  const response = await fetch(`${API_URL}/api/projects`);

  if (!response.ok) {
    throw new Error("Failed to load projects");
  }

  const data = await response.json();
  return data.projects;
}