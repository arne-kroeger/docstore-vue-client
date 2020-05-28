import { Vue, Prop, Component } from 'vue-property-decorator';
import { DocumentApi } from '@/plugins/api-client';


@Component
export default class VueWithApi extends Vue {

  protected documentApi!: DocumentApi;

}
