<template>
      <div
        class="header__filter-wrap"
        :class="{ 'close-filter': !filterMenuStatus }"
      >
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide class="filter-list__item">
            <p class="filter-list__text">Элемент</p>
          </swiper-slide>
          <swiper-slide class="filter-list__item">
            <p class="filter-list__text">Элемент</p>
          </swiper-slide>
          <swiper-slide class="filter-list__item">
            <p class="filter-list__text">Элемент</p>
          </swiper-slide>
          <swiper-slide class="filter-list__item">
            <p class="filter-list__text">Элемент</p>
          </swiper-slide>
          <swiper-slide class="filter-list__item">
            <p class="filter-list__text">Элемент</p>
          </swiper-slide>
          <swiper-slide class="filter-list__item">
            <p class="filter-list__text">Элемент</p>
          </swiper-slide>
          <swiper-slide class="filter-list__item">
            <p class="filter-list__text">Элемент</p>
          </swiper-slide>
          <swiper-slide class="filter-list__item">
            <p class="filter-list__text">Элемент</p>
          </swiper-slide>
          <swiper-slide class="filter-list__item">
            <p class="filter-list__text">Элемент</p>
          </swiper-slide>
        </swiper>
      </div>
</template>

<script>
import 'swiper/css/swiper.css';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';

export default {
  props: ['filterMenuStatus'],
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
        slidesPerView: 4,
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
