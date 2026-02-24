'use strict'

function adicionarProduto(){
    const produto = document.getElementById('inp-produto')
    const lista = document.getElementById('list')

    const span = document.createElement('span')
    if(produto.value != ''){
        span.textContent = produto.value
        span.className = "bg-blue-100 p-2"
        produto.value = "" 
    
        lista.appendChild(span)
    }else{
        window.alert('Preencha todos os campos!!')
    }
    
}