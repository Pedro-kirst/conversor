let dolar = 5.67;

let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");

usdInput.addEventListener("keyup", () =>{
    convert("usd-to-brl");
});

brlInput.addEventListener("keyup", () =>{
    convert("brl-to-usd");
});

usdInput.value = "1000.00";
convert("usd-to-brl");

function formatCurrency(value) {
    let fixedValue = fixValue(value);
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    };
    let formatter = new Intl.NumberFormat("pt-BR", options);
    return formatter.format(fixedValue);
}

function fixValue(value){
    let fixedValue = value.replace(",", ".");
    let floatValue = parseFloat(fixedValue);
    if (isNaN(floatValue)){
        floatValue = 0;
    }
    return floatValue;
}

function convert(type){
    if(type === "usd-to-brl"){
        let usdValue = fixValue(usdInput.value);
        let brlValue = usdValue * dolar;
        brlValue = brlValue.toFixed(2);

        brlInput.value = formatCurrency(brlValue);
    }

    if(type === "brl-to-usd"){
        let brlValue = fixValue(brlInput.value);
        let result = brlValue / dolar;
        result = result.toFixed(2);

        usdInput.value = formatCurrency(result);
    }
}
