import { defineStore } from 'pinia';
import { appAPI } from '../services/axiosService';

export const useMemberStore = defineStore('memberStore', {
    state: ()=>({
        members: []
    }),
    actions: {
        refreshMembersList(){
            return new Promise((resolve, reject)=>{
                appAPI.get('/membre')
                .then((response)=>{
                    this.members = response.data
                    resolve()
                })
                .catch((error)=>{
                    reject(error)
                })
            })
        }
    },
    getters: {
        getMembers(state){
            return state.members;
        }
    }
})
