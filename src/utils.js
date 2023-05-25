
export function toCurrency(number) {
    if (isNaN(number)) return
    return number.toLocaleString(undefined, { style: 'currency', currency: 'EUR' })
}