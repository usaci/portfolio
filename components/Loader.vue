<template>
    <div class="loader" :class="{isHidden: status}">
        <p class="loading">Now Loading...</p>
        <p class="loader__counter">{{ this.count }}%</p>
        <div class="loader__bar" :style="{transform: `translateX(${150 - this.count}%)`}"></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                count: 0,
                status: false,
                
            }
        },
        methods: {
            countUp() {
                if(this.count >= 100) {
                    return;
                }else {
                    this.count++;
                }
            }
        },
        mounted() {
            setInterval(this.countUp, 3);
            setTimeout(() => {
                this.status = !this.status;
            }, 1400)
        }
    }
</script>
<style>

    .loader {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        font-size: 14.2vw;
        line-height: 0.9;
        font-family: 'degular-display', sans-serif;
        color: #28282A;
        background: linear-gradient(180deg, #F1F0EF 0%, #E7E3E0 100%);
        z-index: 4;
        padding: 20px;
        transition: opacity 0.6s;
    }

    .loader.isHidden {
        opacity: 0;
        pointer-events: none;
    }
    .loader .loader__counter {
        font-size: 40vw;
        text-align: right;
    }

    .loader .loader__bar {
        position: absolute;
        width: 100vw;
        bottom: 0%;
        left: 50%;
        transform: translate(-50%, 0%);
        height: 10px;
        background: var(--main-purple);
        background-image: linear-gradient( 90deg, #F5512D 0 20%, #4047E3 20% );
    }
</style>