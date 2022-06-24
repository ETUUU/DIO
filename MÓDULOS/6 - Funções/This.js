const Astra = {
    Modelo: "Astra",
    Ano: 2011,
    Cor: "Branca",
};
const Civic = {
    Modelo: "Civic",
    Ano: 2009,
    Cor: "Preta",
};
const Omega = {
    Modelo: "Omega",
    Ano: 1992,
    Cor: "Bordô",
};


function Ipva(ano) {

    if (ano <= (this.Ano + 20)) {
        return `O carro ${this.Modelo} pagará IPVA em ${ano}.`;
    } 
    return `O carro ${this.Modelo} não pagará IPVA em ${ano}.`;
}

console.log(Ipva.call(Civic, 2031));