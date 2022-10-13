<script setup>
import { RouterView } from 'vue-router';
import Header from "./views/Header.vue";
import Footer from "./views/Footer.vue";
</script>

<template>
  <div class="wrapper">
    <Header />

    <main class="main">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<style lang="scss">
:root {
  --color-for-title: #737373;
  --color-for-text: #B0B0B0FF;
  --color-for-border: #EFF5FF;
  --color-for-other-background: #FFFFFF;
  --color-for-main-background: linear-gradient(90deg, #FCFCFC, #F7F7F7, #F7F7F7, #F7F7F7, #FCFCFC);
}

html, body, #app {
  height: 100%;
  width: 100%;
  overflow: hidden;
  font-family: "Apple Symbols";
}

.wrapper {
  min-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

._container {
  max-width: 1050px;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: content-box;
}

.main {
  flex: 1 1 auto;
  padding: 100px 0 0 0;
  overflow-x: hidden;
  overflow-y: auto;
  background: var(--color-for-main-background);
}
</style>