<template>
    <div class="footerCard__wrapper">
        <div class="footerCard">
            <div class="footerCard__imageSection">
                
            </div>
            <div class="footerCard__info">
                <div class="footerCard__baseStats">
                    <ul>
                        <li>Raphael Sundermann</li>
                        <li>raphael-sundermann@gmail.com</li>
                        <li>+49 176 735 880 18</li>
                    </ul>
                </div>
                <div class="footerCard__madeWith">
                    <h4>Made with:</h4>
                    <div class="footerCard__madeWith__tags">
                        <base-tag type="os" content="Linux"></base-tag>
                        <base-tag type="backend" content="NodeJS"></base-tag>
                        <base-tag type="frontend" content="VUE/VUECLI"></base-tag>
                        <base-tag type="frontend" content="VUE-Router"></base-tag>
                        <base-tag type="frontend" content="javaScript"></base-tag>
                    </div>
                </div>
            </div>
        </div>
        Copyright &#169; 2021 Raphael Sundermann raphael-sundermann.com
    </div>
</template>

<style scoped>

.footerCard__wrapper {
    position: relative;
    display:flex;
    justify-content: center;
    height: 10rem;
    width: 100%;
}

.footerCard {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: -5rem;
    background-color: rgba(43, 43, 43, 1);
    /*border-radius: 6rem;*/
    padding: 1rem;
}

.footerCard__imageSection {
    background-image: url("../assets/me_alt.jpg");
    background-size: cover;
    background-position: center;
    width: 10rem;
    height: 10rem;
    border-radius: 100%;
}

.footerCard__info {
    display:flex;
    margin: 0 1rem 0 1rem;
}

.footerCard__baseStats {
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    padding: 0 1rem 0 1rem;
}

.footerCard__baseStats > ul {
    list-style: none;
    padding: 0;
}

.footerCard__madeWith {
    text-align: center;
    padding: 0 0 0 1rem;
}

.footerCard__madeWith__tags {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.2rem;
}
</style>