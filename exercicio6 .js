function produto(nome,preco){
    this.nome = nome
    this.preco = preco
}
produto .prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 10));
};

produto .prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 10));
};

const p1 = new produto('Camiseta', 50);
p1.desconto(10);
p1.aumento(10);
console.log(p1);

