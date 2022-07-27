<template>
  <section class="section">
        <div class="section__container">
          <div class="section__top">
            <h2 class="section__title">{{ sectionTitle }}</h2>
            <a href="#" class="section__more">Смотреть далее ></a>
          </div>
          <swiper class="section__list" ref="mySwiper" :options="swiperOptions">
            <swiper-slide class="section__element" v-for="el in elementData" :key="el.id">
              <ListElement :ImgId="imgId"/>
            </swiper-slide>
          </swiper>
        </div>
      </section>
</template>

<script>
import 'swiper/css/swiper.css';
import ListElement from '@/components/ListElement.vue';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
    ListElement,
  },
  directives: {
    swiper: directive,
  },
  props: ['sectionTitle', 'sectionId', 'imgId'],
  data() {
    return {
      elementData: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
      ],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
        slidesPerView: 2,
        spaceBetween: 10,
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>
