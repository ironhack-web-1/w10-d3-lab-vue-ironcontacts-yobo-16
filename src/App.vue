<template>
  <div>
    <h1>IronContacts</h1>
    <button @click="contactsStore.addRandomContact()"> Add Random Contact</button>
    <button @click="contactsStore.sortByName()"> Sort by name</button>
    <button @click="contactsStore.sortByPopularity()"> Sort by popularity</button>
    <list-of-five-contacts />

  </div>
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { mapStores } from "pinia";
import useContactsStore from "./stores/contacts";


import ListOfFiveContacts from "./components/ListOfFiveContacts.vue";

export default {
  computed: {
    ...mapStores(useContactsStore),
  },
  components: { ListOfFiveContacts },
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button{
  margin: 30px 10px;
  border: none;
  height: 30px;
}
</style>
