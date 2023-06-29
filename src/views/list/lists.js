/**
 * @param {string} title
 * @param {array} lists
 **/

export const addNewList = (name, lists) => {
    if (!name) return

    let listMaxId = lists.length ? Math.max(...lists.map((list) => list.id)) : 0
    let listMaxList = lists.length
        ? Math.max(...lists.map((list) => list.list))
        : 0

    lists.push({
        id: listMaxId + 1,
        list: listMaxList + 1,
        name: name,
        cards: [],
    })
}

/**
 * @param {string} data.newName
 * @param {array} lists
 **/
export const editListName = (data, lists) => {
    if (!data?.id || !data?.newName) return

    let listToEdit = lists.find((list) => list.id === data.id)
    listToEdit.name = data.newName
}
