<script>
import 'destyle.css';
</script>
<template>
  <Model></Model>
  <BackNoise></BackNoise>
  <NuxtLayout>
    <Header></Header>
    <main>
      <NuxtPage />
    </main>
    <Footer></Footer>
  </NuxtLayout>
</template>
<style>
html {
  font-size: 62.5%;
}

#__nuxt {
  overflow: clip;
}

:root {
  --main-orange: #E95B3C;
  --main-purple: #4047E3;
}
 body {
  color: #28282A;
  background: #F1F0EF;
  font-size: 1.7rem;
  font-family: 'Almarai', 'Hiragino Sans', 'Hiragino Kaku Gothic Pr6N', 'Noto Sans JP', 'YuGothic', 'Yu Gothic',  Meiryo UI, sans-serif;
  line-height: 1.6;
  font-weight: 400;
  min-height: 100svh;
 }

</style>