<template>
  <!--  <div class="w-24 h-24 rounded-2xl flex flex-col justify-center ring-primary"-->
  <!--       :class="color.value === selected.value ?'ring-offset-0 ring-2 ':''"-->
  <!--       :style="{ backgroundColor: color.hex+'50' }"-->
  <!--       @click.stop.prevent="$emit('select')">-->
  <!--    <div class="w-10 h-8 rounded-r-full" :style="{ backgroundColor: color.hex+'40' }"></div>-->
  <!--    <div class="w-10 h-8 rounded-l-full ml-auto" :style="{ backgroundColor: color.hex }"></div>-->
  <!--  </div>-->

  <UButton
    color="white"
    square
    :ui="{
          color: {
            white: {
              solid: 'ring-0 bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800',
              ghost: 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
            }
          }
        }"
    :variant="color.value === selected.value ? 'solid' : 'ghost'"
    @click.stop.prevent="$emit('select')"
  >
    {{ color.text }}
    <span class="inline-block w-3 h-3 rounded-full" :style="{ backgroundColor: color.hex }"/>
  </UButton>
</template>

<script setup lang="ts">
defineProps<{ color: { value: string, hex: string }, selected: { value: string } }>()
defineEmits(['select'])
</script>
