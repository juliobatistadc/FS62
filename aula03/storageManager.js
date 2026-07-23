function saveOnLocalStorage(key, data) {
    const info = getLocalStorage(key)
    const lista = info ? info : []
    lista.push(data)

    const listaString = JSON.stringify(lista)
    localStorage.setItem(key, listaString)
}

function getLocalStorage(key) {
    const data = localStorage.getItem(key)
    return JSON.parse(data) || []
}

function editItemLocalStorage(key, data) {
    const listaString = JSON.stringify(data)
    localStorage.setItem(key, listaString)
}


export {
    saveOnLocalStorage,
    getLocalStorage,
    editItemLocalStorage
}