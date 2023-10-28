import { max } from 'lodash';
import {nodeFactory, buildTree} from './nodefactory.js';
import {levelOrder} from './levelorder.js';
import {depthfirstSearch} from './depthfirshsearch.js';
import {getHeightOrDepth} from './getheightordepth.js';
import {isBalanced, reBalance} from './isbalancedandrebalance.js';

export default function treeFactory (array, start, end) {
    let root = buildTree(array, start, end);
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
		const node = findNode(value);
		const previous = node.previous_node;
		const current = node.current_node;
		
		//Prevent deletion of root node.
		if (value == root.value) {
			console.log("You cant delete the root node!");
			return;
		};
		
		//Compare previous attributes, left and right to find child/current node.
		if (previous.getLeft() == current) {
			if (current.getLeft() != null) {
				if (current.getRight() != null) {
					previous.setLeft(current.getLeft());
					previous.getLeft().setRight(current.getRight());
					return
				}
				else {
					previous.setLeft(current.getLeft());
					return;
				}
			}
			else {
				previous.setLeft(null);
				return;
			}
		}
		else if (previous.getRight() == current){
			if (current.getRight() != null) {
				if (current.getLeft() != null) {
					previous.setRight(current.getRight());
					previous.getRight().setLeft(current.getLeft());
					return
				}
				else {
					previous.setLeft(current.getLeft());
					return;
				}
			}
			else {
				previous.setRight(null);
				return;
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

		console.log(current_node.value);
		return {previous_node, current_node}
	}

	const checkIfBalanced = () => {
		//console.log();
		isBalanced(root);
	};

	const treeRebalance = () => {
		return root = reBalance(root);
	}

	const getRoot = () => {return root};

    return {
		getRoot, 
		prettyPrint, 
		insertNode, 
		deleteNode, 
		findNode, 
		levelOrder,
		depthfirstSearch,
		getHeightOrDepth,
		checkIfBalanced,
		treeRebalance,
	};
}