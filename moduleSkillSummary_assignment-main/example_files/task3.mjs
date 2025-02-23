import tree from './nodes.json' assert { type: 'json' };

function calculateSum(node) {
    if (node === null) return 0;
    return node.value + calculateSum(node.left) + calculateSum(node.right);
}

function findDeepestLevel(node) {
    if (node === null) return 0;
    const leftDepth = findDeepestLevel(node.left);
    const rightDepth = findDeepestLevel(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
}

function countNodes(node) {
    if (node === null) return 0;
    return 1 + countNodes(node.left) + countNodes(node.right);
}

const sum = calculateSum(tree);
const deepestLevel = findDeepestLevel(tree);
const totalNodes = countNodes(tree);

console.log(`Sum of all node values: ${sum}`);
console.log(`Deepest level of tree: ${deepestLevel}`);
console.log(`Total number of nodes: ${totalNodes}`);
