import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8787",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getNotes() {
  const res = await api.get("/notes");
  return res.data;
}

export async function createNote(note) {
  const res = await api.post("/notes", note);
  return res.data;
}

export async function deleteNote(id) {
  const res = await api.delete(`/notes/${id}`);
  return res.data;
}
export default api;
