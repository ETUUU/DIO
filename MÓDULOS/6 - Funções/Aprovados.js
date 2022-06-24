// v.01

const alunos = [

    {
        nome: 'Carlos',
        nota: 7,
        turma: '1B'
    },
    {
        nome: "José",
        nota: 4,
        turma: "2B"
    },
    {
        nome: "Pedro",
        nota: 3,
        turma: "2C",
    },
    {
        nome: "Caio",
        nota: 8,
        turma: "1C",
    },
    {
        nome: "Gabriel",
        nota: 5,
        turma: "2C",
    },
];

function selecao(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++){

        const {nota, nome} = arr[i];

        if (nota >= media) {
            aprovados.push(nome)
        }
    }
    return aprovados;

}

console.log(selecao(alunos, 6));

// v.02

// const alunos = [

//     {
//         nome: 'Carlos',
//         nota: 7,
//         turma: '1B'
//     },
//     {
//         nome: "José",
//         nota: 4,
//         turma: "2B"
//     },
//     {
//         nome: "Pedro",
//         nota: 3,
//         turma: "2C",
//     },
//     {
//         nome: "Caio",
//         nota: 8,
//         turma: "1C",
//     },
//     {
//         nome: "Gabriel",
//         nota: 5,
//         turma: "2C",
//     },
// ];

// function selecao(arr, media) {
//     let aprovados = [];

//     for (let i = 0; i < arr.length; i++){

//         if (arr[i].nota >= media) {
//             aprovados.push(arr[i].nome)
//         }
//     }
//     return `Os aprovados são: ${aprovados}`;

// }

// console.log(selecao(alunos, 6));