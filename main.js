const h_stats = document.getElementById("heads-stats"); 
const t_stats = document.getElementById("tails-stats");
let h_n = 0;
let t_n = 0;
const result = document.getElementById("result");
let random;

const getResult = () =>{
    random = Math.floor(Math.random() * 2);
    setTimeout(() =>{
        switch(random){
            case 0:
                update('cara');
                break;
            case 1:
                update('sello');
                break;
        }
    }, 1000)
    result.innerHTML = 'fliping...'
}

const update = (str) =>{
    switch(str){
        case 'cara':
            h_n++;
            result.innerHTML = 'heads';
            h_stats.innerHTML = h_n;
            break;
        case 'sello':
            t_n++;
            result.innerHTML = 'tails';
            t_stats.innerHTML = t_n;
            break;
    }
}

const Reset = () =>{
    h_n = 0;
    t_n = 0;
    result.innerHTML = 'Coin';
    h_stats.innerHTML = h_n;
    t_stats.innerHTML = t_n;
}

window.addEventListener('load', () => {
    h_stats.innerHTML = h_n;
    t_stats.innerHTML = t_n;
})
