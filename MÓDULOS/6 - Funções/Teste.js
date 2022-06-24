
const MeuCarro = {
    Marca: "GM/CHEVROLET",
    Modelo: "Astra",
    Ano: "2007",
    Cor: "Preta",
    Quilometragem: 70000
};

function carro({Ano, Cor}) {
    return `Ano: ${Ano} Cor: ${Cor} Modelo: ${Modelo}`;
}

console.log(carro(MeuCarro));