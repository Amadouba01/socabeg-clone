<template>
    <div>
      <section id="searchSection">

        <div class="searchSection">
          
          <div class="text">
            <div class="title">
            <h1>Leader dans la réalisation de <br> logement social au Sénégal</h1>
            </div>
            <div class="desc">
              <p>SOCABEG a pour volonté d’améliorer le cadre de vie des Sénégalais en leur proposant des <br>
                programmes immobiliers innovants de qualité à un prix attractif et adapté</p>  
            </div> 
          </div>
          <div class="searchForm">
            <p>Rechercher un bien immobillier</p>
            <div class="form">
                    <div  class="grid">
                        <div  class="cell">
                            <div  class="myInput">
                              
                <!-- typeOfproperty -->
                              <div class="card propriete">
                                  <label  for="typeOfproperty">Type de propriété</label>
                                 <select  id="typeOfproperty">
                                    <option  value="" disabled="disabled" selected="selected" class="text">
                    Choisir un type de propriété
                  </option> 
                  <option  value="f3-houses">
                    Villas F3
                  </option>
                  <option  value="f5-houses">
                    Villas F5
                  </option>
                  <option  value="shopping-center">
                    Centre Commerce
                  </option>
                  <option  value="appartement">
                    Appartement
                  </option>
                </select>
                                </div>
                <!-- typeOfproperty -->

              <!-- BudgetBar  -->
               <div class="card budget">
                <label  for="budget" class="Budget">Budget maximum</label> 
                <div  class="bdg">
                    <input  name="" type="text" placeholder="Votre budget maximum" class="bdg2"> 
                    <span  class="text">FCFA</span>
                </div>
               </div>
              <!-- BudgetBar  -->





                
                <!-- Localite Bar -->
                <div class="card localite">
                  <label  for="typeOflocality">Type de localité</label>
                <select  id="typeOflocality">
                   <option  value="" disabled="disabled" selected="selected" class="text">
                    Choisir une localité
                  </option> 
                  <option  value="tivaouane-peulh">
                    Tivaouane Peulh
                  </option>
                  <option  value="almadies-route-de-ngor">
                    Almadies route de Ngor
                  </option>
                  <option  value="darou-salam">
                    Darou Salam
                  </option>
                  <option  value="dakar-almadies">
                    Dakar, Almadies
                  </option>
                </select>
                </div>
                
                <!-- Localite Bar -->

<!-- submit button -->
<div class="card SubmitButton" >
  <button type="submit" class="Recherche" >
    <span > 
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" ></path>
         <path d="M22 22L20 20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" ></path>
        </svg>
      </span>
       <span class="SearchButton" >Rechercher</span>
  </button>
</div>

<!-- submit button -->


                </div>
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
  margin-left: auto;
  margin-right: auto;
  background-image: url(./src/assets/images/bgBlue.png );
  background-position: center center;
  background-size: cover;
  .text{
    text-align: center;
    .title{
      h1{
          font-family: "Poppins-Bold", sans-serif;
          font-size: 48px;
      }
      p{
        font-size: 16px;
      }
    }
  }
  .searchForm{
    p{
      font-size: 16px;
      text-align: center;
    }
    .form{
      
      
      .grid{
         
        
        justify-content: center;
        .cell{
          padding: 2rem;
          background-color: white;
          justify-items: center;
        .myInput{
          display: flex;
              justify-content: center;  
              gap: 30px;

            .card{
              display: flex;
              flex-direction: column;
              align-content: center;
              
            }
        }
          
        }
      }
    }
  }

}
</style>
