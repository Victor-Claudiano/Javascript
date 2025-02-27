/**
 * O que é uma Árvore em JavaScript? 🌳
Uma árvore é uma estrutura de dados hierárquica composta por nós. Cada nó pode ter zero ou mais filhos, e o primeiro nó da árvore é chamado de raiz.

Quando Usar Árvores?
Quando precisar organizar dados em uma estrutura hierárquica, como menus ou arquivos em um sistema.
Para pesquisas rápidas, como em Árvores de Busca Binária (BST).
Para processamento de expressões matemáticas ou construção de jogos (Árvores de Decisão).
 */


/**
 * Exemplos utilizando uma Árvore Binária de Busca (BST) com times de futebol ⚽
 */

// Definição do Nó da Árvore
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Implementação da Árvore Binária de Busca (BST)
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    search(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) return true;
            current = value < current.value ? current.left : current.right;
        }
        return false;
    }

    inorderTraversal(node = this.root) {
        if (node) {
            this.inorderTraversal(node.left);
            console.log(node.value);
            this.inorderTraversal(node.right);
        }
    }
}

// Criando a árvore e inserindo times de futebol
const bst = new BinarySearchTree();
bst.insert("Flamengo");
bst.insert("Palmeiras");
bst.insert("São Paulo");
bst.insert("Corinthians");
bst.insert("Vasco");

// Exibindo os times em ordem alfabética (inorder traversal)
console.log("Times em ordem alfabética:");
bst.inorderTraversal();

// Buscando por um time específico
console.log("O time Flamengo está na árvore?", bst.search("Flamengo")); // true
console.log("O time Botafogo está na árvore?", bst.search("Botafogo")); // false
