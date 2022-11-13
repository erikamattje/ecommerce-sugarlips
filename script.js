const items = [
    {
        id: 0,
        nome: 'Kit 1',
        img: './images/produto1.jpg',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'Kit 2',
        img: './images/produto3.jpg',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'Kit 3',
        img: './images/produto5.jpg',
        quantidade: 0
    },

    {
        id: 3,
        nome: 'Kit 4',
        img: './images/produto4.jpg',
        quantidade: 0
    },
    {
        id: 4,
        nome: 'Kit 5',
        img: './images/produto6.jpg',
        quantidade: 0
    },
    {
        id: 5,
        nome: 'Kit 6',
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
            <a key="`+val.id+`" href="#"> Adicionar ao carrinho!</a>
        </div>

        `;

    })
}

inicializarLoja();

atualizarCarrinho = () => {
    console.log(items);
}

var links = document.getElementsByTagName('a');

for(var i=0; i<links.length; i++){
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}