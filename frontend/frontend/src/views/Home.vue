<script setup>
import { ref, onMounted } from "vue";
import api from "../services/api";

const notes = ref([]);

onMounted(async () => {
  try {
    const res = await api.get("/notes");
    notes.value = res.data;
  } catch (err) {
    console.error(err);
  }
});
</script>

<template>
  <div>
    <h1>Notes</h1>

    <div v-if="notes.length">
      <div v-for="note in notes" :key="note.id">
        <h3>{{ note.title }}</h3>
        <p>{{ note.content }}</p>
        <hr />
      </div>
    </div>

    <p v-else>No notes found</p>
  </div>
</template>
