let cards=[];
let names=['Guadalupe','Ollie','Aki'];
let event = 'surprise';

function writeCards(array,eventName){
    for(let i=0; i < names.length;i++){
       cards.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`)
    }
    return cards;
}


function countDown(num){
    while(num>=0){
        console.log(num)
        num--;
    }
}