<template>
    <section class="mainVisual">
        <div class="inner">
            <div class="titles">
                <p class="subTitle">Designer / Front-end-engineer</p>
                <h2 class="mainTitle">TAKUYA<br>FUJIKAWA<br>PORTFOLIO</h2>
            </div>
        </div>
    </section>
    <section class="works">
        <div class="inner">
            <p class="subTitle">制作実績</p>
            <h2 class="mainTitle">WORKS</h2>
            <ul class="works__list">
                <Work v-for="blog in data?.contents" :title="blog.title" :category="blog.category?.name" :src="blog.eyecatch?.url" :url="blog.id"/>
            </ul>
        </div>
    </section>
    <section class="about about--firstBlock">
        <div class="inner">
            <div class="titles">
                <p class="subTitle">Hello, World!</p>
                <h2 class="mainTitle">はじめまして、<br>藤川拓也です。</h2>
            </div>
            <div class="texts">
                <p>2000年12月9日生まれ。神奈川県秦野市在住。<br>
                不動産会社でのWebデザイナーとして1年ほど勤務した後、神奈川県内のデザイン制作会社にデザイナーとして在籍。<br>
                Webサイトのデザイン・コーディング、WordPressの構築を中心に、映像制作やグラフィックデザインも手掛ける。</p>
            </div>
        </div>
    </section>
    <section class="about about--secondBlock">
        <div class="inner">
            <div class="titles">
                <p class="subTitle">Vision</p>
                <h2 class="mainTitle">デザインと実装<br>どちらも一流で<br>こなしたい</h2>
            </div>
            <div class="texts">
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
</template>

<style>
    /* mainTitle */

    .mainTitle {
        font-size: max(calc(100vw * 30 / 768), 5.6rem);
        margin-bottom: 7.0rem;
        line-height: 1.2;
    }
    .subTitle {
        font-size: 2.4rem;
        margin-bottom: 10px;
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
    }

    .mainVisual .mainTitle {
        font-size: 9.0rem;
        line-height: 1.0;

    }

    /* WORKS */
    .works {
        padding-bottom: 100px;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }

    .works .works__list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
    }

    /* works */
    .works .inner {
        padding: 20px;
        max-width: 1024px;
        margin: 0 auto;
    }

    /* ABOUT */
    .about {
        height: 100svh;
        display: flex;
        align-items: center;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }
    .about .inner {
        display: flex;
        max-width: 1100px;
        margin: 0 auto;
        align-items: center;
        padding: 20px;
        gap: 20px;
    }

    .about .inner div {
        width: 50%;
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

<script setup lang="ts">
import { type Blog } from "~~/types/blog";

const { data, error } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
});
console.log(data);
</script>