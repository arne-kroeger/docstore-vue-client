<template>
  <v-container>
    <v-row class="text-center">
      <v-col v-for="document in documents" :key="document.uuid" cols="3">
        <v-card color="#385F73" @click="openDetailPage(document)">
          <v-card-title class="headline">
            {{document.title}}
          </v-card-title>
          <v-card-text style="text-align: left">
            <v-row dense>
              <v-col cols="3"  dense >
                Environment:
              </v-col>
              <v-col>
                <v-chip color="error" small>{{ document.environment.name }}</v-chip>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col cols="3">
                Tags:
              </v-col>
              <v-col>
                <v-chip color="primary" class="ma-1" small v-for="tag in document.tags"
                :key="tag">{{ tag }}</v-chip>
              </v-col>
            </v-row>
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import {
  Document,
} from '@/plugins/api-client';
import VueWithApi from './VueWithApi';

@Component({
  name: 'startpage',
  components: {},
})
export default class Startpage extends VueWithApi {
  private documents: Document[] = [];

  openDetailPage(document: Document) {
    this.$router.push({ path: `/detail/${document.uuid}/${document.environment.name}` });
  }

  created() {
    this.documentApi
      .getLatestDocuments()
      .then((result) => {
        this.documents = result.data;
      })
      .catch((error) => {
        console.error(error);
        return Promise.reject(error);
      });
  }
}
</script>

<style scoped>
* {
  color: white;
}
</style>
