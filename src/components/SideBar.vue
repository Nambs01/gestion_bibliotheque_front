<template>
    <div class="sideBar">
        <div class="logo">
            <h1>Bibliotheque</h1>
        </div>

        <div class="nav">
            <p class="link" @click="goTo('home')"><span class="pi pi-book"></span> Livres</p>
            <p class="link" @click="goTo('member')"><span class="pi pi-users"></span> Membres</p>
            <p class="link" @click="goTo('returnBook')"><span class="pi pi-list"></span> Preter</p>
            <p class="link" @click="goTo('lendBook')"><span class="pi pi-list-check"></span> Rendre</p>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goTo = (routerName)=>{
    router.push({name: routerName})
}
</script>

<style>
.sideBar{
    background-color: burlywood;
    height: 100vh;
    text-align: center;
}

.nav{
    margin: 40px 0 10px 0;
    padding: 10px;
}

.nav .link{
    background-color: antiquewhite;
    margin: 5px auto 5px auto;
    padding: 10px;
    border-radius: 5px;
    font-size: large;
}

.nav .link:hover{
    cursor: pointer;
}
</style>