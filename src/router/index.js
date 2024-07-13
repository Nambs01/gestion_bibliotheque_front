import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import LendBookView from '@/views/LendBookView.vue';
import MemberView from '@/views/MemberView.vue';
import ReturnBook from '@/views/ReturnBook.vue';
import NewMember from '@/views/NewMember.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/member',
      name: 'member',
      component: MemberView 
    },
    {
      path: '/member/new',
      name: 'newMember',
      component: NewMember
    },
    {
      path: '/lendBook',
      name: 'lendBook',
      component: LendBookView
    },
    {
      path: '/returnBook',
      name: 'returnBook',
      component: ReturnBook
    }
  ]
})

export default router
