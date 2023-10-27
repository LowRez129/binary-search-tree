import { noConflict } from "lodash";

export const levelOrder = () => {
    const levelOrderIteration = (node) => {
		if (node == null) {return};
		let array = [];
		let level_array = [];
		array.push(node);

		while (array.length != 0) {
			let current = array[0];
			if (current.getLeft() != null) {array.push(current.getLeft())};
			if (current.getRight() != null) {array.push(current.getRight())};
			level_array.push(array.shift().value);
		}

		console.log(level_array);
		return level_array;
	}

	const levelOrderRecursion = (node) => {
		if (node == null) {return};
		let node_array = [];
		node_array.push(node.value);

		function recurse (node) {
			if (node == null) {return};
			//node_array.push(node);

			if (node.getLeft() != null) {node_array.push(node.getLeft().value)};
			if (node.getRight() != null) {node_array.push(node.getRight().value)};

			if (node.getLeft() != null) {recurse(node.getLeft())};
			if (node.getRight() != null) {recurse(node.getRight())};
		}

		recurse(node);
		console.log(node_array);
		return node_array;
	}

    return {levelOrderIteration, levelOrderRecursion};
}