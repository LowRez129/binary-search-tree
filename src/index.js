import _ from 'lodash';
import treeFactory from './treefactory.js';

let array = [3, 6, 9];
const TREE = treeFactory(array, 0, (array.length - 1));

TREE.insertNode(10);
TREE.insertNode(11);
TREE.prettyPrint(TREE.root);
TREE.depthfirstSearch().getDepth(TREE.root, 11);
//TREE.depthfirstSearch().getHeight(TREE.root);
//TREE.levelOrderIteration(TREE.root);
//TREE.findNode(4);
