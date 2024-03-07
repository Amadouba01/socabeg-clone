<template>
    <div>

        <section id="whyUs">
            <div class="grid-container">
                <div class="whyUs-leftpart">
                    <div class="whyUs-title">
                        <div class="minilogo">
                            <svg width="37" height="34" viewBox="0 0 37 34" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.468 0.936157L34.785 25.734H6.15089L20.468 0.936157Z" fill="#01418A"></path>
                                <path d="M13.7766 0.936157L25.7075 21.6011H1.84571L13.7766 0.936157Z" fill="#CD0B11"></path>
                            </svg>
                        </div>
                        <h2>Pourquoi socabeg ?</h2>
                    </div>
                    <div class="whyUs-description">
                        <p>SOCABEG est une entreprise sénégalaise de promotion immobilière et de btp, leader dans la
                            réalisation de logement social au Sénégal. Société anonyme au capital de 1 milliard de
                            francs CFA créée en 1986, SOCABEG a pour volonté d’améliorer le cadre de vie des Sénégalais
                            en leur proposant des programmes immobiliers innovants de qualité à un prix attractif et
                            adapté. test</p>

                        <ul>
                            <li>Viabilisation de terrain</li>
                            <li>Aménagement de site de construction</li>
                            <li>Construction de logements et d’immeubles commerciaux</li>
                            <li>Commercialisation de logements</li>
                        </ul>
                    </div>
                </div>
                <div class="whyUs-rightpart">
                    <img src="../assets/images/whyUS.webp" alt="">
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#whyUs {
    .grid-container {
        display: flex;
        align-items: center;
        flex-direction: row;
        align-content: center;

        .whyUs-leftpart {
            display: flex;
            flex-direction: column;
            justify-content: center;

            .whyUs-title {
                h2 {
                    font-size: 1.953rem;
                    font-weight: 800;
                }
            }

            .whyUs-description {
                p {
                    font-size: 16px;
                    font-weight: 400;
                    --tw-text-opacity: 1;
                    color: rgb(59 71 79 / var(--tw-text-opacity));
                }
            }

        }

        .whyUs-rightpart {
            img {
                max-width: 100%;
                height: auto;
                display: block
            }
        }
    }
}
</style>