<script setup lang="ts">
import { RouterView } from 'vue-router'
import DefaultLayout from "@/layouts/DefaultLayout.vue"
import ParticlesEffect from "@/components/ParticlesEffect.vue"
</script>

<template>

  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
  <ParticlesEffect />

</template>

<style></style>
