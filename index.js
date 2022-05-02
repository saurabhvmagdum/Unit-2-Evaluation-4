// write js code here corresponding to index.html
// You should add submit event on the form
var filledname = document.getElementById("matchNum").value;
 var filledteamA = document.getElementById("teamA").value;
 var filledteamB = document.getElementById("teamB").value;
 var filleddate = document.getElementById("date").value;
 var filledvenue = document.getElementById("venue").value;
 var submitData = document.getElementById("input")
 submitData.addEventListener("click",selectSubmit);
 var schedule={
    name : filledname.value,
    teamA: filledteamA.value,
    teamB : filledteamB.value,
    date : filleddate.value,
    venue: filledvenue.value
  };

 function selectSubmit()
 {
   var localobj = localStorage.setItem("schedule",stringify());
}