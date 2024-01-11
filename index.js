function hero(){
    let nameH = document.getElementById('name').value;
    let rank = parseInt(document.getElementById('xp').value);

    console.log(`O nome do seu persongem é ${nameH} e o rank dele é ${rank}`);
    document.getElementById("nomeHeroi").innerHTML = `${nameH}`;

    if(rank <= 1000){
        console.log(`O rank dele é Ferro`);
        document.getElementById("rankHeroi").innerHTML = "Ferro";
    } else if(1000 < rank && rank <= 2000) {
        console.log(`O rank dele é Bronze`);
        document.getElementById("rankHeroi").innerHTML = "Bronze";
    } else if(2000 < rank && rank <= 5000) {
        console.log(`O rank dele é Prata`);
        document.getElementById("rankHeroi").innerHTML = "Prata";
    } else if(5001 <= rank && rank <= 7000) {
        console.log(`O rank dele é Ouro`);
        document.getElementById("rankHeroi").innerHTML = "Ouro";
    }else if(7000 < rank && rank <= 8000){
        console.log(`O rank dele é Platina`);
        document.getElementById("rankHeroi").innerHTML = "Platina";
    }else if(8000 < rank && rank <= 9000) {
        console.log(`O rank dele é Ascendente`);
        document.getElementById("rankHeroi").innerHTML = "Ascendente";
    }else if(9000 < rank && rank <= 10000){
        console.log(`O rank dele é Imortal`);
        document.getElementById("rankHeroi").innerHTML = "Imortal";
    }else if(10000 < rank && rank <= 20000) {
        console.log(`O rank dele é Radiante`);
        document.getElementById("rankHeroi").innerHTML = "Radiante";
    }else if( rank > 20000) {
        console.log(`Error! O xp maximo é de 20.000`);
        document.getElementById("rankHeroi").innerHTML = "Error";
    }else {
        console.log(`Error! Tente Novamente`);
        document.getElementById("rankHeroi").innerHTML = "Error";
    }
}