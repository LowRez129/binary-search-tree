import _ from 'lodash';
import treeFactory from './treefactory.js';

let array = [3, 6, 9];
const TREE = treeFactory(array, 0, (array.length - 1));
const ROOT = TREE.root;

TREE.insertNode(10);
TREE.insertNode(11);
TREE.prettyPrint(ROOT);
TREE.levelOrder().levelOrderRecursion(ROOT);
TREE.isBalancedAndRebalance().isBalanced(ROOT);
