import { ref, onBeforeUpdate } from "vue";
import { on } from "@baleada/vue-features";

export function useDimension(dimension = "width") {
  const elements = ref([]);

  const getRef = (index: number) => (el: any) => {
    (elements.value as any)[index] = el;
    console.log("el => ", el);
  };

  onBeforeUpdate(() => (elements.value = []));

  on(elements, {
    resize: (entries: any) => {
      const target = entries[0].target;
      target.textContent = entries[0].contentRect[dimension];
      console.log("target.textContent => ", target.textContent);
    },
  });

  return getRef;
}
