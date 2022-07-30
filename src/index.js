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
		if(otk.includes(str[i])){
			stek.push(str[i]);
		}else{
      	if(znk.includes(str[i])){
        	continue;
      	}
      let topE = stek[stek.length-1];
      	if(komSkob[topE] == str[i] ){
				stek.pop();
      	}
    	}
    
	}
	return stek.length === 0;
}
