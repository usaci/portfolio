<template>
    <header class="siteHeader">  
        <div class="inner">        
            <h1 class="siteHeader__logo">
                <NuxtLink to="/">
                <img src="../assets/logo.svg" alt="TAKUYA FUJIKAWA PORTFOLIO"/>
                </NuxtLink>
            </h1>
            <nav class="siteHeader__nav" :class="{isActive: menuStatus}" @click="removeClass">
                <ul>
                    <li><a href="/works">About</a></li>
                    <li>Works</li>
                </ul>
            </nav>
            <div class="siteHeader__btn" @click="toggleClass" :class="{isActive: btnStatus}">
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
        font-size: 7vw;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        flex-direction: column;
        text-align: center;
        font-family: "degular-display",sans-serif;
        justify-content: center;
        background: linear-gradient(180deg, #F1F0EF 0%, #e7e3e070 100%);
    }
    .siteHeader .siteHeader__btn {
        position: relative;
        height: 13px;
        width: 85px;
        cursor: pointer;
    }

    .siteHeader .siteHeader__btn span {
        position: absolute;
        display: block;
        width: 85px;
        height: 3px;
        transition: all .4s;
    }

    .siteHeader .siteHeader__btn span:first-child {
        top: 0;
        background: #333;
        transform-origin: left top;
    }


    .siteHeader .siteHeader__btn span:last-child {
        top: 10px;
        background: #333;
        transform-origin: left top;
    }

    .siteHeader .siteHeader__btn.isActive span:first-child {
        transform: rotate(15deg) translateY(-6.5px);
    }

    .siteHeader .siteHeader__btn.isActive span:last-child {
        transform: rotate(-15deg) translateY(6.5px);
    }

    .siteHeader .siteHeader__nav {
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        backdrop-filter: blur(40px);
        opacity: 0;
        transition: all .4s;
        pointer-events: none;
    }

    .siteHeader .siteHeader__nav.isActive {
        opacity: 1;
        pointer-events: all;
    }
</style>
<script>
    export default {
        data() {
            return {
                btnStatus: false,
                menuStatus: false,
            }
        }, 
        methods: {
            toggleClass() {
                this.btnStatus = !this.btnStatus;
                this.menuStatus = !this.menuStatus;
            },

            removeClass() {
                if(this.menuStatus === true) {
                    this.btnStatus = !this.btnStatus;
                    this.menuStatus = !this.menuStatus;
                }
            }
        },
        mounted() {
        }
    }


</script>