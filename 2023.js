var p = document.querySelector('p');
var tet = new Date("Feb 1,2024 24:00:00").getTime();
//Tổng số giây 
var countDown = setInterval(run, 1000);
function run() {
    var now = new Date().getTime();
    var timeRest = tet - now;
    var day = Math.floor(timeRest / (1000 * 60 * 60 * 24));
    var hours = Math.floor(timeRest % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)); 
    var minute = Math.floor(timeRest % (1000 * 60 * 60) / (1000 * 60));
    var sec = Math.floor(timeRest % (1000 * 60) / (1000));
    p.innerHTML = day + ' DAY ' + hours + ' : ' + minute + ' : ' + sec + "  ";
    if (timeRest <= 0) {
        clearInterval(countDown);
        p.innerHTML = "HPNY";
    }
}
