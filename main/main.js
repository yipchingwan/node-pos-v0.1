

module.exports = function printInventory(inputs){
	let result = '***<没钱赚商店>购物清单***\n';
	let count=0;
	let total=0;
	let tmp = [];
	let lastIndex;

	for(let i = 0 ; i<inputs.length;i++){

		if(!tmp.includes(inputs[i].barcode)){
			tmp.push(inputs[i].barcode);
		}

		
	}
	for(let i = 0 ; i<tmp.length; i++){
		for(let j = 0 ; j<inputs.length ; j++){
			if(tmp[i]===(inputs[j].barcode)){
				count++;
				lastIndex = j
			}
		}
		result += '名称：'+inputs[lastIndex].name+'，数量：'+count+inputs[lastIndex].unit+'，单价：'+inputs[lastIndex].price.toFixed(2)+'(元)，小计：'+(count*inputs[lastIndex].price).toFixed(2)+'(元)\n';
		total +=count*inputs[lastIndex].price;
		count=0;


	}
	result +='----------------------\n' +
					 '总计：'+total.toFixed(2)+'(元)\n' +
					 '**********************';
	return result;
}