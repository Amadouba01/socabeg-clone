<template>
    <div>

        <section id="whyUs">
            <div class="container">
                <div class="whyUs-content">
                    <div class="whyUs-leftpart">
                        <appTitle title="Pourquoi Socabeg?" />
                        <div class="whyUs-description">
                            <p>SOCABEG est une entreprise sénégalaise de promotion immobilière et de btp, leader dans la
                                réalisation de logement social au Sénégal. Société anonyme au capital de 1 milliard de
                                francs CFA créée en 1986, SOCABEG a pour volonté d’améliorer le cadre de vie des
                                Sénégalais
                                en leur proposant des programmes immobiliers innovants de qualité à un prix attractif et
                                adapté. test</p>

                            <ul>
                                <li>
                                    <div class="marker">
                                        <img src="/src/assets/images/customUl.svg" alt="">
                                    </div>
                                    <div class="textp">Viabilisation de terrain</div>
                                </li>
                                <li>
                                    <div class="marker">
                                        <img src="/src/assets/images/customUl.svg" alt="">
                                    </div>
                                    <div class="textp">Aménagement de site de construction</div>
                                </li>
                                <li>
                                    <div class="marker">
                                        <img src="/src/assets/images/customUl.svg" alt="">
                                    </div>
                                    <div class="textp">Construction de logements et d’immeubles commerciaux</div>
                                </li>
                                <li>
                                    <div class="marker">
                                        <img src="/src/assets/images/customUl.svg" alt="">
                                    </div>
                                    <div class="textp">Commercialisation de logements</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="whyUs-rightpart">
                        <img src="../assets/images/whyUS.webp" alt="">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import appTitle from "@/components/appTitle.vue"
export default {
    components: {
        appTitle
    }

}
</script>

<style lang="scss">
#whyUs {
    .container {

        .whyUs-content {
            display: grid;
            grid-template-columns: repeat(12, 1fr);

            .whyUs-leftpart {
                grid-column-end: span 6;
                display: flex;
                flex-direction: column;
                justify-content: center;



                .whyUs-description {
                    p {
                        font-size: 16px;
                        font-weight: 400;
                        --tw-text-opacity: 1;
                        color: rgb(59 71 79 / var(--tw-text-opacity));
                        margin-top: 1.25rem;
                        margin-bottom: 1.25rem;
                        font-weight: 400;
                        line-height: 2.25rem;
                        --tw-text-opacity: 1;
                    }

                    ul {
                        padding: 0;
                        margin: 0;

                        li {
                            align-items: center;
                            padding-top: 0.25rem;
                            padding-bottom: 0.25rem;
                            position: relative;
                            display: flex;
                            gap: 10px;
                            margin: 0px;
                            font-size: 1rem;
                            font-weight: 600;
                            line-height: 1.25;
                            letter-spacing: -0.025em;
                            --tw-text-opacity: 1;
                        }
                    }
                }


            }

            .whyUs-rightpart {
                grid-column-end: span 6;

                img {
                    max-width: 100%;
                    height: auto;
                    display: block
                }
            }
        }

    }
}


@media (max-width: 1024px) {
    .container {

.whyUs-content {
    display: flex  !important;;
    flex-direction: column;

    .whyUs-leftpart{
        align-items: center;
        font-size: 70%;
    }
    
}
}
}
</style>