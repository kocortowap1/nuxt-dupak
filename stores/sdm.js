import { defineStore } from "pinia";
const SISTER_URL = 'https://sister-api.kemdikbud.go.id/ws.php/1.0'
export const useSdm = defineStore("sdm", {
  state: () => ({
    sdmList: [],
    sdmSelected: {},
  }),
  actions: {
    async fetchSdmAll() {
      const { data } = await useFetch(
        `${SISTER_URL}/referensi/sdm`
      );
      if (data.value) {
        this.sdmList = data.value;
      }
    },
    async getProfilDosen(id){
        const { data } = await useFetch(
            `${SISTER_URL}/referensi/sdm`
          );
          if (data.value) {
            this.sdmSelected = data.value;
          }
    }
  },
});
