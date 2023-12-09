<template>
    <main class="mainContents" ref="mainContents">
        <section class="mainVisual" ref="mainVisual">
            <div class="inner">
                <div class="titles">
                    <p class="subTitle">Designer / Front-end-engineer</p>
                    <h2 class="mainTitle">Takuya Fujikawa<br>Portfolio</h2>
                </div>
            </div>
        </section>
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
        <section class="about about--firstBlock">
            <div class="inner">
                <div class="titles">
                    <p class="subTitle">私について</p>
                    <h2 class="mainTitle mainTitle--deco">Hello, World!</h2>
                </div>
                <div class="about__texts">
                    <h2 class="mainTitle">はじめまして、<br>藤川拓也です。</h2>

                    <p>2000年12月9日生まれ。神奈川県秦野市在住。<br>
                        不動産会社でのWebデザイナーとして1年ほど勤務した後、神奈川県内のデザイン制作会社にデザイナーとして在籍。<br>
                        Webサイトのデザイン・コーディング、WordPressの構築を中心に、映像制作やグラフィックデザインも手掛ける。</p>
    
                    <h2 class="mainTitle">デザインと実装<br>どちらも興味があります。</h2>
                        <p>2000年12月9日生まれ。神奈川県秦野市在住。<br>
                        不動産会社でのWebデザイナーとして1年ほど勤務した後、神奈川県内のデザイン制作会社にデザイナーとして在籍。<br>
                        Webサイトのデザイン・コーディング、WordPressの構築を中心に、映像制作やグラフィックデザインも手掛ける。</p>
                </div>

            </div>
        </section>
        <section class="link">
            <ul class="link__list">
                <li><a href="" target="_blank"></a></li>
                <li><a href="" target="_blank"></a></li>
                <li><a href="" target="_blank"></a></li>
            </ul>
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
    /* mainVisual */
    .mainVisual {
        position: relative;
        width: 100%;
        height: 100svh;
        margin-bottom: 100px;
    }
    .mainVisual .inner {
        margin: 0 auto;
        padding: 20px;
        max-width: 1024px;
        padding: 20px;
    }

    .mainVisual .inner .titles {
        position: absolute;
        bottom: 0;
        left: 30px;
    }

    .mainVisual .mainTitle {
        font-size: 14.2vw;
        line-height: 0.9;
        font-family: 'degular-display', sans-serif;

    }

    .mainContents {
        transition: all .5s;
    }

    .mainContents.focused {
        backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    background: #F1F0EF60;
    }

    /* WORKS */
    .works {
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
        .mainVisual .mainTitle {
            font-size: 15.2vw;
        }

        .mainTitle {
            margin-bottom: 30px;
            font-size: 5.2rem;
        }

        .works {
            padding-bottom: 30px;
        }

        .works .works__list {
            grid-template-columns: 1fr;
        }

        .about .inner {
            flex-direction: column;
        }
        .about .inner div {
            width: 100%;
        }
    }
</style>
