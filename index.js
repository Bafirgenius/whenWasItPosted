const whenWasItPosted = date => {
  // do code here
  let month = [
    ['January', 0],
    ['February', 1],
    ['March', 2],
    ['April', 3],
    ['May', 4],
    ['June', 5],
    ['July', 6],
    ['August', 7],
    ['September', 8],
    ['October', 9],
    ['November', 10],
    ['December', 11]
  ]

  let currentDate = new Date().getDate()
  let currentMonth = new Date().getMonth()
  let currentYear = new Date().getFullYear()
  // console.log(currentDate, 'current date')
  // console.log(currentMonth, 'current month')
  // console.log(currentYear, 'current year')
  let posted = date.split(" ")
  // console.log(typeof posted)
  console.log(posted, 'ini posted')
  // console.log(changeToString(new Date().setMonth(new Date().getMonth())))
  // console.log(new Date().getMonth())
  // console.log(new Date().toLocaleString('default', { month: 'long' }))
  month.forEach((el) => {
    // console.log(el[0])
    if(posted[1] === el[0]) {
      posted[1] = el[1]
    }
  });
  posted[0] = +posted[0]
  posted[1] = +posted[1]
  posted[2] = +posted[2]

  if(posted[2] !== currentYear) {
    // console.log(currentYear-posted[2])
    console.log(`${currentYear-posted[2]} years ago`)
    return `${currentYear-posted[2]} years ago`
  } else {
    if(posted[1] !== currentMonth) {
      let gapOfMonth = currentMonth - posted[1]
      if(gapOfMonth > 1) {
        console.log(`${currentMonth - posted[1]} months ago`)
        return `${currentMonth - posted[1]} months ago`
      } else {
        let gapOfDay = (30+currentDate)-posted[0]
        if(gapOfDay<7){
          console.log(`${gapOfDay} days ago`)
          return `${gapOfDay} days ago`
        } else {
          console.log(`${Math.floor(gapOfDay/7)} weeks ago`)
          return `${Math.floor(gapOfDay/7)} weeks ago`
        }
      }
    } else {
      console.log(`${currentDate - posted[0]} days ago`)
      return `${currentDate - posted[0]} days ago`
    }
  }
}


// do not change this code below
const changeToString = __ => {
  // console.log(__, "inin")
  const _ = new Date(__)
  const month = _.toLocaleString('default', { month: 'long' });
  const date = _.getDate()
  const year = _.getFullYear()
  return `${date} ${month} ${year}`
}
const test = (testCase, result) => console.log(testCase === result);

const date = new Date();
const date1 = new Date();
const date2 = new Date();
const date3 = new Date();
const date4 = new Date();

test(whenWasItPosted(changeToString(date.setMonth(date.getMonth() - 11))), '1 years ago')
test(whenWasItPosted(changeToString(date1.setDate(date.getDate() - 14))), '1 weeks ago')
test(whenWasItPosted(changeToString(date2.setDate(date.getDate() - 3))), '3 days ago')
test(whenWasItPosted(changeToString(date3.setFullYear(date.getFullYear() - 1))), '2 years ago')
test(whenWasItPosted(changeToString(date4.setFullYear(date.getFullYear() - 20))), '21 years ago')