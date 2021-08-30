
var girlsInvolved = document.getElementById("girls-involved");
var countriesInvolved = document.getElementById("countries-involved");
var mentorsInvolved = document.getElementById("mentors-involved");

let count = [0, 0, 0];
const finalCount = [3000, 50, 40];
const increment = [10, 1, 1];

/**
 * Stuff to do when the webpage loads
 */
function onload() {
    counter();
}

function counter() {
    for (let i = 0;i < count.length; i++) {
        if (count[i] < finalCount[i]) {
            count[i] += increment[i];
        }
    }
    girlsInvolved.innerHTML = `${count[0]}+`;
    countriesInvolved.innerHTML = `${count[1]}+`;
    mentorsInvolved.innerHTML = `${count[2]}+`;
    setTimeout(counter, 1);
}
