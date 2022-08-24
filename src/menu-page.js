//ts-check
/**
 * 
 * @param {HTMLElement} element 
 */
export function load(element, tabs) {
    while (element.hasChildNodes()) element.removeChild(element.lastChild);
    const about = document.createElement("div");
    about.innerText = 'menu page main';
    element.append(about);
}