


function copyEmailAddress() {

    var emailAddress = "Cadenhylee@gmail.com";

    navigator.clipboard.writeText(emailAddress);
  
    // Alert the copied text
    alert("Email Address Copied to Clipboard: " + emailAddress);
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}
