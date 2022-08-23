//ts-check
/**
 * 
 * @param {HTMLElement} element 
 */
export function load(element) {
    for (const c of element.children) {
        c.remove();
    }
}