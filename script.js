let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

/**
* Related CSS:
* - .tab-links::after: Underline animation indicator
* - .active-link: Blue underline effect (width: 50%)
* - .active-tab: Controls visibility of content sections
*/
function opentab(tabname){

   // Remove active state from all tab buttons
    for(tablink of tablinks){
      tablink.classList.remove("active-link");
    } 
    
    // Hide all tab content sections
    for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
    } 

    // Add active state to clicked tab (visual indicator)
    event.currentTarget.classList.add("active-link");
       
    // Show corresponding content section
    document.getElementById(tabname).classList.add("active-tab");
}