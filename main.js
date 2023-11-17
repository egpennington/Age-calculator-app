const inputDay = document.getElementById("day-el")
const inputMonth = document.getElementById("month-el")
const inputYear = document.getElementById("year-el")
const submitBtn = document.getElementById("submit-btn")

const yearResultEl = document.getElementById("year-result-el")
const monthResultEl = document.getElementById("month-result-el")
const dayResultEl = document.getElementById("day-result-el")

function calculateAge() {
      console.log("clicked")
      let dayEnter = inputDay.value
      let monthEnter = inputMonth.value
      let yearEnter = inputYear.value

      console.log(yearEnter, dayEnter, monthEnter)      

      // Convert input values to Date object
      var inputDate = new Date(yearEnter, monthEnter - 1, dayEnter)      

      // Current date
      var currentDate = new Date()

      // Calculate the age
      var ageInMilliseconds = currentDate - inputDate

      // Calculate years
      var ageInYears = currentDate.getFullYear() - inputDate.getFullYear()

      // Adjust if birthday hasn't occurred yet this year
      if (
            currentDate.getMonth() < inputDate.getMonth() ||
            (currentDate.getMonth() === inputDate.getMonth() &&
                currentDate.getDate() < inputDate.getDate())
        ) {
            ageInYears--
        }

        // Calculate months and days
        var ageInMonths =
            currentDate.getMonth() -
            inputDate.getMonth() -
            (currentDate.getDate() < inputDate.getDate() ? 1 : 0)

        var ageInDays =
            currentDate.getDate() -
            inputDate.getDate() +
            (currentDate.getDate() < inputDate.getDate()
                ? new Date(
                      currentDate.getFullYear(),
                      currentDate.getMonth(),
                      0
                  ).getDate()
                : 0)

        // Adjust for negative months or days
        if (ageInMonths < 0) {
            ageInMonths += 12
        }

      // Update the result div
      yearResultEl.innerHTML = `
            <span class="purple">${ageInYears} </span> years
            `
      monthResultEl.innerHTML = `
            <span class="purple"> ${ageInMonths}</span> months
            `
      dayResultEl.innerHTML = `
            <span class="purple">${ageInDays} </span> days
            `
}
