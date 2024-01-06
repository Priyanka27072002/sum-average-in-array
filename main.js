var arr=[1,2,3,4,5];
document.write("Given array is"+[1,2,3,4,5]+"<br>");
sum=0;
for(i=0;i<arr.length;i++){
	sum=sum+arr[i];
	avg=sum/arr.length;
}
document.write("The sum of number in the array is"+" "+sum+"<br>");
document.write("The average of number in the array is"+" "+avg);