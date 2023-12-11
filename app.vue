<template>
  <Perlin></Perlin>
  <Loader></Loader>
  <NuxtLayout>
    <Header></Header>
      <NuxtPage ref="NuxtPage"/>
    <Footer></Footer>
  </NuxtLayout>
</template>

<script>
  import 'destyle.css';
  import Lenis from '@studio-freight/lenis'
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
</script>

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
  background: linear-gradient(180deg, #F1F0EF 0%, #E7E3E0 100%);
  font-size: 1.7rem;
  font-family: 'Helvetica','degular-display', 'Noto Sans JP', 'Hiragino Sans', 'Hiragino Kaku Gothic Pr6N', 'YuGothic', 'Yu Gothic',  Meiryo UI, sans-serif;
  line-height: 1.7;
  font-weight: 400;
  min-height: 100svh;
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Cdefs%3E%3Cpattern id="pattern-noise" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse"%3E%3Crect fill="%23ffffff" width="200" height="200" /%3E%3Cpath stroke="%23000000" stroke-opacity=".1" d="M -1,1 l 2,-2 M 0,200 l 200,-200 M 198,201 l 2,-2" /%3E%3C/path%3E%3C/pattern%3E%3C/defs%3E%3Crect fill="url(%23pattern-noise)" width="100%" height="100%" /%3E%3C/svg%3E');
 }


 @media screen and (max-width: 768px) {
  body {
    line-height: 1.6;
    font-size: 1.4rem;
  }
 }

</style>
