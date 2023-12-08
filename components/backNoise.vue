<template>
    <canvas id="noise" class="noise"></canvas>
</template>

<script>
export default {
    mounted() {
        const canvas = this.$el;
        const ctx = canvas.getContext("2d");
        canvas.width = 4000;
        canvas.height = 5000;

        // ブロックパターンを無作為に生成する

        const createblockNoise = function (){

        ctx.clearRect(0, 0, 4000, 5000);
        for(let i = 0;i<=80;i++) {
            ctx.beginPath();
            ctx.rect(Math.random()*5000, Math.random()*5000, Math.random()*30, Math.random()*20);
            ctx.fillStyle = "#E95B3C";
            ctx.fill();

        }

        for(let i = 0;i<=80;i++) {
            ctx.beginPath();
            ctx.rect(Math.random()*5000, Math.random()*5000, Math.random()*30, Math.random()*20);
            ctx.fillStyle = "#4047E3";
            ctx.fill();
        }

        }

        createblockNoise();
        setInterval(createblockNoise, 300)
    }
}

</script>
<style>
    canvas#noise {
        position: fixed;
        top: 0;
        z-index: -1;
        pointer-events: none;
    }
</style>