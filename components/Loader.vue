<template>
    <div class="loader" :class="{isHidden: status}" :style="{display: displayStatus}">
        <LoaderModel></LoaderModel>
        <p class="loader__text up-container">{{ count }}%</p>
    </div>
    <div class="loader--outer" :class="{isHidden: status}"></div>
    <div class="loader--outer" :class="{isHidden: status}"></div>
</template>
<script>
    export default {
        data() {
            return {
                count: 0,
                status: false,
                displayStatus: 'block'
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
            }, 2000)

            // setTimeout(() => {
            //     this.displayStatus = 'none';
            // }, 2500)
        }
    }
</script>
<style>

    .loader {
        display: none;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        font-size: 14.2vw;
        line-height: 0.9;
        font-family: 'degular-display', sans-serif;
        color: #28282A;
        background: #F1F0EF;
        z-index: 6;
        backdrop-filter: blur(80px);
        padding: 20px;
        max-height: 100%;
        transition: 1.0s cubic-bezier(0.87, 0, 0.13, 1);
        overflow: hidden;
    }

    .loader.isHidden {
        max-height: 0%;
        padding: 0;
        pointer-events: none;
    }

    .loader--outer {
        position: fixed;
        transition: 0.5s cubic-bezier(0.87, 0, 0.13, 1);
        background-color: var(--main-purple);
        width: 100%;
        height: 100%;
        max-height: 100%;
        top: 0;
        left: 0;
        z-index: 5;
        pointer-events: none;
        transition-delay: .5s;
    }

    .loader--outer:nth-of-type(2) {
        transition: 0.5s cubic-bezier(0.87, 0, 0.13, 1);
        background-color: var(--main-orange);
        z-index: 4;
        transition-delay: 1.0s;
    }

    .loader--outer.isHidden {
        max-height: 0%;
        pointer-events: none;
    }


    .loader__text {
        position: absolute;
        transform: translate(-50%, -50%);
        bottom: 25%;
        left: 50%;
        width: 100%;
        text-align: center;
        font-size: 3.6rem;
    }

 

    .up-container:first-child {
        overflow: hidden;
    }

    .animate.up {
        display: inline-block;
        transform: translateY(105%);
        transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .animate.up.isAnimated {
        transform: translateY(-7%);
    }

</style>