const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []

//Criado para que não suma os elementos da página ao ser atualizada. Buscando os dados do localStorage e criando os elementos

itens.forEach( (elemento) => {
    criarElemento(elemento)
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

//Verificar se o elemento já existe na minha lista.
    const existe = itens.find( elemento => elemento.nome === nome.value)

        const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value

    }

        if (existe) {
            itemAtual.id = existe.id
           
           atualizaElemento(itemAtual) 
        }else {
            itemAtual.id = itens.length
            criarElemento(itemAtual)


              itens.push(itemAtual)
        }
   


        localStorage.setItem("itens", JSON.stringify(itens))

    nome.value =""
    quantidade.value =""

})

function criarElemento(item){
  
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += item.nome

    lista.appendChild(novoItem)
}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}