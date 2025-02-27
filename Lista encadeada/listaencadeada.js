/**
 * O que é uma Lista Encadeada?
Uma lista encadeada é uma estrutura de dados linear composta por nós, onde cada nó contém um valor e um ponteiro 
para o próximo nó (ou para o anterior, no caso de listas duplamente encadeadas). Diferente de arrays, 
as listas encadeadas não armazenam elementos de forma contígua na memória.

Quando Usar uma Lista Encadeada?
Quando a quantidade de elementos pode variar frequentemente.
Quando é necessário evitar realocações de memória, como ocorre com arrays ao atingir o limite de capacidade.
Para inserções e remoções frequentes, especialmente no início ou meio da estrutura.
*/


/**
 * Lista Encadeada em JavaScript
 * 
 * Inclui exemplos de:
 * - Lista encadeada simples
 * - Lista encadeada com remoção
 * - Lista duplamente encadeada
 */

// Definição do Nó para Lista Encadeada Simples
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Implementação da Lista Encadeada Simples
class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    remove(value) {
        if (!this.head) return;
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
        }
    }

    print() {
        let current = this.head;
        let output = "";
        while (current) {
            output += current.value + " -> ";
            current = current.next;
        }
        console.log(output + "null");
    }
}

// Definição do Nó para Lista Duplamente Encadeada
class DoublyNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

// Implementação da Lista Duplamente Encadeada
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new DoublyNode(value);
        if (!this.head) {
            this.head = this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    printForward() {
        let current = this.head;
        let output = "";
        while (current) {
            output += current.value + " <-> ";
            current = current.next;
        }
        console.log(output + "null");
    }

    printBackward() {
        let current = this.tail;
        let output = "";
        while (current) {
            output += current.value + " <-> ";
            current = current.prev;
        }
        console.log(output + "null");
    }
}

// Exemplo de Uso
console.log("Lista Encadeada Simples:");
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print();
list.remove(20);
list.print();

console.log("\nLista Duplamente Encadeada:");
const dList = new DoublyLinkedList(); // Está criando uma nova lista duplamente encadeada
dList.append(1);
dList.append(2);
dList.append(3);
dList.printForward();
dList.printBackward();
