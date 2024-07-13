<template>
    <div class="newMember">
        <form>
            <div class="inputField">
                <label for="name">Nom :</label>
                <input type="text" id="name" v-model="newMember.nom" placeholder="ex: RAZA....">
            </div>
            <div class="inputField">
                <label for="firstname">Prénoms :</label>
                <input type="text" id="firstname" v-model="newMember.prenoms" placeholder="ex: Solo..">
            </div>
            <div class="inputField">
                <label for="sexe">Sexe :</label>
                <select name="sexe" id="sexe" v-model="newMember.sexe">
                    <option v-for="sx in sexe" :value="sx.code">{{ sx.name }}</option>
                </select>
            </div>
            <div class="inputField">
                <label for="email">Email :</label>
                <input type="email" id="email" v-model="newMember.email" placeholder="ex: xxxxx@gmail.com">
            </div>
            <div class="inputField">
                <label for="address">Adresse :</label>
                <input type="text" id="address" v-model="newMember.adresse" placeholder="ex: Tanambao">
            </div>
            <div class="inputField">
                <label for="dayOfBirth">Date de naissance :</label>
                <DatePicker inputId="dayOfBirth" 
                v-model="newMember.dateNaissance" showIcon iconDisplay="input" 
                :invalid="newMember.dateNaissance === null"
                required size="large"/>
            </div>
            <input type="submit">
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import DatePicker from 'primevue/datepicker';
import { useMemberStore } from '../stores/memberStore'

const sexe = ref([
    { name: 'Homme', code: 'H' },
    { name: 'Femme', code: 'F' }
]);

const newMember = reactive({
    nom: '',
    prenoms: '',
    sexe: 'H',
    email: '',
    adresse: '',
    dateNaissance: ''
})
</script>

<style>
form{
    padding: 50px;
}

.inputField{
    margin-top: 20px;
}

.inputField label{
    display: block;
    font-size:medium;
}

.inputField input{
    padding: 12px;
    width: 40%;
    border: 2px solid #ccc;
    border-radius: 4px;
}

.inputField select{
    padding: 10px;
}
</style>