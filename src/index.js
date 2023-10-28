import _ from 'lodash';
import treeFactory from './treefactory.js';
import rngArray from './rng_array.js';

let array = rngArray(100, 7);
const TREE = treeFactory(array, 0, (array.length - 1));
const ROOT = TREE.root;

//TREE.prettyPrint(ROOT);
//TREE.isBalancedAndRebalance().isBalanced(ROOT);
//TREE.depthfirstSearch().preorder(ROOT);
//TREE.depthfirstSearch().inorder(ROOT);
//TREE.depthfirstSearch().postorder(ROOT);
TREE.insertNode(111);
TREE.insertNode(231);
TREE.prettyPrint(TREE.getRoot());
TREE.checkIfBalanced();
TREE.treeRebalance();
TREE.prettyPrint(TREE.getRoot());
TREE.checkIfBalanced();
