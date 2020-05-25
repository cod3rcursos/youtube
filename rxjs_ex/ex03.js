const { from } = require("rxjs")
const { map } = require("rxjs/operators")

const notas = [6.7, 6.1, 7.5, 4.9, 9.8, 7]

from(notas)
    .pipe(
        map(nota => nota >= 7 ? 'Aprov': 'Reprov'),
        map(status => status[0])
    )
    .subscribe(status => {
        console.log(status)
    })