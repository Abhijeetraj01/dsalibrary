class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;        
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree {
    private root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    //insert a new value into the BST
    insert(value: number): void {
        this.root = this.insertNode(this.root, value);
    }

    private insertNode(
        node: TreeNode | null,
        value: number
    ): TreeNode {
        if (node === null) {
            return new TreeNode(value);
        }
        if(value<node.value) {
            node.left = this.insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertNode(node.right, value);
        }
        return node;
    }

    //check if a value exists in the BST
    contains(value: number): boolean {
        return this.containsNode(this.root, value);
    }

    private containsNode(
        node: TreeNode | null,
        value: number
    ): boolean {

        if (node === null) {
            return false;
        }

        if (value === node.value) {
            return true;
        }

        if (value < node.value) {
            return this.containsNode(node.left, value);
        }

        return this.containsNode(node.right, value);
    }

    //inorder traversal of the BST

    inOrder(): void {
        this.inOrderTraversal(this.root);
    }
    private inOrderTraversal(
        node: TreeNode | null
    ): void {

        if (node === null) {
            return;
        }
        this.inOrderTraversal(node.left);           //recursion
        console.log(node.value);
        this.inOrderTraversal(node.right);
    }

    //preorder traversal of the BST
    preorder(): void {
        this.preOrderTraversal(this.root);
    }
    private preOrderTraversal(
        node: TreeNode | null
    ): void {
        if (node === null) {
            return;
        }
        console.log(node.value);
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
    }

    //postorder traversal of the BST
    postorder(): void {
        this.postOrderTraversal(this.root);
    }
    private postOrderTraversal(
        node: TreeNode | null
    ): void {
        if (node === null) {
            return;
        }
        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.value);
    }

    //minimum value in the BST
    findMin(): number | null {
        if (this.root === null) {
            return null;
        }
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.value;
    }

    //maximum value in the BST
    findMax(): number | null {
        if (this.root === null) {
            return null;
        }
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.value;
    }

    //delete a node from the BST
    delete(value: number): void {
        this.root = this.deleteNode(this.root, value);
    }

    private deleteNode(
        node: TreeNode | null,
        value: number
    ): TreeNode | null {
        if (node === null) {
            return null;
        }

        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
        } else {
            // Node to be deleted found
            if (node.left === null) {
                return node.right;
            }
            if (node.right === null) {
                return node.left;
            }

            // Node with two children: Get the inorder successor
            const successor = this.findMinNode(node.right);
            node.value = successor.value;
            node.right = this.deleteNode(node.right, successor.value);
        }

        return node;
    }

    private findMinNode(node: TreeNode | null): TreeNode {
        if (node === null) {
            throw new Error("Node cannot be null");
        }
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }
}
