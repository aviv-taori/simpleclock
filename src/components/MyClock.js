import "./MyClock.css"

let date = new Date(2023 , 1, 1, 10);
let currentClock  = date.getHours();
let statosMood 
let styleCustom = {
    color : " ",
    background: " "
}



if (currentClock > 6) {
    styleCustom.color = "cyan";
    styleCustom.background = "skyblue";
    statosMood = "Good morning"
} else if (currentClock > 12) {
    styleCustom.color = "green";
    styleCustom.background = "red";
    statosMood = "Good noon"
} else if (currentClock > 16) {
    styleCustom.color = "green";
    styleCustom.background = "red";
    statosMood = "Good after noon"
} else {
    styleCustom.color = "gold";
    styleCustom.background = "grey"

}


function MyClock() {
    return( <div className="div">
        <h1 style={styleCustom}> {statosMood} </h1>
            <div style={styleCustom}>
             {`The time is ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} now`}
            </div>
         </div>
    )

}
export default MyClock