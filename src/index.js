import _ from 'lodash';
import treeFactory from './treefactory.js';

let array = [1, 2, 3, 4, 5, 6, 7];
const TREE = treeFactory(array, 0, (array.length - 1));
TREE.prettyPrint(TREE.root);
