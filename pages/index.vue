<script setup lang="ts">
    import { type Blog } from "~~/types/blog";
    const { data, error } = await useMicroCMSGetList<Blog>({
    endpoint: "blogs",
    });

    const getAnimated = (e: any) => {
        
        if( (e.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2) < window.scrollY) {
            e.classList.add('isAnimated');
            return;
        }
    }
    onMounted(() => {
        const getEl = () => {
            const animates = document.querySelectorAll('.animate');
            return animates;
        }
    
        const animates = getEl();
        animates.forEach((e, index) => {
            setTimeout(() => {
                if(e.classList.contains('init')) {
                    e.classList.add('isAnimated');
                }
            }, 1500)

            window.addEventListener('scroll', () => {
                getAnimated(e);
            })
        })
    })

</script>
<template>
    <div class="background">        
        <BackNoise></BackNoise>
        <Model></Model>
    </div>
    <main class="mainContents" ref="mainContents">
        <section class="mainVisual" ref="mainVisual">
            <div class="inner">
                <div class="titles">
                    <p class="subTitle animate peelOff init">Designer / Front-end-engineer</p>
                    <h2 class="mainTitle">
                        <div class="up-container">
                            <span class="animate init up separate" style="transitionDelay: 0s">T</span>
                            <span class="animate init up separate" style="transitionDelay: .05s">a</span>
                            <span class="animate init up separate" style="transitionDelay: .1s">k</span>
                            <span class="animate init up separate" style="transitionDelay: .15s">u</span>
                            <span class="animate init up separate" style="transitionDelay: .2s">y</span>
                            <span class="animate init up separate" style="transitionDelay: .25s">a</span>
                            <span>&nbsp</span>
                            <span class="animate init up separate" style="transitionDelay: .3s">F</span>
                            <span class="animate init up separate" style="transitionDelay: .35s">u</span>
                            <span class="animate init up separate" style="transitionDelay: .4s">j</span>
                            <span class="animate init up separate" style="transitionDelay: .45s">i</span>
                            <span class="animate init up separate" style="transitionDelay: .5s">k</span>
                            <span class="animate init up separate" style="transitionDelay: .55s">a</span>
                            <span class="animate init up separate" style="transitionDelay: .6s">w</span>
                            <span class="animate init up separate" style="transitionDelay: .65s">a</span>
                        </div>

                        <div class="up-container">
                            <span class="animate init up separate" style="transitionDelay: .7s">P</span>
                            <span class="animate init up separate" style="transitionDelay: .75s">o</span>
                            <span class="animate init up separate" style="transitionDelay: .8s">r</span>
                            <span class="animate init up separate" style="transitionDelay: .85s">t</span>
                            <span class="animate init up separate" style="transitionDelay: .9s">f</span>
                            <span class="animate init up separate" style="transitionDelay: 1.0s">o</span>
                            <span class="animate init up separate" style="transitionDelay: 1.05s">l</span>
                            <span class="animate init up separate" style="transitionDelay: 1.1s">i</span>
                            <span class="animate init up separate" style="transitionDelay: 1.15s">o</span>
                        </div>

                    </h2>
                </div>
            </div>
        </section>
        <section class="works" ref="works">
            <div class="inner">
                <div class="titles">
                    <p class="subTitle animate"><span class="animate peelOff peelOff-v">制作実績</span></p>
                    <h2 class="mainTitle mainTitle--deco animate peelOff peelOff-v">Works</h2>
                </div>
                <div class="work-container">
                    <ul class="works__list">
                        <Work v-for="blog in data?.contents" :title="blog.title" :category="blog.category?.name" :src="blog.eyecatch?.url" :url="blog.id"/>
                        <Work v-for="blog in data?.contents" :title="blog.title" :category="blog.category?.name" :src="blog.eyecatch?.url" :url="blog.id"/>
                        <Work v-for="blog in data?.contents" :title="blog.title" :category="blog.category?.name" :src="blog.eyecatch?.url" :url="blog.id"/>
                    </ul>
                    <Button value="制作事例はこちら"></Button>
                </div>
            </div>
        </section>
        <section class="about about--firstBlock">
            <div class="inner">
                <div class="titles">
                    <p class="subTitle"><span class="animate peelOff peelOff-v">私について</span></p>
                    <h2 class="mainTitle mainTitle--deco animate peelOff peelOff-v">Hello, World!</h2>
                </div>
                <div class="about__texts">
                    <h2 class="mainTitle animate peelOff">はじめまして、<br>藤川拓也です。</h2>

                    <p>2000年12月9日生まれ。神奈川県秦野市在住。<br>
                        不動産会社でのWebデザイナーとして1年ほど勤務した後、神奈川県内のデザイン制作会社にデザイナーとして在籍。<br>
                        Webサイトのデザイン・コーディング、WordPressの構築を中心に、映像制作やグラフィックデザインも手掛ける。</p>
    
                    <h2 class="mainTitle animate peelOff">デザインと実装<br>どちらも興味があります。</h2>
                        <p>2000年12月9日生まれ。神奈川県秦野市在住。<br>
                        不動産会社でのWebデザイナーとして1年ほど勤務した後、神奈川県内のデザイン制作会社にデザイナーとして在籍。<br>
                        Webサイトのデザイン・コーディング、WordPressの構築を中心に、映像制作やグラフィックデザインも手掛ける。</p>

                        <Button value="プロフィールを詳しくみる"></Button>
                </div>

            </div>
        </section>
        <section class="links">
            <div class="inner">
                <ul class="link__list">
                    <li class="link">
                        <a href="https://github.com/usaci" target="_blank">
                            <img src="../assets/images/github.png" alt="github">
                            <p>Github</p>
                        </a>
                    </li>
                    <li class="link">
                        <a href="https://designroom.work" target="_blank">
                            <img src="../assets/images/designroom.png" alt="デザインのへや">
                            <p>デザインのへや（個人ブログ）</p>
                        </a>
                    </li>
                    <li class="link">
                        <a href="https://www.wantedly.com/id/Fujikawa_tk" target="_blank">
                            <img src="../assets/images/wantedly.png" alt="wantedly">
                            <p>Wantedly</p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>

