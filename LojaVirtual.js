class LojaVirtual {
    constructor() {
      this.produtos = [];
      this._carrinho = [];
    }
  
    cadastrarProduto(produto) {
      this.produtos.push(produto);
    }
  
    get carrinho() {
      return this._carrinho;
    }
  
    set carrinho(novoCarrinho) {
      this._carrinho = novoCarrinho;
    }
  
    adicionarAoCarrinho(produto) {
      this._carrinho.push(produto);
    }
  
    calcularValorTotal() {
      return this._carrinho.reduce((total, produto) => total + produto.preco, 0);
    }
  
    aplicarDesconto(desconto) {
      const valorTotal = this.calcularValorTotal();
      const descontoAplicado = valorTotal * (desconto / 100);
      return valorTotal - descontoAplicado;
    }
  }
  
  // Exemplo de uso da classe LojaVirtual
  const minhaLoja = new LojaVirtual();
  
  const produto1 = { nome: "Camiseta", preco: 20 };
  const produto2 = { nome: "Calça", preco: 30 };
  
  minhaLoja.cadastrarProduto(produto1);
  minhaLoja.cadastrarProduto(produto2);
  
  minhaLoja.adicionarAoCarrinho(produto1);
  minhaLoja.adicionarAoCarrinho(produto2);
  
  console.log("Valor total da compra antes do desconto: $" + minhaLoja.calcularValorTotal());
  
  const desconto = 10; // 10% de desconto
  const valorFinal = minhaLoja.aplicarDesconto(desconto);
  
  console.log("Valor total da compra com " + desconto + "% de desconto: $" + valorFinal);

  console.log();
  
