// ref - https://code.visualstudio.com/docs/typescript/typescript-tutorial

import CircularDoubleyLinkedList from './CircularDoubleyLinkedList';

console.log('Hello World');

const myList = new CircularDoubleyLinkedList('Circlar List', 'double linked, circular, linked list');
console.log('inserted data: ' + myList.insertAtStart("winter"));
console.log(myList.remove("winter"));
console.log(myList.remove("hohohoho"));