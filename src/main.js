import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';

// Paste your endpoint for the Simple API here.
const apolloClient = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjne3ss9ccdaj0127ccy2uvvn'
});

// Install the vue plugin
Vue.use(VueApollo);
Vue.config.productionTip = false;

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app');
