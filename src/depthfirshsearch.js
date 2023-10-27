import {buildTree} from './nodefactory.js';

export const depthfirstSearch = () => {
    const preorder = (node) => {
        if (node == null) {return};
        console.log(node.value);
        preorder(node.getLeft());
        preorder(node.getRight());
    }

    const inorder = (node) => {
        if (node == null) {return};
        inorder(node.getLeft());
        console.log(node.value);
        inorder(node.getRight());
    }

    const postorder = (node) => {
        if (node == null) {return};
        postorder(node.getLeft());
        postorder(node.getRight());
        console.log(node.value);
    }

    return {preorder, inorder, postorder};
}