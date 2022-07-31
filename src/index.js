module.exports = function check(str, bracketsConfig) {
 let stek = [];
	let otk =[];
	let komb = {  };
   	for(let it in bracketsConfig){
     	otk.push(bracketsConfig[it][0]);
     	komb[bracketsConfig[it][0]]=bracketsConfig[it][1];
   	}

	for(let i=0; i<str.length; i++){
		let topE = stek[stek.length-1] || "";
		if(komb[str[i]]==str[i]){
			if(stek.length === 0 || topE != str[i]){
			  stek.push(str[i]);
			}else{
				stek.pop();
			}
		}else{
			if(otk.includes(str[i])){
					  stek.push(str[i]);
			}else{
				if(stek.length === 0){
					return false;
				}
				if(komb[topE] == str[i] ){
					stek.pop();
				}
			}
		}
		  
	}

	return stek.length === 0;
}
