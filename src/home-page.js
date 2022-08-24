import Icon from './kneading.gif'
//ts-check
/**
 * 
 * @param {HTMLElement} element 
 */
export function load(element, tabs) {
    while (element.hasChildNodes()) element.removeChild(element.lastChild);
    const about = document.createElement("div");
    about.innerText = 'Home page about';
    element.append(about);
    const image = document.createElement('img');
    image.src = Icon;
    element.append(image);
}