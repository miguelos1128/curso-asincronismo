const promise = new Promise(function (resolve, rejetct){
    resolve('Hey! todo correcto');
});

const cows = 15;

const countCows = new Promise(function (resolve, reject) {
    if (cows > 10){
        resolve(`we have ${cows} cows ion the farm`);
    }else{
        reject('There is no cows on the farm');
    }
});


countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'));