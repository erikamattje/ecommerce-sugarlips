const items = [
    {
        id: 0,
        nome: 'Rímel Big Bang',
        img: './images/produto1.jpg',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'Batom Líquido Finérrimo',
        img: './images/produto3.jpg',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'Creme Nutri',
        img: './images/produto5.jpg',
        quantidade: 0
    },

    {
        id: 3,
        nome: 'Liptint Finérrimo',
        img: './images/produto4.jpg',
        quantidade: 0
    },
    {
        id: 4,
        nome: 'Delineador + Demaquiliante',
        img: './images/produto6.jpg',
        quantidade: 0
    },
    {
        id: 5,
        nome: 'Kit Skin Care',
        img: './images/produto7.jpg',
        quantidade: 0
    },
]

inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');

    items.map( (val)=> {
        containerProdutos.innerHTML+= `
        
        <div class="produto-single">
            <img src="`+val.img+`" />
            <p> `+val.nome+` </p>
            <a key="`+val.id+`"><button class="button">Adicionar ao carrinho</button><a/>
        </div>

        `;

    })
}

inicializarLoja();


atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
    items.map((val)=> {
        if (val.quantidade > 0) {
            containerCarrinho.innerHTML += `
            
            <p> `+val.nome+` | Quantidade: `+val.quantidade+`</p>
            <hr>
            `;
        }
                    
        
    })
}

var links = document.getElementsByTagName('a');

for(var i=0; i< links.length; i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}