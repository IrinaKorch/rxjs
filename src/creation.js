import { of, from, scan, Observable } from 'rxjs'


// const stream$ = of(1,2,3,4)

// stream$.subscribe(val => {
//   console.log('Value: ', val)
// })
//
const arr$ = from([1, 2, 3, 4])
  .pipe(
    scan((acc, value) => acc.concat(value), [])
  )
arr$.subscribe(val => {
  console.log('from: ', val)
})

