export default function useMessage(messages, sender, reciever) {
    let result = []
    if (!messages) return null
    for (let i = 0; i < messages.length; i++) {
        if (sender.id === messages[i].senderID && reciever.id === messages[i].recieverID) {
            result.push(messages[i])
        }
        if (sender.id === messages[i].recieverID && reciever.id === messages[i].senderID) {
            result.push(messages[i])
        }
    }

    return result.sort(sortByDate('date')) 
}

const sortByDate = (field) => {
    return (a, b) => a[field] > b[field] ? -1 : 1
}
