<template>
  <div>
    <section id="searchSection">

      <div class="searchSection container">

        <div class="text">
          <div class="title">
            <h1>Leader dans la réalisation de <br> logement social au Sénégal</h1>
          </div>
          <div class="desc">
            <p>SOCABEG a pour volonté d’améliorer le cadre de vie des Sénégalais en leur proposant des
              <br>

              programmes immobiliers innovants de qualité à un prix attractif et adapté
            </p>
          </div>
        </div>
        <div class="searchForm">
          <p>Rechercher un bien immobillier</p>
          <div class="form">
            <div class="grid">
              <div class="cell-container">
                <!-- typeOfproperty -->
                <div class="card propriete">
                  <label class="my_input_label" for="typeOfproperty">Type de propriété</label>
                  <select class="my_input_select" id="typeOfproperty">
                    <option value="" class="text">
                      Choisir un type de propriété
                    </option>
                    <option value="f3-houses">
                      Villas F3
                    </option>
                    <option value="f5-houses">
                      Villas F5
                    </option>
                    <option value="shopping-center">
                      Centre Commerce
                    </option>
                    <option value="appartement">
                      Appartement
                    </option>
                  </select>
                </div>
                <!-- typeOfproperty -->

                <!-- BudgetBar  -->
                <div class="card budget">
                  <label for="budget" class="my_input_label Budget">Budget maximum</label>
                  <div class="bdg">
                    <input name="budget" type="text" placeholder="Votre budget maximum" class="bdg2">
                    <span class="sub_text">FCFA</span>
                  </div>
                </div>
                <!-- BudgetBar  -->

                <!-- Localite Bar -->
                <div class="card localite">
                  <label class="my_input_label" for="typeOflocality">Type de localité</label>
                  <select class="my_input_select" id="typeOflocality">
                    <option value="" class="text">
                      Choisir une localité
                    </option>
                    <option value="tivaouane-peulh">
                      Tivaouane Peulh
                    </option>
                    <option value="almadies-route-de-ngor">
                      Almadies route de Ngor
                    </option>
                    <option value="darou-salam">
                      Darou Salam
                    </option>
                    <option value="dakar-almadies">
                      Dakar, Almadies
                    </option>
                  </select>
                </div>

                <!-- Localite Bar -->

                <!-- submit button -->
                <div class="card submitButton">
                  <label class="my_input_label" for="typeOflocality">&nbsp;</label>

                  <button type="submit" class="recherche">
                    <span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                          stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M22 22L20 20" stroke="white" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round"></path>
                      </svg>
                    </span>
                    <span class="searchButton_label">Rechercher</span>
                  </button>
                </div>

                <!-- submit button -->

              </div>
            </div>
          </div>
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
#searchSection {
  padding: 5rem 0;


  background-image: url(./src/assets/images/bgBlue.png );
  background-position: center center;
  background-size: cover;

  .text {
    text-align: center;

    .title {
      h1 {
        color: #001732;

        font-family: "Poppins", sans-serif !important;
        font-size: 48px;
        font-weight: 800;
        line-height: 50px;
      }

      p {
        font-size: 16px;
      }
    }

    .desc {
      p {
        color: #001732;
        margin-bottom: 20px;
        font-weight: 400;
      }
    }
  }

  .searchForm {
    p {
      font-size: 16px;
      text-align: center;
    }

    .form {
      background: white;


      .grid {
        justify-content: center;

        .cell-container {
          display: grid;

          grid-template-columns: repeat(12, 1fr);
          // justify-items: center;
          align-items: center;
          padding: 2rem;

          .card {
            display: flex;
            grid-column-end: span 3;
            flex-direction: column;
            align-content: center;
            margin: 0 20px;

            .my_input_label {
              color: #001732;
              display: block;
              margin-bottom: 10px;
              font-size: 13px;
              font-weight: 700;
              text-transform: uppercase;
            }

            .my_input_select {
              padding: 0.75rem;
              border: 1px solid #C8DAE4;
            }

            &.budget {
              .bdg {
                padding: 0.68rem;
                border: 1px solid #C8DAE4;
                display: flex;
                justify-content: space-between;

                input {
                  border: none;

                  &:focus-visible {
                    border: none !important;
                    outline: none;

                  }
                }

                .sub_text {
                  color: #01418A;
                  font-size: 14px;
                }
              }
            }

            &.submitButton {
              .recherche {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 60%;
                gap: 0.75rem;
                border-radius: 0px;
                border: none;
                background-color: rgb(227 13 23 / 1);
                padding: 0.60rem;
                cursor: pointer;

                .searchButton_label {
                  color: white;
                  font-size: 16px;
                }
              }
            }
          }
        }

      }
    }
  }
}

@media (max-width: 1024px) {

  #searchSection {


    .searchForm {
      p {
        text-align: center;
        font-size: 2.441em;
      }

      .form {


        .grid {
          justify-content: center;

          .cell-container {
            align-items: normal;
            display: flex;
            flex-direction: column;
            gap: 20px;

            .card {


              &.submitButton {
                .recherche {
                  width: 30%;

                }
              }
            }
          }

        }
      }
    }
  }


}
</style>
