var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// 

var search =1111
isFound =false
for(i=0;i<n.length;i++){
if(n[i]==search){
    console.log('Number found at index is '+i)
    isFound = true
    break
}
}
if(!isFound){
console.log('Number not found')
}