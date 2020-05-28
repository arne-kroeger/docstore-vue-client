<template>
  <div v-if="document">
    <v-row class="ma-2">
      <v-col col="10">
        <h1>
        {{document.title}}
        </h1>
      </v-col>
      <v-col cols="2">
        <v-select :items="environments"
          item-text="name"
          item-value="name"
          v-model="environment"
         dense>
        </v-select>
      </v-col>
    </v-row>
    <v-row class="ma-2">
      <v-col cols="3">
        <small>Letzte Änderung: {{ document.latestChange | formatDate }}</small>
        <br />
        <small>Letztes Update: {{ document.latestUpdate | formatDate }}</small>
      </v-col>
      <v-col>
        <v-chip v-for="tag in document.tags" :key="tag"
          small class="ma-1" :to="`/tag/${tag}`">{{ tag }}</v-chip>
      </v-col>
    </v-row>
    <div class="ma-2" v-html="document.content">
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import {
  Document,
} from '@/plugins/api-client';
import VueWithApi from './VueWithApi';

@Component({
  name: 'detail-page',
  components: {
  },
})
export default class DetailPage extends VueWithApi {
  private document: Document | null = null;

  get environments() {
    if (this.document) {
      return [this.document.environment, ...this.document.otherEnvironments];
    }

    return [];
  }

  get environment() {
    if (this.document) {
      return this.document.environment.name;
    }

    return '';
  }

  set environment(value: string) {
    if (this.document && this.document.environment.name !== value) {
      this.$router.push({ path: `/detail/${this.document.uuid}/${value}` });
    }
  }

  created() {
    this.documentApi
      .getDocument(this.$route.params.documentUuid, this.$route.params.env)
      .then((result) => {
        this.document = result.data;
      })
      .catch((error) => {
        console.error(error);
        return Promise.reject(error);
      });
  }
}
</script>
<style>
table {
  border-collapse: collapse;
  width: 100%;
  position: relative;
}

table td, table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even){background-color: #f2f2f2;}

table tr:hover {background-color: #ddd;}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #1976d2;
  color: white;
}
</style>
