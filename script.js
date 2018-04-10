
let htmlGenerator='';
let i=0;


document.getElementById('addButton').addEventListener('click',function(){
    var value=document.getElementById('inputer').value;

    htmlGenerator+=`
    <li class="list-group-item">${value}
    <div class="btns">
        <img src="resources/delete.png" id="delete-btn${i}">
        <img src="resources/check.png" id="done-btn${i}">
    </div>
    </li>`;

    if(value){
        $('.list-group').append(htmlGenerator);
        document.getElementById('inputer').value='';
        htmlGenerator='';
        
        document.getElementById('delete-btn'+i).addEventListener('click',function(){
            this.parentElement.parentElement.remove();
        })

        document.getElementById('done-btn'+i).addEventListener('click',function(){
            this.src="resources/check-all.png";
        })

        i=i+1;
        value='';
    }
    else{
        htmlGenerator='';
    }

});





