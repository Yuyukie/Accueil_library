newBook = {
    title : "a",
    auteur : "Piou",
    nbPages : 50 ,
}

newBook1 = {
    title : "c",
    auteur : "Piou",
    nbPages : 50 ,
}

let tabLivre = [newBook,newBook1]

class  book { constructor ( t , a , nbP) { 
    this.title = t ;
    this.auteur = a ;
    this.nbPages = nbP;
    }
}

function  addBook ()  {
    try {
        takeInformationSaisie("titre")
        takeInformationSaisie("auteur")
        takeInformationSaisie("pages")
        confirmPages(pages.value)
        researchIfExistSaisie([titre.value] ,[auteur.value], tabLivre)
        let crea = createBook(titre.value,auteur.value,pages.value);
        tabLivre.push(crea);
        compare(tabLivre) 
        console.log(tabLivre)
    } catch {
        console.error() ;
        return false
        }
}

function launchResearch(){ 
    try {
        takeInformationResearch("titreResearch")
        takeInformationResearch("auteurResearch") 
    }

    catch {
        console.error() ;
        return false
    }

    if(researchIfExistResearch([titreResearch.value] ,[auteurResearch.value], tabLivre) === true){
        alert("Nous possédons ce livre")
    
    } else return alert("Nous ne possédons pas ce livre")

}

function createBook (value1,value2,value3){
    let newBook = new book (value1,value2,value3)   
    return newBook
}

function confirmSaisie (fieldSaisie){ 
    if (fieldSaisie === '') { 
        throw alert("Données manquantes")
    } else return true
}

function confirmPages (fieldPages){ 
    pages.value = parseInt (pages.value)
    if ( isNaN(fieldPages)|fieldPages === '' ) { 
        throw alert("veulliez saisir le nombre de pages")
    } else return true
}

function researchIfExistResearch ([fieldTitre],[fieldAuteur], tab) {
    for (let aBook of tab){
        if (fieldTitre === aBook.title && fieldAuteur === aBook.auteur ){
            return alert ("nous possédons ce livre")
        } else if (fieldTitre === aBook.title && fieldAuteur !== aBook.auteur ) {

        } else (fieldTitre !== aBook.title && fieldAuteur === aBook.auteur )
    } 
}

function researchIfExistSaisie ([fieldTitre],[fieldAuteur], tab) {
    for (let aBook of tab){
        if (fieldTitre === aBook.title && fieldAuteur === aBook.auteur ){
        throw alert("le livre est déjà referencé")
        }
    } 
}
function takeInformationResearch (id){ 
    fieldId = document.getElementById(id).value;
}

function takeInformationSaisie(id){
    fieldId = document.getElementById(id).value;   
        if(confirmSaisie (fieldId) !== true){
             throw alert("donne manquante")
             }
          return false
         }

function compare (tab){
    tabLivre.sort (function compare (a,b){
        if(a.title < b.title)
        return -1;
        if(a.nom > b.title)
        return 1 ;
        return 0
     });
}

function modal (id){
    id =  document.getElementById ("hidden")
    id.style.visibility = id.style.visibility == "visible" ? "hidden" : "visible" ;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

let tabRandomInt = [];
function createRandomTab (b){ 
    
  for (let i =0 ; i <= b ; i++){
    let j = getRandomIntInclusive( 0 , b)
    tabRandomInt.push(j)
  }
} 
/*  fonction recursive + affichage
function compareInt (){
    tabRandomInt.sort (function compareInt (a,b){
        if(a < b)
        return -1;
        if(a > b)
        return 1 ;
        return 0
     });
}

  createRandomTab (50);
  compareInt ();
  console.log(tabRandomInt)

  const numberResearch = (array ,  value , start , end ) => { 
        if (start > end) {
            return false;
        }
    
        let mid = Math.floor ((start + end)/2);
        if (array[mid] === value) { 
            return array.indexOf(value);
        }
        if ( value < array[mid]) {
            return numberResearch(array ,  value , start , mid-1 )

        } else {
            return numberResearch(array ,  value , mid+1, end )
        }
        
    }

numberResearch ( tabRandomInt, 18 , 0 ,50 );
    let index = numberResearch ( tabRandomInt, 18 , 0 ,50 );


if (numberResearch ( tabRandomInt, 18 , 0 ,50 ) === false ) {
        tabRandomInt.push(18)
        compareInt(tabRandomInt)
        let newIndex = tabRandomInt.indexOf(18)
        console.log(tabRandomInt)
    alert ("la valeur n'existe pas dans ce tableau mais on la ajouter a l index"+ ' ' + newIndex) 
   } else alert ('la valeur existe' + ' ' + index)
*/


