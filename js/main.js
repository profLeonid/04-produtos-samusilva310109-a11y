'use strict'

function adicionarProduto(){
    const codigo = document.getElementById('inp-codigo')
    const produto = document.getElementById('inp-produto')
    const quantidade = document.getElementById('inp-quantidade')
    const lista = document.getElementById('list')

    const span = document.createElement('span')
    if(produto.value != '' && codigo.value != '' && quantidade.value != ''){
        span.textContent = produto.value
        span.className = "bg-blue-100 p-2"
        produto.value = '' 
        codigo.value = ''
        quantidade.value = ''
    
        lista.appendChild(span)
        
    }
    else{
        window.alert('Preencha todos os campos!!')
    }
    
}