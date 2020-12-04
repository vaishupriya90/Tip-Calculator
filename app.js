function calculateTip(){
    let billAmount = document.querySelector(".billAmount").value;
    let servicePercentage = document.querySelector("#serviceSelector").value;
    let noOfPeople =  document.querySelector(".peopleAmount").value;

    if(billAmount === "" || servicePercentage == 0){
        alert("Please enter some values!");
    } 

    if(noOfPeople === "" || noOfPeople <= 1){
        noOfPeople = 1;
        document.getElementById("each").style.display = "none";
    }else{
        document.getElementById("each").style.display = "block";
    }

    let total = (billAmount * servicePercentage) / noOfPeople; 
    total = Math.round(total * 100)/100;
    total = total.toFixed(2);

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


document.getElementById("calculate").addEventListener("click",function(){
    calculateTip();

})