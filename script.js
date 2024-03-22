const dia = document.getElementById('dia');
const hora = document.getElementById('hora');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const lancamento = "5 dec 2024"

function countDown() {
    const dataLanc = new Date(lancamento)
    const hoje = new Date()
    const segTotal = (dataLanc - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 /24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60 ) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = finalDias
    hora.innerHTML = finalHoras
    minutos.innerHTML = finalMinutos
    segundos.innerHTML = finalSegundos
}

countDown(); setInterval(countDown, 1000);