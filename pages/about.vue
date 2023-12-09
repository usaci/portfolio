<template>
        <main class="mainContents">
        <header class="article__header">
            <h1 class="article__title">私について</h1>
        </header>
        <section class="article__main">
            <div>
                <h2>私について</h2>
            </div>
        </section>
        <!-- <footer class="article__footer">

        </footer> -->
    </main>
</template>

<style>
    .article__header {

        padding: 12rem 4rem 4rem;
    }
    .article__header, .article__main {
       max-width: 1024px;
       margin: 0 auto;
       backdrop-filter: blur(10px);
       -webkit-backdrop-filter: blur(10px);
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


</style>