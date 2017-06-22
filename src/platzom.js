const platzom = (word) => {

	let newWord = word

	newWord = ruleOne(newWord)
	newWord = ruleTwo(newWord)
	newWord = ruleThree(newWord)
	newWord = ruleFour(newWord, word)

	return newWord
}


/* 
	This rule removes "ar"(case insentive) from the word 
	@param word Represents the word you want to apply the rule
	@return Word without "ar"
*/
const ruleOne = (word) => {

	if(typeof(word) == undefined || word == null)
		return
	
	if(word < 2)
		return word;

	let newWord = word

	if(word.toLowerCase().endsWith('ar')){
		newWord = word.substring(0, word.length - 2)
	}
	
	return newWord
}

/* 
	This rule append "pe"(case insensitive) to the word if and only if starts with z (case insensitive)
	@param word Represents the word you want to apply the rule
	@return Word with "pe" appended
*/
const ruleTwo = (word) => {

	if(typeof(word) == undefined || word == null)
		return

	if(word < 2)
		return word;

	let newWord = word
	
	if(word.toLowerCase().startsWith('z')){
		newWord = word + 'pe'
	}
	
	return newWord
}

/* 
	This rule splits the word in two parts from the middle if the word contains ten or more characters
	@param word Represents the word you want to apply the rule
	@return Word splitted
*/
const ruleThree = (word) => {
	

	if(typeof(word) == undefined || word == null)
		return

	let newWord = word

	if(word.length >= 10){
		let firstHalf = word.slice(0, Math.ceil(word.length / 2))
		let secondHalf = word.slice(Math.ceil(word.length / 2), Math.ceil(word.length))
		newWord = `${firstHalf}-${secondHalf}`
	}

	return newWord
}

/* 
	This rule splits the word in two parts from the middle
	@param word Represents the word you want to apply the rule
	@return Word splitted
*/
const ruleFour = (currentWord, sourceWord) => {
	
	if(typeof(sourceWord) == undefined || sourceWord == null)
		return

	if(sourceWord == '')
		return sourceWord

	if(sourceWord.length < 2)
		return currentWord

	let newWord = currentWord
	if(reverse(sourceWord) == sourceWord){
		newWord = minMay(sourceWord)
	}

	return newWord
}


/* Reverse a word 

   @param word The Word to reverse
   @return Reversed word
*/
const reverse = (word) => word.split('').reverse().join('')

/*
	Change each odd character to upper case

	@param word Source word
	@return Transformed word
*/
const minMay = (word) => {
	
	let newWord = ''

	let i = 0
	let capitalize = true
	for(i; i < word.length; i++){
		newWord += capitalize ? word[i].toUpperCase() : word[i].toLowerCase()
		capitalize = !capitalize;
	}

	return newWord
}

export default platzom