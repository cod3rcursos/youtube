const { Observable } = require("rxjs")

const obs = Observable.create(subscriber => {
    subscriber.next('RxJS')
    subscriber.next('é')
    subscriber.next('muito')
    subscriber.next('legal!')

    if(Math.random() > 0.5) {
        subscriber.complete()
    } else {
        throw "Eita!!!!"
    }
})

obs.subscribe(
    texto => console.log(texto),
    err => console.log(err),
    () => console.log('Fim!')
)