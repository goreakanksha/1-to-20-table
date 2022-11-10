var output:any="";
var i;
var j;
output+="<table border='1' cellspacing='5' cellpadding='5'>";//
for(i=1;i<=10;i++)//outer for loop
{
	output+="<tr>";
	for(j=1;j<=20;j++)//inner for loop
	{
		output+="<td>"+(i*j)+"</td>";
	}
	output+="</tr>";
}
output+="</table>";
document.getElementById('result').innerHTML=output;
