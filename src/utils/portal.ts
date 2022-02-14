export default function portal(node, inject) {
    const target = document.querySelector(inject);
    target.appendChild(node, target);
}
