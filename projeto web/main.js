function openModal(modalId){
    const modal = document.querySelector(modalId)
    modal.style.display = "flex"
}

function closeModal(){
    const modal = document.querySelector(modalId)
    modal.style.display = "none"
}

function addTicker(event) {
   event.preventDefault()

    const ticker = event.target.ticker.value
    const bolsa = event.target.bolsa.value
    const valor = event.target.valor.value
    const ativos = event.target.ativos.value

    const total = valor * ativos

    const card = `
        <div class="card" onmouseenter="showButtons(event)" onmouseleave="hideButtons(event)">
            <div class="layout">
                <div class="palavra">
                    <h1>${ticker}</h1>
                    <h1>${bolsa}</h1>
                </div>
                            
                <div  class="valor">
                    <img src="img/setinha verde.png" alt="seta" height="35px">
                    <h2 style="font-size: 25px;"> <b>U$ ${valor}</b></h2>
                </div>

                <div class="desc">
                    <h3> Números ativos:${ativos}</h3>
                    <h3>Valor investido: U$ ${total} </h3>
                </div> 
                <div class="buttons">
                                <button type="button" onclick=""> editar</button>
                                <button type="button" onclick="deleteCard(event)"> excluir</button>
                </div>
            </div>
        </div>
    `
    const cards = document.querySelector(".cards")
    cards.innerHTML += card
    closeModal()
}

function showButtons(event){
    const card = event.target
    const buttons = card.querySelector(".buttons")
    buttons.style.display = "flex"
}

function hideButtons(event){
    const card = event.target
    const buttons = card.querySelector(".buttons")
    buttons.style.display = "none"
}

function deleteCard (event) {
    const buttonDelete = event.target
    const card = event.target.closest(".card")
    card.remove()
}


function openEditCard (event) {
    const buttonEdit =event.target
    const card = buttonEdit.closest (".card")

    const ticker = card.querySelector('hearder h2 ').innerText
    const inputEditTicker =document.getElementById('editticker')
    inputEditTicker.value= ticker

    const valor = card.querySelector('hearder h2 ').innerText
    const inputEditTicker =document.getElementById('editvalor')
    inputEditTicker.value= valor

    const ativos = card.querySelector('hearder h2 ').innerText
    const inputEditTicker =document.getElementById('editativo')
    inputEditTicker.value= ativos

    console.log (inputEditTicker)
    openModal('#edit')
}