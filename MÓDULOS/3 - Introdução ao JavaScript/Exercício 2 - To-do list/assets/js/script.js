let task = document.querySelector('#task');
let lista = document.querySelector('#lista');
let chk;



function add(){

    tar();
    document.getElementById('task').value='';
};

task.addEventListener('keypress', (e) => {

    if(e.keyCode == 13){
        add();
    }
});

function tar(){
    let li = document.createElement("li");
    li.classList.add('.ellipses');
    
    chk = document.createElement("input");
    chk.type = "checkbox";


    li.innerHTML = task.value;

    lista.appendChild(chk);
    lista.appendChild(li);

    return li;

}




    
