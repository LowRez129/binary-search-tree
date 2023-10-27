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
    
    const reBalance = () => {
        
    }

    return {isBalanced, reBalance}
}
