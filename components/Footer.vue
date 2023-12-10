<template>
    <footer class="siteFooter">
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
                            <img src="../assets/images/designRoom.png" alt="デザインのへや">
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
        <div class="inner">
            <NuxtLink to="/">
                <figure class="siteFooter__logo"><img src="../assets/logo.svg" alt="TAKUYA FUJIKAWA PORTFOLIO"></figure>
            </NuxtLink>
            <small>&nbsp;TAKUYA FUJIKAWA PORTFOLIO all right reserved.</small>
        </div>
    </footer>
</template>
<style>
.siteFooter {
    width: 100%;
    font-size: 1.4rem;
}

.siteFooter .siteFooter__logo img {
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
}

.siteFooter .inner {
    text-align: center;
    padding: 20px;
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
        padding: 20px;
        border-width: 1px 0px 1px 0;
        border-color: #333;
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
</style>