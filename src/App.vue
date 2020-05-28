<template>
  <v-app>
    <wiki-header></wiki-header>

    <v-content>
      <router-view :key="$route.fullPath"></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import WikiHeader from '@/components/WikiHeader.vue';
import { DocumentApiFactory, Configuration } from './plugins/api-client';

const instance = axios.create({
  timeout: 10000,
});

Vue.prototype.$http = instance;

const documentApi = DocumentApiFactory(
  new Configuration(),
  process.env.API_BASE_URL,
  instance,
);

Vue.prototype.documentApi = documentApi;

export default Vue.extend({
  name: 'App',

  components: {
    WikiHeader,
  },

  data: () => ({
    //
  }),
});
</script>