<style>
    /* animate */
    .peelOff {
        display: block;
        position: relative;
        width: fit-content;
    }

    .peelOff:after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0%;
        left: 0;
        background: #333;
        transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        transform: translate(0%, 0%);
    }

    .peelOff.isAnimated:after {
        transform: translate(-105%, 0%);
    }

    .peelOff-v:after {
        transform: translate(0%, 0%);
    }

    .peelOff-v.isAnimated:after {
        transform: translate(0%, -110%);
    }

    .up-container:first-child {
        overflow: hidden;
    }

    .animate.up {
        display: inline-block;
        transform: translateY(105%);
        transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .animate.up.isAnimated {
        transform: translateY(-7%);
    }



    /* mainTitle */

    .mainTitle {
        font-family: 'degular-display', 'Noto Sans JP', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'YuGothic', Meiryo UI, sans-serif;
        font-size: max(calc(100vw * 60 / 768), 7.0rem);
        margin-bottom: 7.0rem;
        line-height: 1.2;
        font-weight: 500;
        overflow: hidden;
        width: fit-content;
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
        overflow: hidden;
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
        line-height: 1;
        font-family: 'degular-display', sans-serif;

    }

    /* WORKS */
    .works {
        padding-bottom: 100px;
    }

    .works .works__list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
        margin-bottom: 60px;
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
        margin-bottom: 60px;
    }
    .about .inner {
        display: flex;
        flex-direction: row-reverse;
        padding: 40px;
        margin: 0 auto;
        gap: 60px;
        width: 100%;
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
    }

    .about .inner .mainTitle {
        font-size: max(calc(100vw * 30 / 768), 5.0rem);
    }

    .about .inner .about__texts p {
        margin-bottom: 6rem;
    }

    .links .inner {
        padding: 40px;
        margin: 0 auto;
        width: 100%;
    }

    .links .inner .link__list {
        display: flex;
        gap: 4em;
        margin: 0 auto;
        width: fit-content;
    }

    .links .inner .link__list .link a {
        display: flex;
        align-items: center;
        font-size: 1.6rem;
        font-weight: 500;
        gap: 10px;
        transition: .4s;
    }

    .links .inner .link__list .link a:hover {
        opacity: .5;
    }

    .links .inner .link__list .link a img {
        width: 2em;
    }

    @media screen and (max-width: 768px) {

        .subTitle {
            font-size: 2.0rem
        }

        .mainVisual {
            margin-bottom: 60px;
        }

        .mainVisual .mainTitle {
            font-size: 13.2vw;
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
