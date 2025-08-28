// gma -7 
// abs-cbn - 2
// ibc - 13 
// ptv - 4
// tv5 - 5

const rl = require('readline');
const rli = rl.createInterface({
    input: process.stdin,
})

rli.on('line', give_channel_name)

function give_channel_name(num){
    switch(num) {
        case '7':
            console.log("gma");
            break;
        case '2':
            console.log("abs-cbn");
            break;
        case '13' :
            console.log("ibc");
            break;
        case '4':
            console.log("ptv");
            break;
        case '5':
            console.log("tv5");
            break;
        default:
            console.log("unknown channel");
    }

}