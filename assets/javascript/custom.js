
var enroll = document.getElementsByClassName("enroll-button");




for(i=0; i<=enroll.length; i++){
    enroll[i].addEventListener("click", function(){
        if(this.textContent==="Enrolled"){
            alert("You already enrolled");
        }
        else{
            alert("Thanks for enroll in this course");
            this.textContent = "Enrolled";
            this.style.backgroundColor = "#e74c3c";
        }
        
    });
}




var paybtn =document.getElementById("payment-button");

paybtn.addEventListener("click",function(){
    alert("hello");
})