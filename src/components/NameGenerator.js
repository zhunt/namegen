/**
 * Created by zh80138 on 08/02/2018.
 */


//import data from '../names.json';

const data = require('../names.json');



class NameGenerator {

    constructor(word1 = null, word2 = null ) {
        this.word1 = word1;
        this.word2 = word2;

        this.names = data.names;
        this.verbs = data.verbs;

        let wordList = []; wordList.push(word1); wordList.push(word2);
        this.wordList = wordList;
    }

    getName(maxNames = 10) {

        let newNamesList = [];
        let counter = 0;

        // if less than max names and counter < maxnames * 2, repeat
        while( newNamesList.length < maxNames && counter <  (maxNames * 2) ) {
            // randomly pick a method for generating a name
            let word = '';
            switch ( Math.ceil(Math.random() * 4) ) {
                case 1:
                    word = this.getWordMethod1();
                    break;
                case 2:
                    word = this.getWordMethod2();
                    break;
                default:
                    // nothing
            }

            if ( word ) {
                // get the returned word.
                // check if it's in the list of names
                if ( newNamesList.indexOf(word) === -1 ) {
                    // if not, add to list, increase counter
                    newNamesList.push(word);

                }
            }



            counter++;



        }


        //newNamesList.push(this.getSetOfWord());
        //newNamesList.push(this.getSetOfWord());
        //newNamesList = [].concat(...newNamesList); // convert multidimensional to single

        return newNamesList;
    };

    /*
    getSetOfWord() {

        let newNamesList = this.wordList.slice();

        newNamesList = newNamesList.map( word => {

            let noun = this.names[Math.floor(Math.random()* this.nouns.length)];
            let verb = this.verbs[Math.floor(Math.random()* this.verbs.length)];

            let userName = `${noun}_${word}_${verb}`;

            return userName;

        } );

        return newNamesList;

    }
*/



    // just add the first and last words together, either one or other first
    getWordMethod1(){

        return this.getSingleName() + this.getSingleName();
        if ( Math.random() > .5) {
            return this.word1 + this.word2;
        } else {
            return this.word2 + this.word1;
        }

    }

    // take first name or second, prefix with word that matches first letter (i.e. sexy Sally)
    getWordMethod2(){
        let baseName = this.getSingleName();

        let verbsOrNames = (Math.random() > .5) ? this.verbs : this.names;

        if ( baseName) {
            let firstLetter = baseName.toLowerCase().charAt(0);

            let verbsArray = this.shuffleArray(verbsOrNames);

            let newWord = verbsArray.find( (element) => {
                return element.toLowerCase().charAt(0) === firstLetter
            } );

            if (newWord) {
                return newWord.trim() + baseName;
            }

        }

    }


    // utilities

    // from: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array?noredirect=1&lq=1
    shuffleArray(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    // get one name from list of names where there might be 1 or 2 names total
    getSingleName(){
        let names = [];

        if (this.word1) names.push(this.word1);
        if (this.word2) names.push(this.word2);

        if ( names.length > 0 ) return names[Math.floor(Math.random()* names.length)].trim();

        return false;
    }


}

export default NameGenerator;