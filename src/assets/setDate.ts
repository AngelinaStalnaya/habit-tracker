export function setDate() {
    const dateNow = new Date();
    return `${dateNow.getFullYear()}-${dateNow.getMonth()}-${dateNow.getDay()}`
}
