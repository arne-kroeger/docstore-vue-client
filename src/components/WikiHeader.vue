<template>
  <v-app-bar
      app
      color="primary"
      dark
    >
    <v-btn icon to="/">
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-autocomplete
    :items="documentsWithoutCurrent"
    :search-input.sync="search"
    :loading="loading"
    item-value="id"
    item-text="title"
    no-filter
    v-model="selectedItem"
    @change="reroute">
      <template v-slot:item="data">
        <v-list-item-content>
          <v-list-item-title >{{data.item.title}}</v-list-item-title>
          <v-list-item-subtitle>
            Latest update: {{ timeDiff(data.item.latestUpdate) }}

            <v-chip v-for="tag in data.item.tags" :key="tag" class="mr-1maste" small>
              {{ tag }}
            </v-chip>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          {{ data.item.space.name }}<br />
          <v-chip small color="error">{{ data.item.environment.name }}</v-chip>
        </v-list-item-action>
      </template>
    </v-autocomplete>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Watch } from 'vue-property-decorator';
import {
  Document,
} from '@/plugins/api-client';
import VueWithApi from './VueWithApi';

@Component({
  name: 'wiki-header',
  components: {},
})
export default class WikiHeader extends VueWithApi {
  private documents: Document[] = [];

  private search = '';

  private timerId = 0;

  private selectedItem = -1;

  private loading = false;

  get documentsWithoutCurrent() {
    console.log(this.$route.params.documentUuid);
    return this.documents.filter((item) => item.uuid !== this.$route.params.documentUuid);
  }

  reroute() {
    const document = this.documents.find((item) => item.id === this.selectedItem);
    if (document) {
      this.$router.push({ path: `/detail/${document.uuid}/${document.environment.name}` });

      this.$nextTick(() => {
        this.search = '';
        this.selectedItem = -1;
      });
    }
  }

  customFilter() {
    return true;
  }

  timeDiff(timeString: string) {
    if (!timeString) {
      return '-';
    }

    const time = Date.parse(timeString);


    console.log(typeof time);

    const seconds = (new Date().getTime() - time) / 1000;

    return `${Math.round(seconds / 60)}m ago`;
  }

  searchDebounced() {
    clearTimeout(this.timerId);
    this.loading = true;

    this.timerId = setTimeout(() => {
      if (!this.search) {
        return;
      }


      this.documentApi
        .searchDocuments(this.search)
        .then((result) => {
          this.documents = result.data;
        })
        .catch((error) => {
          console.error(error);
          return Promise.reject(error);
        })
        .finally(() => {
          this.loading = false;
        });
    }, 500);
  }

  @Watch('search')
  onSearchChanges() {
    if (!this.search || this.search === '') {
      return;
    }
    this.searchDebounced();
  }
}
</script>
<style>
</style>
