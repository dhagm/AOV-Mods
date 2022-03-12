function bodyloaded() {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {},
        tmp;
    for (var i = 0, l = params.length; i < l; i++) {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
    var section = document.getElementById(data["herocodename"]);
    section.style.display = "grid";
    section.style.padding = "60px 0";

    const children = section.children;

    Array.from(children).forEach(a => {
        if (doesFileExist(a.href)) {
            a.style.display = "flex";
        } else {
            a.style.display = "none";
        }
    });
}

function doesFileExist(urlToFile) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();

    return xhr.status !== 404;
}