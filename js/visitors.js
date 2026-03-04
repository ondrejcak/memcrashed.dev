const VC_API_URI =
    "https://api.memcrashed.dev/visitors";
// const VC_API_URI = "http://localhost:8000";

window.addEventListener("DOMContentLoaded", () => {
    fetch(VC_API_URI).then((resp) => {
        if (resp.status != 200) {
            document.getElementById("visitorCounter").innerHTML = "¯\\_(ツ)_/¯";
        } else {
            resp.json().then((json) => {
                document.getElementById("visitorCounter").innerHTML = json.requests;
            });
        }
    }).catch((err) => {
        console.error(err);
        document.getElementById("visitorCounter").innerHTML = "¯\\_(ツ)_/¯";
    });
});
