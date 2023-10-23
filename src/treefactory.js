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

    const insertNode = (value) => {
        const NEW_NODE = nodeFactory(value);
        let current_node = root;

        while (true) {
			if (NEW_NODE.value == current_node.value) {
				console.log("This node exist!");
				break;
			}

			if (NEW_NODE.value < current_node.value) {
				if (null == current_node.getLeft()) { 
					current_node.setLeft(NEW_NODE);
					break; 
				}
				else { current_node = current_node.getLeft(); }
			}
			else {
				if (null == current_node.getRight()) { 
					current_node.setRight(NEW_NODE);
					break; 
				}
				else { current_node = current_node.getRight(); }
			}
        }
    }

	const deleteNode = (value) => {
		let previous_node = nodeFactory(null);
		let current_node = root;
        while (true) {
			if (value == current_node.value) {
				//Prevent deletion of root node.
				if (value == root.value) {
					console.log("You cant delete the root node!");
					break;
				};

				//Find current node from previous node by comparing left and right to the current node.
				if (previous_node.getLeft() == current_node) {
					previous_node.setLeft(null);

					break;
				}
				else if (previous_node.getRight() == current_node){
					previous_node.setRight(null);
					break;
				}
			}
        }
	}

	const findNode = (value) => {
		let previous_node = nodeFactory(null);
		let current_node = root;
		
        while (true) {
			if (current_node == null) {
				console.log(`${value} does not exist in the tree.`);
				break;
			}

			if (value == current_node.value) {
				console.log(current_node);
				break;
			}

			if (value < current_node.value) {
				previous_node = current_node;
				current_node = current_node.getLeft();
			}
			else if (value > current_node.value) {
				previous_node = current_node;
				current_node = current_node.getRight();
			}
        }

		console.log(previous_node, current_node);
		return {previous_node, current_node}
	}

    return {root, prettyPrint, insertNode, deleteNode,findNode};
}