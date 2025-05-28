


function ClickOn(){
    let bgcolorval = document.getElementById("bgcolor").value
    let fontcolorval = document.getElementById("fontcolor").value
    let fontsizeval = document.getElementById("fontsize").value
    let fontweightval = document.getElementById("fontweight").value
    let paddingval = document.getElementById("padding").value
    let borderradiusval = document.getElementById("borderradius").value

    let cosbtn1 = document.getElementById("cosbtn")
    cosbtn1.style.backgroundColor=bgcolorval
    cosbtn1.style.color=fontcolorval
    cosbtn1.style.fontSize=fontsizeval
    cosbtn1.style.fontWeight=fontweightval
    cosbtn1.style.padding=paddingval
    cosbtn1.style.borderRadius=borderradiusval

}


