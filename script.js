
//ايه الفرق بين === & ==


// let title = document.querySelector('.title');
// let turn ='x'
// function game(id){
//     let element = document.getElementById(id);
//     if( turn === 'x'  && element.innerHTML == '') 
//     {
//         element.innerHTML = 'X'
//         turn = 'O'
//         title.innerHTML = 'O'

//     }else if (turn === 'o' && element.innerHTML == ''){
//         element.innerHTML = 'O';
//         turn = 'X';
//         title.innerHTML = 'X';

//     }
    

// }
// let title = document.querySelector('.title');
// let turn ='X';
// let squares = [];
// function winner(){
//     for(let i = 1; i<10; i++){

//        squares[i] = document.getElementById('item'+ i).innerHTML;
//     }
//     if(squares[1]==squares[2] && squares[2] == squares[3] && squares[1] != ''){

//         title.innerHTML = `${squares[1]} winner`;
//         document.getElementById('item'+1).style.background = 'red';
//         document.getElementById('item'+2).style.background = 'red';
//         document.getElementById('item'+3).style.background = 'red';
//         setInterval(function(){title.innerHTML += '.'},1000)
//         setTimeout(function(){location.reload()},2000)
       
//     }else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != ''){



//     }else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != ''){



//     }
//     else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != ''){


//     }else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != ''){

//     }else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != ''){


//     }else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != ''){

//     }else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != ''){

//     }else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != ''){

//     }

// }

// function game(id){
//     let element = document.getElementById(id);
//     if(turn === 'X' && element.innerHTML == '') {
//         element.innerHTML = 'X';
//         turn = 'O';
//         title.innerHTML = 'O';
//     } 
//     else if (turn === 'O' && element.innerHTML == '') {
//         element.innerHTML = 'O';
//         turn = 'X';
//         title.innerHTML = 'X';
//     }
//     winner()
// }
let title = document.querySelector('.title');
let turn = 'X';
let squares = [];

function winner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }

    // دالة مختصرة لتلوين الخط الفائز وعرض الرسالة
    function win(a, b, c) {
        title.innerHTML = `${squares[a]} Winner`;
        document.getElementById('item' + a).style.background = 'red';
        document.getElementById('item' + b).style.background = 'blue';
        document.getElementById('item' + c).style.background = 'pink';
        setInterval(() => title.innerHTML += '.', 1000);
        setTimeout(() => location.reload(), 4000);
    }

    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
        win(1, 2, 3);
    } else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != '') {
        win(4, 5, 6);
    } else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != '') {
        win(7, 8, 9);
    } else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '') {
        win(1, 4, 7);
    } else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != '') {
        win(2, 5, 8);
    } else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != '') {
        win(3, 6, 9);
    } else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != '') {
        win(1, 5, 9);
    } else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != '') {
        win(3, 5, 7);
    }
    else{
        let full = true;
        for(let i =1 ;i< 10; i++ ){
            if(squares[i]== ''){
                full = false;
                break;
            }
        }
        if(full){
            title.innerHTML = 'Draw';
            setTimeout(
                function(){
                  location.reload(),2000
                }
            )
        }
    }
}

function game(id) {
    let element = document.getElementById(id);
    if (turn === 'X' && element.innerHTML == '') {
        element.innerHTML = 'X';
        turn = 'O';
        title.innerHTML = 'O';
    } else if (turn === 'O' && element.innerHTML == '') {
        element.innerHTML = 'O';
        turn = 'X';
        title.innerHTML = 'X';
    }
    winner();
}