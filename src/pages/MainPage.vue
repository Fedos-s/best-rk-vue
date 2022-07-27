<template>
  <main class="main">
    <div class="container main__container">

      <MainSection :sectionTitle="section.title" :sectionId="section.id" :imgId="section.img" v-for="section in sectionsData" :key="section.id"/>

    </div>
  </main>
</template>

<script>
import MainSection from '@/components/MainSection.vue';

export default {
  components: { MainSection },
  data() {
    return {
      status: true,
      sectionsData: [
        { title: 'Заголовок 1', id: 1, img: 1 },
        { title: 'Заголовок 2', id: 2, img: 2 },
        { title: 'Заголовок 3', id: 3, img: 3 },
        { title: 'Заголовок 4', id: 4, img: 4 },
        { title: 'Заголовок 5', id: 5, img: 5 },
      ],
    };
  },
  methods: {
    changeStatus() {
      if (this.position > window.scrollY) {
        this.status = true;
        this.position = window.scrollY;
      } else {
        this.status = false;
        this.position = window.scrollY;
      }
      this.$store.commit('updateScrollStatus', this.status);
    },
  },
  created() {
    window.addEventListener('scroll', this.changeStatus);
  },
};
</script>
