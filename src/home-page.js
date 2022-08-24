//ts-check
import Icon from './pianist.gif'
/**
 * 
 * @param {HTMLElement} element 
 */
export function load(element, tabs) {
    const about = document.createElement("div");
    about.innerText = 'Home page about';
    element.append(about);
    const image = document.createElement('img');
    image.src = Icon;
    element.append(image);
}