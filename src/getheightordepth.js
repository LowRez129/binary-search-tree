export const getHeightOrDepth = () => {
    const getHeight = (node) => {
        function heightCalculate (node) {
            if (node == null) {return -1};
            return Math.max(heightCalculate(node.getLeft()), heightCalculate(node.getRight())) + 1;
        }

        const HEIGHT = heightCalculate(node);
        console.log(HEIGHT);
        return HEIGHT;
    }

    const getDepth = (node, value) => {
        let depth = 0;
        let height = getHeight(node);

        const depthMeasure = (node, value) => {
            if (node == null) {return};
            if (node.value == value) {
                return console.log(`Depth: ${depth}`, `Height: ${height - depth}`);
            };
            
            depth += 1;
            depthMeasure(node.getLeft(), value);
            depthMeasure(node.getRight(), value);
            depth -= 1;
        }

        depthMeasure(node, value);
        return depth;
    }

    return {getHeight, getDepth};
}