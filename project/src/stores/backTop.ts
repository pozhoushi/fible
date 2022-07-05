import { defineStore } from "pinia";
export const useBackTop = defineStore("backTop", {
  state: (): { scrollDom: HTMLElement | null } => ({ scrollDom: null }),
  actions: {
    setScrollDom(scrollDom: HTMLElement) {
      this.scrollDom = scrollDom;
    },
    goTop() {
      if (this.scrollDom) {
        this.scrollDom.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
  },
});
