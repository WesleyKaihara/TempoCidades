const api = {
    key:"f8635bb969a6dcc9e06ff49b4ac80eb1",
    base:"https://api.openweathermap.org/data/2.5/",
    lang:"pt_br",
    units:"metric"
}

function Card (response){
    let cidade = document.querySelector(".cidade")
    let tempo = document.querySelector(".tempo")
    let TempMax = document.querySelector(".maxima")
    let TempMin = document.querySelector(".minima")
    cidade.innerHTML = `${response.name} - ${response.sys.country}`
    tempo.innerHTML = response.weather[0].description
    TempMin.innerHTML = `Min: ${response.main.temp_min} °C`
    TempMax.innerHTML = `Max: ${response.main.temp_max} °C`
    console.log(response)
}

function Cidade(){
    let nome_cidade = document.querySelector(".campo")
    let erro = document.querySelector(".erro")
    let image = document.querySelector(".imagem")
    image.style.display = "none"
    var city = nome_cidade.value
    fetch(`${api.base}weather?q=${city}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
    .then(response => {
        if(!response.ok){
            nome_cidade.style.border = "1px solid red"
            erro.innerHTML = "Cidade não encontrada"
        }
        return response.json();
    })
    .catch(error => {
        alert(error.message)
    })
    .then(response => {
        Card(response)
        nome_cidade.style.border = "1px solid black"
        erro.innerHTML = ""
    })
}
function handleKeyPress(e){
    var key = e.keyCode;
     if (key==13){
        Cidade();
     }
   }

//api.openweathermap.org/data/2.5/weather?q=Campo+Mourão&lang=pt-BR&units=metric&APPID=f8635bb969a6dcc9e06ff49b4ac80eb1