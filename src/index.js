module.exports = function doFetch() {
    return fetch("https://kinokassa.kinoplan24.ru/api/v2/release/playbill?city_id=351&date=2022-12-09", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,ru;q=0.8",
            "content-type": "application/JSON",
            "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Linux\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "x-application-token": "RydhfgMB5YIPv5ti7lE3rEm3uFQbYsrz",
            "x-platform": "widget",
            "Referer": "https://cinema.magiccity.uz/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    }).then(res => res.text())
        .then(text => {
            if(JSON.parse(text).releases){
                let data = JSON.parse(text).releases
                for(let movie of data) {
                    const regex = /(аватар|avatar|Приключения Тедди)/gim
                    if(regex.test(movie.title)){
                    return movie
                    }
                }
            }
        });
}
