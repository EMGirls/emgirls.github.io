/**
 * @fileoverview function to check if element is in bounds
 * @see https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
 */


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
