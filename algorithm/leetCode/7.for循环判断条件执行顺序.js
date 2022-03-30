function testFor(){
	for(let i=0;
		(function(){console.log('judgement'); return i< 5})();
		(function(){console.log('increament'); return i++;})()){
		console.log('inner'+ i)
	}
}
testFor();