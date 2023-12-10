<template>
    <a href="#" class="btn">{{ value }}</a>
</template>
<script>
    export default {
        props: {
            value: "", 
        }
    }
</script>
<style>
    .btn {
        display: block;
        background: #28282A;
        color: #fff;
        border-radius: 40px;
        margin-top: 4rem;
        width: fit-content;
        box-shadow: 0 4px 6px 0 rgba(0,0,0,.1);
        padding: 1.2em 4em;
        margin: 0 auto;
        transition: .4s;
    }

    .btn:hover {
        background: var(--main-orange);
    }
</style>