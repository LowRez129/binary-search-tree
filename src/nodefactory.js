function nodeFactory (value) {
    let left = null;
    let right = null;

    function setLeft (node){ left = node; }
    function setRight (node) { right = node; }
    function getLeft () { return left; }
    function getRight () { return right; }

    return {value, setLeft, setRight, getLeft, getRight};
}

function buildTree (array, start, end) {
    if (start > end) {return null};
    const mid = parseInt((start + end)/2);
    const root = nodeFactory(array[mid]);

    root.setLeft(buildTree(array, start, (mid - 1)));
    root.setRight(buildTree(array, (mid + 1), end));

    return root;
}

export {nodeFactory, buildTree};
