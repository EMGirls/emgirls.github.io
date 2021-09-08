var girlsInvolved = document.getElementById("girls-involved");
var countriesInvolved = document.getElementById("countries-involved");
var mentorsInvolved = document.getElementById("mentors-involved");
var container1 = document.getElementById("container-for-the-word-animation-thing-something");

var container2 = document.getElementById("competition-prize-amounts");
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");

let count = [0, 0, 0];
const finalCount = [3000, 50, 40];
const increment = [10, 1, 1];

let heights = [0, 0, 0];
const increments = [1, 1, 1];
const finalIncrements = [200, 300, 100];

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

function stackBlocks() {
    for(let i = 0;i < heights.length;i++) {
        if (heights[i] < finalIncrements[i]) {
            heights[i] += increment[i];
        }
    }
    second.style = `height: ${heights[0]}px`;
    first.style = `height: ${heights[1]}px`;
    third.style = `height: ${heights[2]}px`;
    setTimeout(stackBlocks, 1);
}

document.addEventListener("scroll", () => {
    if (isInViewport(container1)) {
        counter();
    }
    if (isInViewport(container2)) {
        stackBlocks();
    }
})