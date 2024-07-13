<template>
    <div class="membreView">
      <table class="table">
        <thead>
          <tr>
            <th colspan="8">Liste des membres</th>
            <th><Button icon="pi pi-user-plus" severity="info" @click="$router.push({name: 'newMember'})"/></th>
          </tr>
          <tr>
            <th>Identifiant</th>
            <th>Nom</th>
            <th>Prénoms</th>
            <th>Sexe</th>
            <th>Email</th>
            <th>Adresse</th>
            <th>Date de naissance</th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="member in members">
            <td>{{ member.idMembre }}</td>
            <td>{{ member.nom }}</td>
            <td>{{ member.prenoms }}</td>
            <td>{{ member.sexe }}</td>
            <td>{{ member.email }}</td>
            <td>{{ member.adresse }}</td>
            <td>{{ member.dateNaissance }}</td>
            <td><Button icon="pi pi-pencil" severity="info"/></td>
            <td><Button icon="pi pi-trash" severity="danger"/></td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import Button from 'primevue/button';  
import { useMemberStore } from '../stores/memberStore';

const members = ref([])
const memberStore = useMemberStore();

onMounted(()=>{
    useMemberStore().refreshMembersList().then(()=>{
        members.value = memberStore.getMembers;
    })
})

</script>
  
<style>
.table{
    text-align: center;
}
  
.table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}
  
.table td, .table th {
    border: 1px solid #ddd;
    padding: 8px;
}
  
.table tr:nth-child(even){background-color: #f2f2f2;}
  
.table tr:hover {background-color: #ddd;}
  
.table th {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #04AA6D;
    color: white;
}
  </style>
  
  