export function calculateProgress(duration: number, repeatedTimes:number) {
    return Math.ceil(100 / duration * repeatedTimes);
}