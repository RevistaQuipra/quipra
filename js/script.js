// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "Retirada da sujeira",
					answer: "Limpeza",
					position: 1,
					orientation: "down",
					startx: 13,
					starty: 1
				},
			 	{
					clue: "Óleo natural formado principalmente por hidrocarbonetos e que possui coloração escura.",
					answer: "Biodegradaveis",
					position: 2,
					orientation: "across",
					startx: 1,
					starty: 2
				},
				{
					clue: "Que podem ser destruídos por agentes biológicos.",
					answer: "Oleosa",
					position: 3,
					orientation: "down",
					startx: 3,
					starty: 2
				},
				{
					clue: "Partes que sobram após o processo de uso de algum produto.",
					answer: "Rios",
					position: 4,
					orientation: "down",
					startx: 3,
					starty: 2
				},
				{
					clue: "Formada pelo agrupamento de diversas moléculas.",
					answer: "Natureza",
					position: 5,
					orientation: "across",
					startx: 2,
					starty: 7
				},
				{
					clue: "Conjunto de elementos do mundo natural.",
					answer: "Estrutura",
					position: 6,
					orientation: "down",
					startx: 7,
					starty: 7
				},
				{
					clue: "Que tem óleo",
					answer: "Residuos",
					position: 7,
					orientation: "across",
					startx: 7,
					starty: 10
				},
				{
					clue: "Que tem óleo",
					answer: "Petroleo",
					position: 7,
					orientation: "across",
					startx: 4,
					starty: 14
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
