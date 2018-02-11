/**
 * Created by zh80138 on 08/02/2018.
 */

//import data from '../names.json';

class NameGenerator {

    constructor(word1, word2) {
        this.word1 = word1;
        this.word2 = word2;

  //      this.nameData = data.names;
    }

    getName = () => {
        return( `${this.word1} ${this.word2}`);
    }

}

export default NameGenerator;