import {levelOrder} from './levelorder.js';
import treeFactory from './treefactory.js';

export const isBalancedAndRebalance = () => {
    const isBalanced = (node) => {

        const checkTree = (node) => {
            if (node == null) {return 0};
    
            const left = checkTree(node.getLeft());
            if (left == -1) {return -1}
    
            const right = checkTree(node.getRight())
            if (right == -1) {return -1}
    
            if (Math.abs(left - right) > 1) {return -1}
            return (Math.max(left, right) + 1);
        }
    
        const HEIGHT = checkTree(node);
        if (checkTree(node) == -1) {return console.log("Not Balanced")};
    
        console.log(HEIGHT - 1);
        return HEIGHT - 1;
    }
    
    const reBalance = (node) => {
        const node_array = levelOrder().levelOrderRecursion(node);
        const rebalanced_tree = treeFactory(node_array, 0, node_array.length - 1);
        return rebalanced_tree;
    }

    return {isBalanced, reBalance}
}
