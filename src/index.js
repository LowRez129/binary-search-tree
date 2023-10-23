import _ from 'lodash';
import treeFactory from './treefactory.js';

let array = [1, 2, 3, 5, 7];
const TREE = treeFactory(array, 0, (array.length - 1));

TREE.insertNode(4);
TREE.prettyPrint(TREE.root)
TREE.deleteNode(5);
TREE.prettyPrint(TREE.root);
//TREE.findNode(4);
