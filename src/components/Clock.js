let date = new Date(2023 , 1, 1, 19);
let currentClock  = date.getHours();
let styleCustom = {
    color : " ",
    background: " "
}



if (currentClock > 12) {
    styleCustom.color = "red";
    styleCustom.background = "blue";
} else if (currentClock > 18) {
    styleCustom.color = "green";
    styleCustom.background = "yellow";
} else {
    styleCustom.color = "gold";
    styleCustom.background = "grey"

}


function Clock() {
    return( <div style={styleCustom}>
         {`The time is ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} now`}
         </div>
    )

}
export default Clock