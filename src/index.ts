import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const charactersCollection = new CharactersCollection('xaay');
charactersCollection.sort();
console.log(charactersCollection.data);