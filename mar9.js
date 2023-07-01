var httpRequest = new XMLHttpRequest();
httpRequest.open("get", "https://jsonplaceholder.typicode.com/users");
httpRequest.send();
httpRequest.onreadystatechange = function () {
    console.log(httpRequest.readyState);
    if (httpRequest.readyState == 4) {
        console.log(httpRequest.responseText);
        console.log(httpRequest.status);
    }
}