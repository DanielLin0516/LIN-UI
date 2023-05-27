<template>
  <button class="ea-button" >
    <slot />
  </button>
</template>

<!-- <script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "LButton"
})
</script> -->
<script lang="ts" setup>
import './style/index.scss'
defineOptions({
  name: 'LButton'
})

</script>