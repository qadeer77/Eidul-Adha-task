// eid-1-day
function foo() {
    var beforeDaste = document.getElementById("abc");
    var date = new Date("Sat, July 10 2022").getTime();
    var today = new Date().getTime();
    var minus = date - today;
    var round = Math.round(minus / (1000 * 60 * 60 * 24));
    beforeDaste.innerHTML = round + " days ago"
}
function down() {
    var before = document.getElementById("hour");
    var tareek = new Date("Sat, July 10 2022").getTime();
    var todayDate = new Date().getTime();
    var minus2 = tareek - todayDate;
    var round2 = Math.round(minus2 / (1000 * 60 * 60));
    before.innerHTML = round2 + " hour ago"
}
function minute() {
    var minute = document.getElementById("minute");
    var minute2 = new Date("Sat, July 10 2022").getTime();
    var minute3 = new Date().getTime();
    var minus3 = minute2 - minute3;
    var round3 = Math.round(minus3 / (1000 * 60));
    minute.innerHTML = round3 + " minute ago"
}

// eid-2-day#
function fato() {
    var beforeDaste = document.getElementById("abcd");
    var date = new Date("Sat, July 11 2022").getTime();
    var today = new Date().getTime();
    var minus = date - today;
    var round = Math.round(minus / (1000 * 60 * 60 * 24));
    beforeDaste.innerHTML = round + " days ago"
}
function anto() {
    var before = document.getElementById("hourse");
    var tareek = new Date("Sat, July 11 2022").getTime();
    var todayDate = new Date().getTime();
    var minus2 = tareek - todayDate;
    var round2 = Math.round(minus2 / (1000 * 60 * 60));
    before.innerHTML = round2 + " hour ago"
}
function manton() {
    var minute = document.getElementById("minuteser");
    var minute2 = new Date("Sat, July 11 2022").getTime();
    var minute3 = new Date().getTime();
    var minus3 = minute2 - minute3;
    var round3 = Math.round(minus3 / (1000 * 60));
    minute.innerHTML = round3 + " minute ago"
}

// eid-3-day#
function fatone() {
    var beforeDaste = document.getElementById("abcde");
    var date = new Date("Sat, July 12 2022").getTime();
    var today = new Date().getTime();
    var minus = date - today;
    var round = Math.round(minus / (1000 * 60 * 60 * 24));
    beforeDaste.innerHTML = round + " days ago"
}
function antone() {
    var before = document.getElementById("hourseses");
    var tareek = new Date("Sat, July 12 2022").getTime();
    var todayDate = new Date().getTime();
    var minus2 = tareek - todayDate;
    var round2 = Math.round(minus2 / (1000 * 60 * 60));
    before.innerHTML = round2 + " hour ago"
}
function mantonneyt() {
    var minute = document.getElementById("minuteseres");
    var minute2 = new Date("Sat, July 12 2022").getTime();
    var minute3 = new Date().getTime();
    var minus3 = minute2 - minute3;
    var round3 = Math.round(minus3 / (1000 * 60));
    minute.innerHTML = round3 + " minute ago"
}
function qurbaniy() {
    var minute = document.getElementById("nahui");
    var minute2 = new Date("Sat, July 12 2022 17:00:00").getTime();
    var minute3 = new Date().getTime();
    var minus3 = minute2 - minute3;
    var round3 = Math.round(minus3 / (1000 * 60 * 60));
    minute.innerHTML = round3 + " gnte hone ke bad app qurbani nhi krskte"
}