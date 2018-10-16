<template>
  <div class="home">
    <Title/>
    <WeatherAroundTheWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/Title.vue";
import WeatherAroundTheWorld from '@/components/WeatherAroundTheWorld.vue';

export default {
  name: "home",
  components: {
    Title,
    WeatherAroundTheWorld
  }
};
</script>
