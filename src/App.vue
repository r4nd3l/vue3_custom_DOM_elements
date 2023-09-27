<template>
  <main
    class="h-screen w-screen flex flex-col items-center justify-center bg-gray-900"
  >
    <div
      v-for="(item, index) in ['a', 'b', 'c']"
      :key="index"
      class="h-24 w-24 resize flex items-center justify-center overflow-scroll p-2 bg-gray-700 text-gray-300 rounded"
      :ref="getRef(index)"
    >
      <!-- @ts-ignore -->
      {{ item }}
    </div>

    <div class="flex items-center gap-2 text-gray-300 rounded p-2">
      <input type="checkbox" :ref="checkboxRef" />
      <label :ref="labelRef"> Toggle </label>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useDimension } from "./useDimension";
import { useCheckbox } from "./useCheckbox";

const getRef = useDimension("width");

const { checkboxRef, labelRef } = useCheckbox();
</script>
