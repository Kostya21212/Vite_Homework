function array(arr){
  console.log(arr.sort((a,b) => {
    if( a > b){
        return 1;}
    if( a < b){
        return -1;
    }
    else {
        return 0
    }
    }))

arr.splice(1,4)
return arr
}
console.log(array([1,2,3,4,9,21,6,55,112]))
