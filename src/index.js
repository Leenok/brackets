module.exports = function check(str, bracketsConfig) {
  let otk = ['(', '[', '{'];
	let znk =[',', "'", " "];
	let komSkob = {
	  ['(']:')',
	  ['[']:']',
	  ['{']:'}',
	  ["'"]:"'",
	}
	let stek = [];
	for(let i=0; i<str.length; i++){
		let topE = stek[stek.length-1];
		if(Number.isInteger(+str[i]) || str[i]=="|"){
			if(str[i]==topE){
			  stek.pop();
			}else{
			  stek.push(str[i]);
			}	  
		}	  
		else{
			if(otk.includes(str[i])){
				stek.push(str[i]);
			}else{
				if(stek.length === 0){
					return false;
				}
				if(znk.includes(str[i])){
					continue;
				}
				if(komSkob[topE] == str[i] ){
						stek.pop();
				}
			}
		}
    
	}
	return stek.length === 0;
}
