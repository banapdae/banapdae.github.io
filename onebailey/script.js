function openLink(index) {
    var link = ""

    switch(index) {
        case 0:
            link = "./move_0.html"
            break

        case 1:
            link = "./move_1.html"
            break

        case 2:
            link = "./move_2.html"
            break

        case 3:
            link = "./move_3.html"
            break

        case 4:
            link = "./move_4.html"
            break
    }
    
    window.location.href = link
}