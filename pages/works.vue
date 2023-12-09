<template>
    <main class="mainContents" ref="mainContents">
        <section class="works" ref="works">
            <div class="inner">
                <div class="titles">
                    <p class="subTitle">制作実績</p>
                    <h2 class="mainTitle mainTitle--deco">Works</h2>
                </div>
                <ul class="works__list">
                    <Work v-for="blog in data?.contents" :title="blog.title" :category="blog.category?.name" :src="blog.eyecatch?.url" :url="blog.id"/>
                    <Work v-for="blog in data?.contents" :title="blog.title" :category="blog.category?.name" :src="blog.eyecatch?.url" :url="blog.id"/>
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
    /* mainTitle */

    .mainTitle {
        font-family: 'degular-display', 'Noto Sans JP', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'YuGothic', Meiryo UI, sans-serif;
        font-size: max(calc(100vw * 60 / 768), 7.0rem);
        margin-bottom: 7.0rem;
        line-height: 1.2;
        font-weight: 500;
    }

    .mainTitle.mainTitle--deco:before {
        content: "";
        display: inline-block;
        background: url('../assets/deco.svg');
        height: 0.2em;
        width: 0.2em;
        margin-bottom: 0.2em;
        margin-right: 0.2em;
        transform: rotate(90deg);
        background-size: contain;
        background-repeat: no-repeat;
    }
    .subTitle {
        font-family: 'degular-display', sans-serif;
        font-size: 3.2rem;
        margin-bottom: 0px;
    }

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

    /* ABOUT */
    .about {
        display: flex;
        align-items: center;
    }
    .about .inner {
        display: flex;
        flex-direction: row-reverse;
        padding: 40px;
        margin: 0 auto;
        gap: 60px;
    }

    .about .inner .titles {
        writing-mode: vertical-rl;
    }

    .about .inner .about__texts .titles {
        writing-mode: initial;
    }

    .about .inner .about__texts .titles .mainTitle {
        writing-mode: initial;
        font-size: 4.8rem;
        line-height: 1.2;
        margin-bottom: 4rem;
    }

    .about .inner .titles .mainTitle {
        font-size: 14rem;
        line-height: 0.9;
    }

    .about .inner .titles .subTitle {
        font-size: 2.0rem;
        margin-left: -20px;
    }

    .about .inner .mainTitle {
        font-size: max(calc(100vw * 30 / 768), 5.0rem);
    }

    .about .inner .about__texts p {
        margin-bottom: 6rem;
    }


    @media screen and (max-width: 768px) {

        .subTitle {
            font-size: 2.0rem
        }

        .mainVisual {
            margin-bottom: 60px;
        }

        .mainVisual .mainTitle {
            font-size: 15.2vw;
        }

        .mainVisual .inner .titles {
            left: 0;
            padding: 20px;
        }

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

        /* about */

        .about .inner {
            flex-direction: row-reverse;
            padding: 20px;
            gap: 30px;
        }

        .about .inner .mainTitle {
            font-size: 3.0rem;
            margin-bottom: 2.0rem;
        }
        
        .about .inner .about__texts {
            width: 100%;
        }

        .about .inner .titles .subTitle {
            margin-left: 0;
            font-size: 1.4rem;
        }

        .about .inner .titles .mainTitle {
            margin-bottom: 30px;
            font-size: 14vw;
        }

        
    }
</style>
