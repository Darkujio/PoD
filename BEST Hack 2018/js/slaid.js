// получаем элемент слайдера, каждого участника
var i = document.getElementById("i");
var j = document.getElementById("j");
var n = document.getElementById("n");
var y = document.getElementById("y");
var s = document.getElementById("s");

// Функция скрывает текущего участника и отображает следущего 
function slaider() {
    if (i.classList.contains('vis')) {
        n.classList.add('vis');
        i.classList.remove('vis');
    } else if (n.classList.contains('vis')) {
        j.classList.add('vis');
        n.classList.remove('vis');
    } else if (j.classList.contains('vis')) {
        y.classList.add('vis');
        j.classList.remove('vis');
    } else if (y.classList.contains('vis')) {
        s.classList.add('vis');
        y.classList.remove('vis');
    } else if (s.classList.contains('vis')) {
        i.classList.add('vis');
        s.classList.remove('vis');
    }
}

// Вызываем функцию slaider каждые 7 секунд
var id = setInterval("slaider()", 7000);
