


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

$('.awesome-tooltip').tooltip({
    placement: 'left'
});  
$('body').scrollspy({ 
    target: '#mainnav', 
    offset: 000
});  
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {                   
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
            return false;
        }
    }
});    
