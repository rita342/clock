const hour = document.getElementById("hour")
const minutes = document.getElementById("minutes")
const second = document.getElementById("second")
const ampm = document.getElementById("ampm")

function updateclock() {
    let gethour = new Date().getHours()
    let getminute = new Date().getMinutes()
    let getsecond = new Date().getSeconds()


    hour.innerHTML = gethour + "" + ":"
    minutes.innerHTML = getminute + "" + ":"
    second.innerHTML = getsecond + "" + ":"
        //to arrande time format
    gethour = gethour < 10 ? "0" + gethour : gethour;
    getminute = getminute < 10 ? "0" + getminute : getminute;
    getsecond = getsecond < 10 ? "0" + getsecond : getsecond;

    let ampm = "PM"
    if (gethour > 12) {
        gethour = gethour - 12
        ampm = "AM"
    }


    setTimeout(() => {
        updateclock()
    }, 1000)
}
updateclock()