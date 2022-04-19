

function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// EX 1
function createDaysOfMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysMonth = document.getElementById('days');

    // AJUSTAR IF, QUE ODIA 25 TA FICANDO SEM HOLIDAY ROVAVELEMENTE POR ELE ESTAR EM DUAS DIFERENTES ELE PERDE UMA CLASSE
    for (let i = 0; i < dezDaysList.length; i += 1) {
        const dayLi = document.createElement('li');
        dayLi.className = 'day';
        dayLi.innerText = dezDaysList[i]

        if (dezDaysList[i] == 24 || dezDaysList[i] == 31) {
            dayLi.className = 'day holiday'
        }

        if (dezDaysList[i] == 4 || dezDaysList[i] == 11 || dezDaysList[i] == 18) {
            dayLi.className = 'day friday';
        }

        if (dezDaysList[i] == 25) {
            dayLi.className = 'day holiday friday'
        }

        daysMonth.appendChild(dayLi)

    }
}

createDaysOfMonth();

//EX 2

function botao(a) {
    const feriado = document.querySelector('.buttons-container');
    const bot = document.createElement('button');
    let botid = 'btn-holiday';
    bot.id = botid;
    bot.innerHTML = a;
    feriado.appendChild(bot);
}

botao('Feriados');

//EX 3

function clickFeriado() {
    let but = document.querySelector('#btn-holiday');
    let feriados = document.querySelectorAll('.holiday');
    let corNatural = 'white';
    let corNova = 'rgb(238,238,238)';


    but.addEventListener('click', function () {
        for (let i = 0; i < feriados.length; i += 1) {
            if (feriados[i].style.backgroundColor == corNatural) {
                feriados[i].style.backgroundColor = corNova;
            } else {
                feriados[i].style.backgroundColor = corNatural
            }
        }

    }
    )
};

clickFeriado();

//EX 4

function sexta(a) {
    const feriado = document.querySelector('.buttons-container');
    const sex = document.createElement('button');
    let sexid = 'btn-friday';
    sex.id = sexid;
    sex.innerHTML = a;
    feriado.appendChild(sex);
}

sexta('Sexta-Feira');

// EX 5

function clickSexta(a) {
    let but = document.querySelector('#btn-friday');
    let sexta = document.querySelectorAll('.friday');
    let newSextaText = 'Sextou'


    but.addEventListener('click', function () {
        for (let i = 0; i < sexta.length; i += 1) {
            if (sexta[i].innerText !== newSextaText) {
                sexta[i].innerText = newSextaText;
            } else {
                sexta[i].innerText = a[i]
            }
        }

    }
    )
};

let dezSexta = [4, 11, 18, 25]
clickSexta(dezSexta)

//ex 6

function zoom() {
    let dias = document.querySelector('#days')
    dias.addEventListener('mouseover', function (event) {
        event.target.style.fontSize = '40px'
    })
}
zoom();

function zoomout() {
    let dias = document.querySelector('#days')
    dias.addEventListener('mouseout', function (event) {
        event.target.style.fontSize = '20px'
    })
}
zoomout();