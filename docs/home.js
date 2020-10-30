function confirmacao (id) {
    var resposta = confirm("Deseja deletar esta pagina permanentemente?")
    if (resposta == true) {
        ul = document.getElementById("myUL")
        li = ul.getElementsByTagName("li")
        li[id].remove()
        window.location.href = "remover.php?id=" + id 
    }
}

function myFunction() {
    input = document.getElementById("myInput")
    filter = input.value.toUpperCase()
    ul = document.getElementById("myUL")
    li = ul.getElementsByTagName("li")
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0]
        txtValue = a.textContent || a.innerText
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""
        } else {
            li[i].style.display = "none"
        }
    }
}