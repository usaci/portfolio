<template>
    <li class="work">
        <NuxtLink :to="url">
            <article>
                <figure class="work__thumb">
                    <img :src="src" alt="" class="">
                </figure>
                <h3 class="work__title">{{ title }}</h3>
                <p>{{ category }} | 種別</p>
            </article>
        </NuxtLink>
    </li>

</template>
<style>
    .work img {
        width: 100%;
    }

    .work figure {
        margin-bottom: 20px;
    }

    .work .work__title {
        font-size: 2.0rem;
        margin-bottom: 5px;
    }
</style>
<script lang="ts">
    export default {
        props: {
            title: String, 
            category: String, 
            src: String,
            url: String
        }
    }
</script>