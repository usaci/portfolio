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
            ctx.rect(Math.random()*5000, Math.random()*5000, Math.random()*42, Math.random()*42);
            ctx.fillStyle = "#E6641E";
            ctx.fill();

        }

        for(let i = 0;i<=80;i++) {
            ctx.beginPath();
            ctx.rect(Math.random()*5000, Math.random()*5000, Math.random()*42, Math.random()*42);
            ctx.fillStyle = "#2D29E6";
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
        z-index: -2;
        pointer-events: none;
    }
</style>