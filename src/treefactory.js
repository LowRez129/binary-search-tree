import nodeFactory from './nodefactory.js'

function buildTree (array, start, end) {
    if (start > end) {return null};
    const mid = parseInt((start + end)/2);
    const root = nodeFactory(array[mid]);

    root.setLeft(buildTree(array, start, (mid - 1)));
    root.setRight(buildTree(array, (mid + 1), end));

    return root;
}

export default function treeFactory (array, start, end) {
    const root = buildTree(array, start, end);
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

    return {root, prettyPrint};
}