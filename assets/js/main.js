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

    console.log(existe)

       const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
   }

criarElemento(itemAtual)


        itens.push(itemAtual)
        localStorage.setItem("itens", JSON.stringify(itens))

    nome.value =""
    quantidade.value =""

})

function criarElemento(item){
  
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += item.nome

    lista.appendChild(novoItem)
}
