<template>
    <li class="work">
        <NuxtLink :to="url">
            <article>
                <figure class="work__thumb">
                    <img :src="src" alt="" class="">
                </figure>
                <h3 class="work__title isHover--slot_box">
                    <span class="isHover--slot animate peel-off" :data-title="title">
                        {{ title }}
                    </span>
                </h3>
                <p class="work__cat">{{ category }}</p>
            </article>
        </NuxtLink>
    </li>

</template>
<style>
    .work {
        overflow: hidden;
    }
    .work img {
        width: 100%;
    }

    .work .work__thumb {
        overflow: hidden;
    }
    .work:hover .work__thumb {
        transition: .4s;
    }

    .work .work__thumb img {
        transition: .4s;
    }

    .work:hover .work__thumb img {
        transform: scale(1.2);
    }

    .work figure {
        margin-bottom: 20px;
    }

    .work .work__title {
        font-size: 2.0rem;
        font-weight: 500;
        margin-bottom: 5px;
    }

    .isHover--slot_box {
        overflow: hidden;
    }

    .isHover--slot {
        display: block;
        position: relative;
        transition: 0.4s cubic-bezier(0.87, 0, 0.13, 1);

    }

    .isHover--slot::after {
        position: absolute;
        content: attr(data-title);
        display: block;
        transition: 0.4s cubic-bezier(0.87, 0, 0.13, 1);
        background: inherit;
    }

    .work:hover .isHover--slot{
        transform: translateY(-100%);
    }

    .work .work__cat {
        border: solid 1px #4047E3;
        color: #4047E3;
        width: fit-content;
        padding: 0.2em 0.4em;
        margin-top: 1rem;
        font-size: 1.3rem;

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