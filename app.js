var d = new Date();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

document.getElementById("title-month").innerHTML = months[d.getMonth()];