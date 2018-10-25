<template>
  <div class="feed">
    <ul>
      <li v-for="zone in allZoneses" :key="zone.id">
        <p class="zone">{{ zone.japaneseName }}</p>
        <p class="region" v-for="(region, index) in zone.regions" :key="region.id">
        {{ region.japaneseName }}<br>{{ weathers[index] }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import EorzeaWeather from 'eorzea-weather';
import gql from 'graphql-tag';

// GraphQL query
const FeedQuery = gql`
  query allZoneses {
    allZoneses {
      id
      name
      japaneseName
      regions {
        name
        japaneseName
      }
    }
  }
`;

export default {
  name: 'WeatherAroundTheWorld',
  data: () => ({
    allZoneses: {},
    weathers: [],
    loading: 0
  }),
  created() {
    this.$apollo
      .query({
        query: FeedQuery
      })
      .then(res => {
        this.allZoneses = res.data.allZoneses;
        this.addWeatherInfo();
      });
  },
  methods: {
    addWeatherInfo() {
      for (let index = 0; index < this.allZoneses.length; index++) {
        const REGIONS = this.allZoneses[index].regions;
        const REGION_LENGTH = REGIONS.length;
        for (let regionIndex = 0; regionIndex < REGION_LENGTH; regionIndex++) {
          const REGION = REGIONS[regionIndex].name;
          const WEATHER = EorzeaWeather.getWeather(REGION, new Date(), {
            locale: 'ja'
          });

          this.weathers.push(WEATHER);
        }
      }
    }
  }
};
</script>
