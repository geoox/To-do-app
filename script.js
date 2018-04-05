
let htmlGenerator='';


document.getElementById('addButton').addEventListener('click',function(){
    var value=document.getElementById('inputer').value;

    htmlGenerator+=`<li class="list-group-item">${value}</li>`;
    $('.list-group').append(htmlGenerator);
    htmlGenerator='';
})

