/**
 * Основная функция для совершения запросов
 * на сервер.
 * 
 * */
const createRequest = (options = {}) => {
    let { url, data, method, callback } = options;
    let xhr = new XMLHttpRequest();

    xhr.responseType = "json";

    xhr.onload = function () {
        if (callback) {
            callback(null, xhr.response);
        }
    }
    xhr.onerror = function () {
        if (callback) {
            callback(new Error(xhr.statusText), null);
        }
    }

    if (method.toUpperCase() === "GET") {
        let string = new URLSearchParams();
        if (data) {
            for (let key in data) {
                string.append(key, data[key]);
            }
        }
        console.log(`${url}?${string.toString()}`);
        xhr.open("GET", `${url}?${string.toString()}`);
        xhr.send();
    } else {
        let formData = new FormData();
        for (let key in data) {
            formData.append(key, data[key]);
        }
        xhr.open(method.toUpperCase(), url);
        xhr.send(formData);
    }

};


