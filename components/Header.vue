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
                    <li class="isHover--slot_box">
                        <NuxtLink to="/"><span class="isHover--slot" data-title="Top">Top</span></NuxtLink>
                    </li>
                    <li class="isHover--slot_box">
                        <NuxtLink to="/works"><span class="isHover--slot" data-title="Works">Works</span></NuxtLink>
                    </li>
                    <li class="isHover--slot_box">
                        <NuxtLink to="/about"><span class="isHover--slot" data-title="About">About</span></NuxtLink>
                    </li>
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
        top: 0;
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


    .siteHeader .siteHeader__nav .isHover--slot {
        display: block;
        position: relative;
        transition: 0.4s cubic-bezier(0.87, 0, 0.13, 1);

    }

    .siteHeader .siteHeader__nav .isHover--slot::after {
        position: absolute;
        content: attr(data-title);
        display: block;
        transition: 0.4s cubic-bezier(0.87, 0, 0.13, 1);
        background: inherit;
        transform: translateX(-50%);
        left: 50%;
    }

    .siteHeader .siteHeader__nav li:hover .isHover--slot {
        transform: translateY(-100%);
    }

    .siteHeader .siteHeader__nav ul li {
        height: fit-content;
    }

    .siteHeader .siteHeader__nav ul li a {
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {

        .siteHeader .siteHeader__btn {
            width: 60px;
        }

        .siteHeader .siteHeader__btn span {
            position: absolute;
            display: block;
            width: 60px;
            height: 3px;
            transition: all .4s;
        }
        .siteHeader .inner { 
            padding: 10px;
        }
        .siteHeader .siteHeader__btn.isActive span:first-child {
            transform: rotate(15deg) translateY(-3px);
        }

        .siteHeader .siteHeader__btn.isActive span:last-child {
            transform: rotate(-15deg) translateY(3px);
        }

        .siteHeader .siteHeader__nav ul {
            font-size: 4.2rem;
        }

        .isHover--slot_box {
            overflow: hidden;
        }
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