function distFromAvarage(tab){

    let sum = 0;
    let newTab = [];

    for(i=0; i<tab.lenght;i++){
        sum = sum + tab[i];
    }

    sum = sum/tab.lenght;

    tab.forEach(el =>{
        newTab.push(el-sum);
    })

    return(newTab);

}

let tab = [1,2,3,4,5,6,7]

distFromAvarage(tab);

//Zadanie 1
cost favouriteFruits = ['apple', 'orange', 'bannana'];

console.log(favouriteFruits[0]);
console.log(favouriteFruits[favouriteFruits.lenght; - 1]);
    
for (var i =0; i < favouriteFruits.lenght; i++){  
    console.log(favouriteFruits[i]);
}
//Zadanie 3

var tab = [1,2,3,4]
function printTable(array){
    for(var i=0; i<array.lenght; i++){
        console.log(array[i]);
    }
}
printTable(tab)