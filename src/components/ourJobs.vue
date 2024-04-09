<template>
    <div>
        <section id="ourJobs">
          <div class="container">

            <div class="grid-container">
                <div class="the-title">
                    <appTitle title="Nos Métiers" />
                </div>

                <div class="card-content">
                    <div class="card one">
                        <div class="image">
                            <a href="#">
                         <img src="../assets/images/img1.webp" alt="">
                            </a>
                        </div>
                        <div class="date">
                            <p>18 nov. 2022</p>
                        </div>
                        <div class="Titre">
                            <a href="#">
                            <h2>Construction des logements immobilier</h2>
                            </a>
                        </div>
                        <div class="det">
                            <a href="#">
                                <viewdetails />
                            </a>
                        </div>
                    </div>
                    <div class="card two">
                        <div class="image">
                            <a href="#">
                            <img src="../assets/images/img2.webp" alt="">
                            </a>
                        </div>
                        <div class="date">
                            <p>24 nov. 2022</p>
                        </div>
                        <div class="Titre">
                            <a href="#">
                            <h2>Viabilisation de terrain</h2>
                            </a>
                        </div>
                        <div class="det">
                            <a href="#">
                                <viewdetails />
                            </a>
                        </div>
                    </div>
                    <div class="card three">
                        <div class="image">
                            <a href="#">
                            <img src="../assets/images/img3.webp" alt="">
                            </a>
                        </div>
                        <div class="date">
                            <p>21 déc. 2022</p>
                        </div>
                        <div class="Titre">
                            <a href="#">
                            <h2>Construction de logements et d’immeubles commerciaux..</h2>
                            </a>
                        </div>
                        <div class="det">
                            <a href="#">
                                <viewdetails />
                            </a>
                        </div>
                    </div>
                </div>

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
    },
    
}

</script>

<style lang="scss" scoped>
#ourJobs {
    background: #e4edf2;
    padding-top: 3rem;
    padding-bottom: 3rem;
    .container{
    .grid-container {
        .card-content {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            padding: 10px;
            gap: 20px;
            position: relative;

            .card {
                grid-column-end: span 4;
                display: flex;
                flex-direction: column;
                margin-right: 40px;
                width: 300px;
                
                .date {
                    p {
                        font-size: 0.8rem;
                        --tw-text-opacity: 1;
                        color: rgb(95 103 116 / var(--tw-text-opacity))
                    }
                }
                .titre{
                    h2{
                        font-size: 1.25rem;
                        font-weight: 700;
                        text-decoration: none;
                    }
                }

                img {
                    max-width: 100%;
                    height: auto;
                    display: block
                }

                a {
                    text-decoration: none;
                }
            }
        }
    }
}
}

@media (max-width: 1024px) {


    #ourJobs {
    
    .container{
    .grid-container {
        .card-content {
           overflow:scroll;
            .card{
            display: flow;
            
            }
            
    }
}
}
}}

</style>