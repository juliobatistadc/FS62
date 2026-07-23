const form = document.getElementsByClassName("add-product")[0]
// const form = document.querySelector(".add-product")

const lista = document.querySelector("ul")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const innerForm = event.target
    const input = innerForm.querySelector("input")
    const li = document.querySelector("li")

    const novoItem = li.cloneNode(true)
    const codigo = crypto.randomUUID()
    novoItem.setAttribute("codigo", codigo)
    const novoItemValue = novoItem.querySelector("input")

    novoItemValue.value = input.value

    saveOnLocalStorage("listaItens", { value: input.value, check: false, codigo: codigo })

    lista.appendChild(novoItem)

    input.value = ""
})

// const items = lista.getElementsByTagName("li")
// const items2 = lista.querySelectorAll("li")

function editar(item) {
    const input = item.querySelector("input");
    const div = item.querySelector(".actions");
    const button = item.querySelector("button.save");
    input.removeAttribute("readonly");

    div.style.display = "none";
    button.style.display = "block";


}

function save(item) {
    const div = item.querySelector(".actions");
    const input = item.querySelector("input");
    const button = item.querySelector("button.save");

    input.setAttribute("readonly", true);

    div.style.display = "block";
    button.style.display = "none";

    const listaItens = getLocalStorage("listaItens")

    const novaLista = listaItens.map((elemento) => {
        return elemento.codigo !== item.getAttribute("codigo") ?
            elemento : Object.assign(elemento, { value: input.value })
    })

    editItem("listaItens", novaLista)
}

function cancel(item) {
    const input = item.querySelector("input");
    const div = item.querySelector(".check");
    const button = item.querySelector("button.cancel");

    div.style.display = 'block'
    button.style.display = 'none'
    input.style.textDecoration = 'none'
}

function check(item) {
    const input = item.querySelector("input");
    const div = item.querySelector(".check");
    const button = item.querySelector("button.check");
    const buttons = item.querySelectorAll("button");
    const editButton = item.querySelectorAll("button.edit");
    const deleteButton = item.querySelectorAll("button.delete");
    // div.style.display = 'none'
    // button.style.display = 'block'
    // input.style.textDecoration = 'line-through'

    if (input.style.textDecoration === 'line-through') {
        input.style.textDecoration = 'none'
        button.textContent = '✔'
        editButton.disabled = false
        deleteButton.disabled = false
    } else {
        input.style.textDecoration = 'line-through'
        button.textContent = 'X'
        editButton.disabled = true
        deleteButton.disabled = true
    }


    // input.style.textDecoration = input.style.textDecoration === "line-through" ?  "none" : "line-through"
    // button.innerText = button.innerText === 'X' ? '✔' : 'X'





    for (const button of buttons) {
        if (button.role === 'check') continue
        if (!button.getAttribute('disabled')) {
            button.setAttribute('disabled', true)
        } else {
            button.removeAttribute('disabled')
        }
    }

}


function check2(item) {
    const input = item.querySelector(".product-name");
    input.style.textDecoration =
        input.style.textDecoration === "line-through"
            ? "none"
            : "line-through";
    const buttonCheck = item.querySelector("button.check");
    const buttonEdit = item.querySelector("button.edit");
    const buttonDelete = item.querySelector("button.delete");

    buttonEdit.disabled =
        buttonEdit.disabled === true
            ? false
            : true;

    buttonDelete.disabled =
        buttonDelete.disabled === true
            ? false
            : true;

    buttonCheck.innerText =
        buttonCheck.innerText.trim() === "✔"
            ? "X"
            : "✔";
}

function excluir(item) {
    const parent = item.closest('ul')
    parent.removeChild(item)
}

lista.addEventListener("click", (event) => {
    const button = event.target.tagName === "BUTTON" && event.target

    if (!button) return

    const item = button.closest("li")
    if (button.role === "edit") editar(item)
    if (button.role === "save") save(item)
    if (button.role === "check") check(item)
    if (button.role === "delete") excluir(item)
})









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

function editItem(key, data) {
    const listaString = JSON.stringify(data)
    localStorage.setItem(key, listaString)
}