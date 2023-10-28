function Clock() {
    let currentClock = new Date()
    return( `The time is ${currentClock.getHours()}:${currentClock.getMinutes()}:${currentClock.getSeconds()} now`
    )

}
export default Clock