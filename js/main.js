'use strict'

function adicionarProduto(){
    const produto = document.getElementById('inp-produto')
    const lista = document.getElementById('list')

    const span = document.createElement('span')
    span.textContent = produto.value
    span.className = "bg-blue-100 p-2" 
    
    lista.appendChild(span)
}