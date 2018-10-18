<template>
  <div class="feed">
    <ul>
      <li v-for="zone in allZoneses" :key="zone.id">
        <p class="zone">{{ zone.name }}</p>
        <p class="region" v-for="region in zone.regions" :key="region.id">
        {{ region.name }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import EorzeaWeather from 'eorzea-weather';
import gql from 'graphql-tag';

// GraphQL query
const FeedQuery = gql `
  query allZoneses {
    allZoneses {
      id
      name
      regions{
        name
      }
    }
  }
`

export default {
  name: 'WeatherAroundTheWorld',
  data: () => ({
    allZoneses: {},
    loading: 0,
  }),
  apollo: {
    allZoneses: {
      query: FeedQuery,
      loadingKey: 'loading',
    },
  },
  created() {
    const WEATHER = EorzeaWeather.getWeather(
      EorzeaWeather.ZONE_YANXIA,
      new Date()
    );
    // console.log(WEATHER);
  }
};
</script>
