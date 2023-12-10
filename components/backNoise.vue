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
            ctx.fillStyle = "#5359EA";
            ctx.fill();
        }

        for(let i = 0;i<=80;i++) {
            ctx.beginPath();
            ctx.rect(Math.random()*5000, Math.random()*5000, Math.random()*42, Math.random()*42);
            ctx.fillStyle = "#EC7055"
            ctx.fill();
        }

        }

        createblockNoise();
        setInterval(createblockNoise, 300);

        const mv = document.querySelector('.mainVisual');

        window.addEventListener('scroll', () => {
                
            if(window.scrollY > mv.clientHeight) {
                    canvas.classList.add('isFocused');

                }else {
                    canvas.classList.remove('isFocused');   
            }
        })
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

    canvas#noise.isFocused {
        filter: blur(40px);
    }
</style>