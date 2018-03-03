/**
 * Created by zh80138 on 08/02/2018.
 */


//import data from '../names.json';

const data = require('../names.json');



class NameGenerator {

    constructor(word1 = null, word2 = null ) {
        this.word1 = word1;
        this.word2 = word2;



        //this.nameData = data.names;

        this.nouns = data.nouns;
        this.verbs = data.verbs;

        let wordList = []; wordList.push(word1); wordList.push(word2);
        this.wordList = wordList;
    }

    getName() {

        let newNamesList = [];
        newNamesList.push(this.getSetOfWord());
        newNamesList.push(this.getSetOfWord());

        /*
        let newNamesList = this.wordList;

        newNamesList = newNamesList.map( word => {

            let noun = this.nouns[Math.floor(Math.random()* this.nouns.length)];
            let verb = this.verbs[Math.floor(Math.random()* this.verbs.length)];

            let userName = `${noun}_${word}_${verb}`;

            return userName;

        } );
        */

        newNamesList = [].concat(...newNamesList); // convert multidimensional to single

        return newNamesList;
    };

    getSetOfWord() {

        let newNamesList = this.wordList.slice();

        newNamesList = newNamesList.map( word => {

            let noun = this.nouns[Math.floor(Math.random()* this.nouns.length)];
            let verb = this.verbs[Math.floor(Math.random()* this.verbs.length)];

            let userName = `${noun}_${word}_${verb}`;

            return userName;

        } );

        return newNamesList;

    }

}

export default NameGenerator;