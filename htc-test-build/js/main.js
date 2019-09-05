$(".tab").click(function() {
	$(".tab").removeClass("activeTab");
    $(this).addClass("activeTab");
	$(".tab_item").hide().eq($(this).index()).slideDown()})
    .eq(0).addClass("activeTab");

$(".tab_item").not(":first").hide();

var containerTabs = document.querySelector(".containerTabs");
var profileName = document.querySelector(".profile__data-name");
var tel = document.querySelector(".tel");
var email = document.querySelector(".email");
var changeInfo= document.querySelector(".change-info");
var changeField = document.querySelector(".change-field");
var changeButton = document.querySelector(".change-button");

function change(element) {
    element.onclick = function() {
        changeInfo.style.display = "block";
        changeField.value = element.textContent;

        
        changeButton.onclick = function() {
            element.textContent = changeField.value;
            changeInfo.style.display = "none";
        }
    } 
}

change(profileName);
change(tel);
change(email);
