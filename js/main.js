/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("nowdrop").classList.toggle("displayimp");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.navbars')) {
      var dropdowns = document.getElementsByClassName("smallscreenres");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('displayimp')) {
          openDropdown.classList.remove('displayimp');
        }
      }
    }
  }