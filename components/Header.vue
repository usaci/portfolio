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
            <div class="siteHeader__btn" @click="toggleClass">
                <span></span>
                <span></span>
            </div>
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

    .siteHeader .siteHeader__btn {
        position: relative;
        height: 20px;
        width: 85px;
    }

    .siteHeader .siteHeader__btn span {
        position: absolute;
        display: block;
        width: 85px;
        height: 3px;
    }

    .siteHeader .siteHeader__btn span:first-child {
        top: 0;
        background: #333;
    }


    .siteHeader .siteHeader__btn span:last-child {
        top: 10px;
        background: #333;
    }
</style>
<script>
    export default {
        data() {
            return {
                btn: this.$el,
                btnStatus: false,
            }
        }, 
        methods: {
            toggleClass(e) {
                this.btnStatus = !this.btnStatus;
            }
        },
        mounted() {

        }
    }


</script>