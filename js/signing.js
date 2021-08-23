


// 
function signin(getUserInput){
    const inForamtion = document.getElementById(getUserInput);
    const value = inForamtion.value;
    return value;

}


document.getElementById('sumbit-btn').addEventListener('click',function(){
    const userInputname = signin('userInputname');
const useerInputType = signin('accountInputtype');
const userInputid = signin('personalInputid');
const userInputpassword = signin('Inputpassword');

    
            window.location.href='user.html';
        })

