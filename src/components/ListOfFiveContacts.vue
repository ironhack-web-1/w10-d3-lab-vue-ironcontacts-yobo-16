<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Populatiry</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contactsStore.contacts" :key="contact.id">
          <td class="img">
            <img :src="contact.pictureUrl" :alt="contact.name" />
          </td>
          <td>
            <p>{{ contact.name }}</p>
          </td>
          <td>
            <p>{{ contact.popularity.toFixed(2) }}</p>
          </td>
          <td v-if="contact.wonOscar">🏆</td>
          <td v-else></td>
          <td v-if="contact.wonEmmy">🏆</td>
          <td v-else></td>
          <td><button class="delete" @click="contactsStore.removingContact(contact.id)" >Eliminar</button></td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import { mapStores } from "pinia";
import useContactsStore from "../stores/contacts";
// console.log(useContactsStore);

export default {
  data() {
    return {
      fiveContacts: [],
    };
  },
  computed: {
    ...mapStores(useContactsStore),
  },
  methods: {
    sendFIveContacts(arr) {
      // const contactsTemp = arr
      // this.fiveContacts = contactsTemp.slice(0,4)
      // console.log(arr)
      // return arr.slice(0,4)
    },
  },
  mounted() {
    // this.sendFIveContacts(contactsStore.contacts)
    this.contactsStore.fiveContacts();
  },
};
</script>

<style>
.row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.row > h3 {
  margin: 20px 50px 20px 50px;
}

img{
    width: 90%;
}
th, td{
    padding: 5px 20px 5px 20px;
}
table{
    margin: auto;
}

.img{
    width: 40px;
}
.delete{
    background-color: red;
    color: cornsilk;
    border: none;
    height: 30px;
}

.delete:hover{
    background-color: black;
}
</style>
