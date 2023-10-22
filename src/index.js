import _ from 'lodash';
import treeFactory from './treefactory.js';

let array = [1, 2, 3];
const TREE = treeFactory(array, 0, (array.length - 1));

TREE.insertNode(4);
TREE.prettyPrint(TREE.root);
