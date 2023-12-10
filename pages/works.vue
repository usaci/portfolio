<template>
    <main class="mainContents">
        <section class="works">
            <div class="inner">
                <div class="titles">
                    <p class="subTitle">制作実績</p>
                    <h2 class="mainTitle mainTitle--deco">Works</h2>
                </div>
                <ul class="works__list">
                    <Work v-for="blog in data?.contents" :title="blog.title" :category="blog.category?.name" :src="blog.eyecatch?.url" :url="blog.id"/>
                </ul>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
    import { type Blog } from "~~/types/blog";
    const { data, error } = await useMicroCMSGetList<Blog>({
    endpoint: "blogs",
    });
</script>

<style>

    /* WORKS */
    .works {
        margin-top: 100px;
        padding-bottom: 100px;
    }

    .works .works__list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
    }

    /* works */
    .works .inner {
        display: flex;
        flex-direction: row-reverse;
        padding: 40px;
        margin: 0 auto;
        gap: 60px;
    }

    .works .inner .titles {
        writing-mode: vertical-rl;
    }

    .works .inner .titles .mainTitle {
        font-size: 14rem;
        line-height: 0.9;
    }

    .works .inner .titles .subTitle {
        font-size: 2.0rem;
        margin-left: -20px;
    }


    @media screen and (max-width: 768px) {


        .works {
            padding-bottom: 30px;
            margin-bottom: 30px;
        }

        .works .inner {
            padding: 20px;
            gap: 20px;
        }


        .works .inner .titles .subTitle {
            margin-left: 0;
            font-size: 1.4rem;
        }

        .works .inner .titles .mainTitle {
            margin-bottom: 30px;
            font-size: 14vw;
        }

        .works .works__list {
            grid-template-columns: 1fr;
        }

        .work .work__title {
            font-size: 1.7rem;
        }


        
    }
</style>
