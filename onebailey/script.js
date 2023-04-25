function openLink(index) {
    var link = ""

    switch(index) {
        case 0:
            link = "https://docs.google.com/spreadsheets/d/1UqsJSAqmz3_kKMMjGmNItDxKR8zV_ULH2uDtx7myK_8"
            break

        case 1:
            link = "https://docs.google.com/forms/d/1VvuarwIhKICcKLZ_2hYtXXMpuMhad-dk957Hs0bwCU4"
            break

        case 2:
            link = "https://docs.google.com/forms/d/1hG3-vTCF13BmS2P4HxkOavtEYazB724l1mfGa4GuLbE"
            break

        case 3:
            link = "https://docs.google.com/forms/d/1rsAwnFttW6CNN6DIGCOhLio4Q4TiZs9WUWAA4W76hbI"
            break

        case 4:
            link = "https://docs.google.com/forms/d/1aMLKaytD0TTBSdlltYsE9SLUaQjiLlusVtFXMzQpIWQ"
            break
    }
    
    window.location.href = link
}