export default function nodeFactory (value) {
    let left;
    let right;

    function setLeft (node){ left = node; }
    function setRight (node) { right = node; }
    function getLeft () { return left; }
    function getRight () { return right; }

    return {value, setLeft, setRight, getLeft, getRight};
}

