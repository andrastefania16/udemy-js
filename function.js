
function isEvan(x) {
	if ( x % 2===0)
	{
		return ("True");
	}else if (x % 2 !==0){
		return("False");
	}
}



// function factorial(x){
// 	if (x ===0){
// 		return 1;
// }

// 	return x * factorial(x-1);
// }


function factorial(x){
	var result=1
	for( var =i; i< x ,i++){
		return = return * i;
	}
	return result;
}


function kebabToSnake (str) {
	newStr= str.replace(/-/g , "_");
	return newStr;
}