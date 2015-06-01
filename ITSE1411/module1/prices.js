var bv6cost = 12.00
var bv8cost = 15.00
var ch4cost = 8.00
var ch6cost = 11.00
var oc8cost = 20
var oc10cost = 25
var taxCost = 8
var shipCost = 12

document.write("<div>")
document.write("<ul>");
document.write("<b>Bud Vases</b>");
document.write("<ul><li>");
document.write("6 \" Bud Vase - $" + bv6cost.toFixed(2));
document.write("</li>");
document.write("<li>");
document.write("8 \" Bud Vase - $" + bv8cost.toFixed(2));
document.write("</li></ul>");
document.write("<br>");

document.write("<b>Candle Holders</b>");
document.write("<ul><li>");
document.write("4 \" Candle Holder - $" + bv8cost.toFixed(2));
document.write("</li>");
document.write("<li>");
document.write("6 \" Candle Holder - $" + bv6cost.toFixed(2));
document.write("</li></ul>");
document.write("<br>");

document.write("<b>Oil Candles</b>");
document.write("<ul><li>");
document.write(" 8 \" Oil Candle - $" + oc8cost.toFixed(2));
document.write("</li>");
document.write("<li>");
document.write("10 \" Oil Candle - $" + oc10cost.toFixed(2));
document.write("</li></ul>");
document.write("</ul>");
document.write("</div>")

document.write("- Sales Tax of " + taxCost.toFixed(0) + "\% is additional for Texas residents");
document.write("<br>- Shipping cost of $" + shipCost.toFixed(2) + " is additional");