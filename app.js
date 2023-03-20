function search(){
    let word = document.getElementById('text').value;

    let resultat = document.getElementById("resultat");

    if (word.length != 0) {
        let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;

        fetch(url).then(Response =>{
            Response.json.then(data =>{
                try {
                    
                    for (let words of data) {
                        let definition = words.meaning[0].definitions[0].definition
                        resultat.innerHTML = "<p class='res'><span>Definition :</span></br>" + definition +"</p>"
                        
                    }
                } catch (error) {
                    resultat.innerHTML = "<p class='res'>Aucune definition pour ce mot</p>"
                }
            })
        })
    }else{
        resultat.innerHTML = "<p class='res'> Veillez remplir le champ</p>"
    }
}