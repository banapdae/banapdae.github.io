function openLink(index) {
    var link = ""

    switch(index) {
        case 0:
            link = "https://docs.google.com/spreadsheets/d/1UqsJSAqmz3_kKMMjGmNItDxKR8zV_ULH2uDtx7myK_8/edit?usp=sharing"
            break

        case 1:
            link = "https://docs.google.com/forms/d/e/1FAIpQLSebsAIgTwCfmgXJfqPUdr_bpTRNfD8odxdUTt8Uc4WRsB5MHQ/viewform"
            break

        case 2:
            link = "https://docs.google.com/forms/d/e/1FAIpQLSetEa0x2zQYMPY6JLIzxzdNFvfEVYec2oMqWbJdnf_e5imAlQ/viewform"
            break

        case 3:
            link = "https://docs.google.com/forms/d/e/1FAIpQLSdXX-E74Q8xLzBwL8V-u846bM1X_jD5Cc0NCeF1X21GbWtk6Q/viewform"
            break

        case 4:
            link = "https://docs.google.com/forms/d/e/1FAIpQLSffQ7oCJIAyirpIshggNwaS-dob8xvG1VlUKZLAagdTtfFgyg/viewform"
            break
    }
    
    window.location.href = link
}