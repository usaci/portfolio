<template>
    <header class="siteHeader">  
        <div class="inner">        
            <h1 class="siteHeader__logo">
                <NuxtLink to="/">
                <img src="../assets/logo.svg" alt="TAKUYA FUJIKAWA PORTFOLIO"/>
                </NuxtLink>
            </h1>
            <!-- <nav class="siteHeader__nav">
                <ul>
                    <li>ABOUT</li>
                    <li>WORKS</li>
                </ul>
            </nav> -->
        </div>
    </header>
</template>
<style>
    .siteHeader {
        position: fixed;
        width: 100vw;
        height: 100px;
        z-index: 3;
    }

    .siteHeader .inner {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        align-items: center;
        
    }
    .siteHeader .siteHeader__logo img {
        width: 50px;
        height: 50px;
    }

    .siteHeader .siteHeader__nav ul {
        display: flex;
        gap: 20px;
    }
</style>