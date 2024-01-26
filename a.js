const duplicateCharacters=(str) =>{
	let result = [];

	for (let i = 0; i < str.length; i++) {
		for (let j = i + 1; j < str.length; j++) {
			if (str[i] === str[j]) {
				result.push(str[i]);
			}
		}
    }

    return result;
}
console.log(duplicateCharacters("hello world"))