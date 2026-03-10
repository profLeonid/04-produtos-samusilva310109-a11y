'use strict'

const registrarProdutos = function(){
    const codigoProduto = document.getElementById('codigo').value
    const nomeProduto = document.getElementById('produto').value
    const qtdeProduto = document.getElementById('quantidade').value
    const listaDeProdutos = document.getElementById('lista')

    let listasProdutos = []

    

    let infoProduto = {nome: nomeProduto, cod: codigoProduto, quantidade: qtdeProduto}  
    listasProdutos.push(infoProduto)
    

    if(nomeProduto == '' || codigoProduto == '' || qtdeProduto == ''){
        window.alert('Preencha todos os campos')
    }else{


        listasProdutos.forEach(i => {
            const linhaProduto = document.createElement('div')
            linhaProduto.className = 'flex justify-between'

            const nameProduct = document.createElement('span')
            nameProduct.textContent = i.nome

            const codeProduct = document.createElement('span')
            codeProduct.textContent = i.cod

            const qtdeProduct = document.createElement('span')
            qtdeProduct.textContent= i.quantidade
            
            linhaProduto.appendChild(codeProduct)
            linhaProduto.appendChild(nameProduct)
            linhaProduto.appendChild(qtdeProduct)

            listaDeProdutos.className = 'grid grid-cols-[fr fr fr]'
            listaDeProdutos.appendChild(linhaProduto)

       
        })

        
    }

    document.getElementById('codigo').value = ' '
    document.getElementById('produto').value = ''
    document.getElementById('quantidade').value = ''
}