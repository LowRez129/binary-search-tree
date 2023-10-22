import _ from 'lodash';
import nodeFactory from './nodefactory.js';
import treeFactory from './treefactory.js';

let array = [1, 2, 3, 4, 5, 6, 7];
const TREE = treeFactory(array, 0, (array.length - 1));

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.getRight() !== null) {
      prettyPrint(node.getRight(), `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.getLeft() !== null) {
      prettyPrint(node.getLeft(), `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  prettyPrint(TREE.root);
