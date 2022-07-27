<template>
  <header class="header">
    <div class="container header__container">

      <HeaderTopSection/>

      <HeaderBottomSection :filterMenuStatus="filterMenuStatus"/>

    </div>
  </header>
</template>

<script>
import HeaderTopSection from '@/components/HeaderTopSection.vue';
import HeaderBottomSection from '@/components/HeaderBottomSection.vue';

export default {
  components: {
    HeaderTopSection,
    HeaderBottomSection,
  },
  computed: {
    filterMenuStatus() {
      return this.$store.state.scrollStatus;
    },
  },
};
</script>
