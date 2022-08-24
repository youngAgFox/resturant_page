//ts-check
/**
 * 
 * @param {HTMLElement} element 
 */
export function load(element, tabs) {
    for (const c of element.children) {
        c.remove();
    }
    const about = document.createElement("div");
    about.innerText = 'contact page main';
    element.append(about);
}