

function populateUFs() {
    const ufselect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() ) /*( (res) => {return res.json()})*/
    .then( states => {
        for( const state of states ) {
            ufselect.innerHTML += `<option value="${state.id}">${state.nome}</option>` /* o sinal de mais subtitui a concatenação pderia ter sido feito ufselect.innerHTML = ufselect.innerHTML + `<option value="1">Valor</option> */        
        }
        
     } )
}

populateUFs()

function getCities(event){ /*pegue as cidades  */
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")
    
    const ufvalue = event.target.value
    
    const indexOfSelectedState = event.target.selectedIndex /** criamos um variavel indexOfSelectedState para receber o indeci do nosso vetor estados*/
    stateInput.value = event.target.options[indexOfSelectedState].text /** vamos pegar o valor do texto da posiçao da array(vetor ou  coleção) */

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufvalue}/municipios`
    citySelect.innerHTML = "<option value>Selecione a Cidade</option> "
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() ) /*( (res) => {return res.json()})*/
    .then( cities => {
        for( const city of cities ) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>` /* o sinal de mais subtitui a concatenação pderia ter sido feito ufselect.innerHTML = ufselect.innerHTML + `<option value="1">Valor</option> */        
        }
        citySelect.disabled = false /** desbloqueamos a opção --- tinhamos deixado esse campo input bloqueado e so ser aberto apos a escolha do estado,  */
        
     } )
}

document
    .querySelector("select[name=uf]") /** Toda vez que é trocado o uf a funçao cidades e chamada */
    .addEventListener("change", getCities)

    // Itens de coleta
    //pegar todos os <li>

    const itemsToCollect = document.querySelectorAll(".items-grid li")

    for(const item of itemsToCollect ){
        item.addEventListener("click", handSelectedItem)
    }

    const collectedItems = document.querySelector("input[name=items]")
    

    // vetor para adcionar e remover um valor ao clicar

    let selectedItems = []

    function handSelectedItem (event) {
        
        const itemLi = event.target

        //adicionar ou romeover um classe utilizando javascript
        itemLi.classList.toggle("selected")

        const itemId = itemLi.dataset.id

        //verificar se exite items selecionados se sim , pegar os items selecionados

        
        /*const alreadySelected = selectedItems.findIndex(function (item) { /*Essa função e anonima
            const itemFound = item == itemId  isso será true ou false
            return itemFound
        })*/




        const alreadySelected = selectedItems.findIndex( item => {
            const itemFound = item == itemId //isso sera true ou false
            return itemFound
        })
    
        //se ja estiver selecionado, tirar da seleção
        if(alreadySelected >= 0 ) {
            const filteredItems = selectedItems.filter( item => {
                const itemIsDifferent = item != itemId // 
                return itemIsDifferent
            })

            selectedItems = filteredItems

        }else {
            // se nao estiver selecionado adicionar a seleçõa
            selectedItems.push(itemId)
        }

         //atualizar os campos escondidos com os items selecionados
            
         collectedItems.value = selectedItems

    
        
    }

