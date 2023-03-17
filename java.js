let getStartedBtn = document.getElementById("get-started-btn");
if (localStorage.getItem("getStartedClicked")) {
  getStartedBtn.style.display = "none";
}
getStartedBtn.addEventListener("click", function() {
  localStorage.setItem("getStartedClicked", true);
  getStartedBtn.style.display = "none";
});