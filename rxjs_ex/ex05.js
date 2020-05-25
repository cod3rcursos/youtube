const { Observable } = require("rxjs")
const { map } = require("rxjs/operators")
const axios = require("axios")

function httpGet(url) {
    return Observable.create(subscriber => {
        axios.get(url)
            .then(resp => {
                if(Array.isArray(resp.data)) {
                    resp.data.forEach(element => {
                        subscriber.next(element)
                    });
                } else {
                    subscriber.next(resp.data)
                }
            })
            .then(() => subscriber.complete())
    })
}

httpGet("http://localhost:3001/films")
    .pipe(
        map(film => film.Actors),
        map(actorsString => actorsString.split(/\s*,\s*/g)),
        map(actors => actors.length)
    )
    .subscribe(length => console.log(length))