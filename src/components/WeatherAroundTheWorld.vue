<template>
  <h2>Weather around the world</h2>
</template>

<script>
import EorzeaWeather from "eorzea-weather";

export default {
  name: "WeatherAroundTheWorld",
  created() {
    console.log(EorzeaWeather.getWeather(EorzeaWeather.ZONE_YANXIA, new Date()));
  }
};
</script>
