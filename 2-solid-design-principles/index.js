//  SOLID Design principles
//
//  Single Responsibility Principle
//

// A class should have a single primary responsibility,
// and as a consequence it should only have one reason
// that reason being somehow related to its responsibility
///

// In other words, it's a bad idea to add more than one responsibility to a class

const fs = require('fs')

class Journal {
	//
	constructor() {
		this.entries = {} // journal entries to populate
	}

	addEntry(text) {
		// add entry method
		let c = ++Journal.count // incremental journal count, for very single entry
		// Prefix by  the count 'c', and the text
		let entry = `${c}: ${text}` // Generate the entry itself
		// Set of entries
		this.entries[c] = entry
		return c
	}

	removeEntry(index) {
		// remove entry at a particular index
		// Delete entries
		delete this.entries[index]
	}

	toString() {
		// take all the values to the journal object
		// the entries object
		// turn it into one big string line separated
		return Object.values(this.entries).join('\n')
	}
}

Journal.count = 0

class PersistenceManager {
	preprocess(j) {
		//
	}
	saveToFile(journal, filename) {
		fs.writeFileSync(filename, journal.toString())
	}
}

let j = new Journal() // make a new journal
j.addEntry('I cried today.') // add a new entry
j.addEntry('I ate a bug.')
// print it
console.log(j.toString())

// console results
// 1: I cried today.
// 2: I ate a bug.

// You also want to see the journal

let p = new PersistenceManager()
let filename = 'c:/temp/journal.txt'
p.saveToFile(j, filename)

// separation of concerns
