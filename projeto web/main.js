function openModal(modalId){
    const modal = document.querySelector(modalId)
    modal.style.display = "flex"
}

function closeModal(modalId){
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
        <div class="card" id="card-${ticker}" onmouseenter="showButtons(event)" onmouseleave="hideButtons(event)">
            <div class="layout">
                <div class="palavra">
                    <h2>${ticker}</h2>
                    <h3>${bolsa}</h3>
                </div>
                <div class="valor">
                    <img src="img/setinha verde.png" alt="seta" height="35px">
                    <h2 style="font-size: 1.5rem;"> <b>U$ <span>${valor}</span></b></h2>
                </div>
                <div class="desc">
                    <h2> Números ativos:<span>${ativos}</span></h2>
                    <h3>Valor investido: U$<span>${total}</span></h3>
                </div> 
                <div class="buttons">
                    <button type="button" onclick="openEditCard(event)"> Editar</button>
                    <button type="button" onclick="deleteCard(event)"> Excluir</button>
                </div>
            </div>
        </div>
    `
    const cards = document.querySelector(".cards")
    cards.innerHTML += card
    closeModal('#add')
}

function showButtons(event){
    const card = event.target.closest('.card')
    const buttons = card.querySelector(".buttons")
    buttons.style.display = "flex"
}

function hideButtons(event){
    const card = event.target.closest('.card')
    const buttons = card.querySelector(".buttons")
    buttons.style.display = "none"
}

function deleteCard (event) {
    const card = event.target.closest(".card")
    card.remove()
}

function editTicker(event){
    event.preventDefault()

    const idcard = event.target.idcard.value
    const ticker = event.target.editticker.value
    const bolsa = event.target.editbolsa.value
    const valor = event.target.editvalor.value
    const ativos = event.target.editativo.value

    const total = valor * ativos

    const cardStockEdit = document.getElementById(idcard)

    const h2Ticker = cardStockEdit.querySelector('div.palavra h2')
    h2Ticker.innerText = ticker
    
    const h3Bolsa = cardStockEdit.querySelector('div.palavra h3')
    h3Bolsa.innerText = bolsa

    const spanValor = cardStockEdit.querySelector('div.valor h2 span')
    spanValor.innerText = valor

    const spanAtivos = cardStockEdit.querySelector('div.desc h2 span')
    spanAtivos.innerText = ativos

    const spanTotal = cardStockEdit.querySelector('div.desc h3 span')
    spanTotal.innerText = total
    
    closeModal('#edit')
}

function openEditCard (event) {
    const buttonEdit = event.target
    const card = buttonEdit.closest(".card")

    const id = card.id
    const ticker = card.querySelector('div.palavra h2').innerText
    const bolsa = card.querySelector('div.palavra h3').innerText
    const valor = card.querySelector('div.valor h2 span').innerText
    const ativos = card.querySelector('div.desc h2 span').innerText
    
    const inputIdCard = document.getElementById('idcard')
    inputIdCard.value = id

    const inputEditTicker =document.getElementById('editticker')
    inputEditTicker.value = ticker
    
    const inputEditBolsa = document.getElementById('editbolsa')
    inputEditBolsa.value = bolsa

    const inputEditValor =document.getElementById('editvalor')
    inputEditValor.value = valor

    const inputEditAtivo =document.getElementById('editativo')
    inputEditAtivo.value = ativos

    openModal('#edit')
}