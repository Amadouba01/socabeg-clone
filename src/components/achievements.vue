<template>
    <div>
        <section id="achievements">
            <div class="container">
                <div class="title">
                    <appTitle title="Réalisations" />
                </div>
                <div class="card-content">
                    <div class="card-item">
                        <div class="image">
                            <a href="#">
                                <img src="../assets/images/rea1.jpeg" alt="">
                            </a>
                        </div>
                        <div class="titre">
                            <a href="#">
                                <h2>Construction de logements aux Almadies </h2>
                            </a>
                        </div>
                        <div class="details">
                            <viewdetails />
                        </div>
                    </div>
                    <div class="card-item">
                        <div class="image">
                            <a href="#">
                                <img src="../assets/images/rea2.webp" alt="">
                            </a>
                        </div>
                        <div class="titre">
                            <a href="#">
                                <h2>Construction de plus de 1000 logements test</h2>
                            </a>
                        </div>
                        <div class="details">
                            <viewdetails />
                        </div>
                    </div>
                    <div class="card-item">
                        <div class="image">
                            <a href="#">
                                <img src="../assets/images/rea3.webp" alt="">
                            </a>
                        </div>
                        <div class="titre">
                            <a href="#">
                                <h2>Viabilisation de plus de 4000 parcelles </h2>
                            </a>
                        </div>
                        <div class="details">
                            <viewdetails />
                        </div>
                    </div>
                    <div class="card-item">
                        <div class="image">
                            <a href="#">
                                <img src="../assets/images/rea4.webp" alt="">
                            </a>
                        </div>
                        <div class="titre">
                            <a href="#">
                                <h2>Construction de plus de 1000 logements </h2>
                            </a>
                        </div>
                        <div class="details">
                            <viewdetails />
                        </div>
                    </div>
                    <div class="card-item">
                        <div class="image">
                            <a href="#">
                                <img src="../assets/images/rea3.webp" alt="">
                            </a>
                        </div>
                        <div class="titre">
                            <a href="#">
                                <h2> 1992-1994: Construction de Guérite dans les régions pour le compte de la SONATEL
                                </h2>
                            </a>
                        </div>
                        <div class="details">
                            <viewdetails />
                        </div>
                    </div>
                    <div class="card-item">
                        <div class="image">
                            <a href="#">
                                <img src="../assets/images/rea6.webp" alt="">
                            </a>
                        </div>
                        <div class="titre">
                            <a href="#">
                                <h2>124 logements à la cité Socabeg Rufisque II</h2>
                            </a>
                        </div>
                        <div class="details">
                            <viewdetails />
                        </div>
                    </div>
                </div>
                <div class="voirPlus">
                    <a href="#">
                        <h2>Voir plus de réalisations</h2>
                    </a>
                    <span class="miniLogo">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"
                            data-v-04928fba="">
                            <path d="M8.4318 5.22794L21.9697 12.9561L8.50802 20.8162L8.4318 5.22794Z" fill="#01418A"
                                data-v-04928fba=""></path>
                            <path d="M5.82442 7.7505L14.8203 12.8858L5.87507 18.1088L5.82442 7.7505Z" fill="#CD0B11"
                                data-v-04928fba=""></path>
                        </svg>
                    </span>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import appTitle from "@/components/appTitle.vue"
import viewdetails from "@/components/viewdetails.vue"
export default {
    components: {
        appTitle,
        viewdetails
    }

}
</script>

<style lang="scss" scoped>
#achievements {
    .container {
        .card-content {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            padding: 10px;
            gap: 20px;
            position: relative;

            .card-item {
                grid-column-end: span 4;
                display: flex;
                flex-direction: column;

                .image {
                    img {
                        min-height: 322px;
                        max-height: 322px;
                        max-width: 100%;
                        height: auto;
                        display: block;
                        width: 100%;
                        object-fit: cover;
                    }
                }
            }
        }

        .voirPlus {
            border: 2px solid;

            a {
                text-align: center;
                text-decoration: none;
                color: red;

                h2 {
                    justify-content: center;
                    align-items: center;

                }
            }
        }
    }
}

a {
    text-decoration: none;
}
</style>