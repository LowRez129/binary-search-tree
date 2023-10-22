export default function nodeFactory (value) {
    let left = null;
    let right = null;

    function setLeft (node){ left = node; }
    function setRight (node) { right = node; }
    function getLeft () { return left; }
    function getRight () { return right; }

    return {value, setLeft, setRight, getLeft, getRight};
}

