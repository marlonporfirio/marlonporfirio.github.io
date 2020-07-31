

let n = localStorage.getItem('on_load_conter');

if (n === null) {
    n = 0;
}
n++;

localStorage.setItem('on_load_conter', n);


document.getElementById('contarVisitante').innerHTML = n;

