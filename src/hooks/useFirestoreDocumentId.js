export default function useFirestoreDocumentId() {
    const source = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    let result = []
    let j, i
    for (i = 0; i <= 15; i++) {
        j = Math.floor(Math.random() * (source.length - 1) + 1)
        result.push(source[j])
    }

    return result.join('')
}