function compute() // activates on clicking 'compute interest' button
{
    // Get values of inputs for amount, rate, and years:
    var principal = document.getElementById("principal").value;
    if (principal <= 0) { // Check for a positive number
            alert("Enter a positive number");
            principal.focus();
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    // Calculate interest:
    var interest = principal * years * rate /100;
    // Calculate end year:
    var year = new Date().getFullYear()+parseInt(years);
    // Update (highlighted) output text:
    var res = document.getElementById("result").innerHTML="\<br\>\<br\>If you deposit " + principal + ",\<br\>at an interest rate of " + rate + "%\<br\>You will receive an amount of " + interest + ",\<br\>in the year " + year + "\<br\>";
}

function updateRate() // activates upon using the slider
{
    // Get value of slider:
    var rateval = document.getElementById("rate").value;
    // Display new value of slider:
    document.getElementById("rate_val").innerText=rateval+"%";
}
        