const convertButton = document.querySelector(".convert-button")
const currencyAll = document.querySelector(".currency-all")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Valor em Outras Moedas

    

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.5




    if (currencyAll.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencyAll.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencyAll.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL" ,
    }).format(inputCurrencyValue)


}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    



    if(currencyAll.value == "dolar") {
        currencyName.innerHTML = "Dólar"
        currencyImg.src ="./assets/dolar (1).png"
       
         
    }
    

    if (currencyAll.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src ="./assets/euro.png"

        
       
    }

    if (currencyAll.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImg.src ="./assets/libra.png"

       
       
    }
    convertValues() 
}
currencyAll.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)