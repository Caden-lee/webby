


function copyEmailAddress() {

    var emailAddress = "Cadenhylee@gmail.com";

    navigator.clipboard
      .writeText(emailAddress)
      .then(() => {
        alert("successfully copied: " + emailAddress);
      })
      .catch(() => {
        alert("something went wrong, copy of email address failed: " + emailAddress);
      });
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}
