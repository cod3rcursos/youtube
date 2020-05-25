const { Observable, noop } = require("rxjs")

function fromArray(array) {
    return Observable.create(subscriber => {
        array.forEach(el => subscriber.next(el))
        subscriber.complete()
    })
}

fromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    .subscribe(
        n => console.log(n),
        noop,
        () => console.log('Fim!!!')
    )