import { ref } from "vue";
import { bind } from "@baleada/vue-features";

export function useCheckbox() {
  const checkbox = ref();
  const checkboxRef = (el: any) => (checkbox.value = el);

  const label = ref();
  const labelRef = (el: any) => (label.value = el);

  const id = "id";

  bind(checkbox, {
    id,
  });

  bind(label, {
    for: id,
  });

  return {
    checkboxRef,
    labelRef,
  };
}
