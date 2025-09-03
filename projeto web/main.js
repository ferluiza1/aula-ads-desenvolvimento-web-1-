function openModal(){
    const modal = document.querySelector(".modal")
    modal.style.display = "flex"
}

function closeModal(){
    const modal = document.querySelector(".modal")
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
        <div class="card">
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
                        </div>
                    </div>

    `
    const cards = document.querySelector(".cards")
    cards.innerHTML += card
    closeModal()
}