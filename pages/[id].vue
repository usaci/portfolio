<template>
    <template v-if="data">
        <main class="mainContents">
            <article class="article">
                <header class="article__header">
                    <p class="article__cat">{{ data.category?.name }}</p>
                    <h1 class="article__title">{{ data.title }}</h1>
                    <figure>
                        <img
                        :src="data.eyecatch?.url"
                        :width="data.eyecatch?.width"
                        :height="data.eyecatch?.height"
                        alt=""
                        />
                    </figure>
                </header>
                <section class="article__main">
                    <div v-html="data.content"></div>
                </section>
            </article>
        <!-- <footer class="article__footer">

        </footer> -->
    </main>
    </template>
</template>
<script setup lang="ts">
import { type Blog } from "~~/types/blog";

const { params } = useRoute();

const { data } = await useMicroCMSGetListDetail<Blog>({
  endpoint: "blogs",
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
});
console.log(data)
</script>

<style>
    .article__header {
        padding: 4rem;
    }

    .article__header .article__title {
        font-weight: 500;
    }

    .article {
        max-width: 1024px;
       margin: 0 auto;
       border-radius: 20px;
       margin-top: 100px;
       backdrop-filter: blur(30px);
        -webkit-backdrop-filter: blur(30px);
    }
    .article__main, .article__footer {
        padding: 4rem;
    }

    .article__header figure {
        margin-bottom: 30px;
    }

    .article__header .article__cat {
        border: solid 2px #4047E3;
        color: #4047E3;
        width: fit-content;
        padding: 0.2em 0.4em;
        margin-bottom: 2rem;
    }

    .article__header img, .article__main img {
        max-width: 100%;
        height: auto;
    }

    .article__header .article__title {
        font-size: 3.6rem;
        margin-bottom: 30px;
    }

    /* article__main */

    .article__main * {
        margin-bottom: 30px;
    }

    .article__main h2 {
        font-size: 2.4rem;
        background-image: linear-gradient( 90deg, #F5512D 0 20%, #4047E3 20% );
        background-repeat: no-repeat;
        background-size: 100% 5%;
        background-position: bottom;
        padding: 0.3em 0;
        font-weight: 500;
    }

    .article__main h3 {
        font-size: 2.0rem;
        font-weight: 500;
    }

    .article__main h4 {
        font-size: 1.8rem;
        font-weight: 500;
    }

    @media screen and (max-width: 768px) {
        .article__header, .article__main {
            padding: 20px;
        }

        .article__header .article__title {
            font-size: 2.6rem;
            margin-bottom: 30px;
        }
    }

</style>