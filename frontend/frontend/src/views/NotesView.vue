<script setup>
import { ref, onMounted } from "vue";
import { getNotes, createNote, deleteNote } from "../services/api";

const notes = ref([]);
const title = ref("");
const content = ref("");

async function loadNotes() {
  notes.value = await getNotes();
}

async function addNote() {
  if (!title.value || !content.value) return;

  await createNote({
    title: title.value,
    content: content.value,
  });

  title.value = "";
  content.value = "";

  await loadNotes();
}

async function removeNote(id) {
  await deleteNote(id);
  await loadNotes();
}

onMounted(loadNotes);
</script>

<template>
  <div class="container">
    <h1>Edge Notes 📝</h1>

    <div class="form">
      <input v-model="title" placeholder="Title" />
      <textarea v-model="content" placeholder="Content"></textarea>
      <button @click="addNote">Add Note</button>
    </div>

    <hr />

    <p v-if="notes.length === 0">No notes found</p>

    <ul class="notes-list">
      <li v-for="note in notes" :key="note.id" class="note-card">
        <strong>{{ note.title }}</strong>
        <p>{{ note.content }}</p>
        <small>{{ note.created_at }}</small><br/>
        <button class="delete-btn" @click="removeNote(note.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
}

.form input,
.form textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.form button {
  padding: 8px 16px;
  border: none;
  background-color: #0077ff;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.notes-list {
  list-style: none;
  padding: 0;
}

.note-card {
  background: #f3f3f3;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 5px;
  position: relative;
}

.delete-btn {
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  position: absolute;
  top: 1rem;
  right: 1rem;
}
</style>
