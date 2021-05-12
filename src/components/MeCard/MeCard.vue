<template>
    <div class="meCard__wrapper">
        <div class="meCard">
            <div class="meCard__imageSection">
                
            </div>
            <div class="meCard__info">
                <div class="meCard__baseStats">
                    <ul>
                        <li>Name: Raphael Sundermann</li>
                        <li>Born: 12-22-1994</li>
                        <li>Living in: 48485 Neuenkirchen, NRW - Germany</li>
                        <li>Status: Looking for a Job</li>
                    </ul>
                </div>
                <div class="meCard__tags">
                    <div class="os">
                        <base-tag type="os" content="Windows"></base-tag>
                        <base-tag type="os" content="Linux"></base-tag>
                    </div>
                    <div class="backend">
                        <base-tag type="backend" content="PHP 7"></base-tag>
                        <base-tag type="backend" content="Symphony"></base-tag>
                        <base-tag type="backend" content="laravel"></base-tag>
                        <base-tag type="backend" content="NodeJS"></base-tag>
                        <base-tag type="backend" content="Java"></base-tag>
                        <base-tag type="backend" content="C#"></base-tag>
                        <base-tag type="backend" content="Python"></base-tag>
                    </div>
                    <div class="frontend">
                        <base-tag type="frontend" content="VUE/VUECLI"></base-tag>
                        <base-tag type="frontend" content="VUE-Router"></base-tag>
                        <base-tag type="frontend" content="VUEX"></base-tag>
                        <base-tag type="frontend" content="javaScript"></base-tag>
                        <base-tag type="frontend" content="ReactJS"></base-tag>
                        <base-tag type="frontend" content="Angular"></base-tag>
                    </div>
                    <div class="software">
                        <base-tag type="software" content="PHPStorm"></base-tag>
                        <base-tag type="software" content="VS-Code"></base-tag>
                        <base-tag type="software" content="GitHub"></base-tag>
                        <base-tag type="software" content="Unity3D"></base-tag>
                    </div>
                </div>
                <div class="meCard__text">
                    <p class="branding__color__bright "> Hey there!</p>
                    <p>I am <span class="branding__color__bright">Raphael Sundermann</span> a developer with 4 years professional experience! I started to learn development at the age of 13. Back then I worked on simple Websites and CMS projects. I love software and I am constantly learning new stuff!</p>
                </div>
            </div>
        </div>    
    </div>
</template>

<style scoped>

.meCard__wrapper {
    position: relative;
    display:flex;
    justify-content: center;
    height: 40rem;
}

.meCard {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: -3rem;
    background-color: rgba(43, 43, 43, 1);
    /*border-radius: 6rem;*/
    padding: 1rem;
}

.meCard__imageSection {
    background-image: url("../../assets/me.jpg");
    background-size: cover;
    background-position: center;
    width: 10rem;
    height: 10rem;
    border-radius: 100%;
}

.meCard__info {
    display:flex;
    margin: 0 1rem 0 1rem;
}

.meCard__baseStats {
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    padding: 0 1rem 0 1rem;
}

.meCard__baseStats > ul {
    list-style: none;
    padding: 0;
}

.os {
    display: flex;
    gap: 0.2rem;
    grid-area: OS;
}

.backend {
    display: flex;
    gap: 0.2rem;
    grid-area: Backend;
}

.frontend {
    display: flex;
    gap: 0.2rem;
    grid-area: Frontend;
}

.software {
    display: flex;
    gap: 0.2rem;
    grid-area: Software;
}

.meCard__tags {
    display: grid;
    grid-template-areas: 
    'OS'
    'Backend'
    'Frontend'
    'Software';
    grid-gap: 1rem;
    border-right: 1px solid #ccc;
    padding: 0 1rem 0 1rem;
}

.meCard__text {
    padding: 0 0 0 1rem;
    max-width: 30rem;
}

@media only screen and (max-width: 1722px) {
    .meCard__text {
        max-width: 20rem;
    }
}

@media only screen and (max-width: 1561px) {
    .meCard__text {
        display: none;
    }

    .meCard__tags {
        border-right: none;
        padding: 0 0 0 1rem;
    }
}

@media only screen and (max-width: 1224px) {
    .meCard__info {
        display: block;
    }

    .meCard__baseStats {
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #ccc;
    }

    .meCard__tags {
        margin-top: 1rem;
    }
}

@media only screen and (max-width: 961px) {
    .meCard__wrapper {
        height: auto;
    }

    .meCard {
        position: relative;
    }
}

@media only screen and (max-width: 858px) {
    .meCard {
        display: block;
    }

    .meCard__imageSection {
        margin: 1rem auto;
    }
    
    .meCard__baseStats {
        text-align: center;
    }

}

@media only screen and (max-width: 700px) {
    .meCard__tags {
        padding: 0;
    }

    .os, .backend, .frontend, .software {
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 auto;
    }

}
</style>