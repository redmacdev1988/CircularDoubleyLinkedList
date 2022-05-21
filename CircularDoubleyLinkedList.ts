import { Node } from './Node';

export const EMPTY_LIST = "list is empty";

export default class CircularDoubleyLinkedList {
    
    private head: Node;
    private name: string;
    private description: string;
    private current: Node;

    constructor(newName: string, newDescription: string) {
        this.head = null;
        this.current = null;
        this.name = newName;
        this.description = newDescription;
    }

    // O(1)
    public insertAtEnd(data: string): string { 
        if (!this.head) {
            this.head = new Node(data, null, null);
            this.head.next = this.head;
            this.head.prev = this.head;
            this.current = this.head;
        } else {
            const tmp = new Node(data, this.head.prev, this.head);
            this.head.prev.next = tmp;
            this.head.prev = tmp;
        }
        return data;
    }

    // O(1)
    public insertAtStart(data: string): string {
        if (!this.head) {
            this.head = new Node(data, null, null);
            this.head.next = this.head;
            this.head.prev = this.head;
            this.current = this.head;
        } else {
            const tmp = new Node(data, this.head.prev, this.head); 
            this.head.prev.next = tmp; 
            this.head.prev = tmp;
            this.head = tmp;
        }
        return data;
    }

    // O(1)
    private oneNodeLeft(): boolean {
        return this.head.next === this.head && this.head.prev === this.head;
    }

    // O(n)
    public remove(data: string = "") : string {
        if (!this.head) {
            return EMPTY_LIST;
        }
        let iterator: Node = this.head;
        do {
          if (iterator.data === data) {
              iterator.prev.next = iterator.next;
              iterator.next.prev = iterator.prev;
              if (iterator === this.head) {
                  if (this.oneNodeLeft()) {
                    this.head = null;
                  } else {
                    this.head = iterator.next;
                  }
                  
              }
              iterator.cleanUp();
              return data;
          }
          iterator = iterator.next;
        } while (iterator !== this.head);
        return data;
    }

    public next(): void {
        this.current = this.current.next;
    }

    public prev() : void {
        this.current = this.current.prev;
    }

    public getCurrent(): string  {
        return this.current.data;
    }

    public getHead(): string {
        return this.head ? this.head.data : "";
    }

    public numOfItems(): number {
        if (!this.head) {
            console.log('no more items');
            return 0;
        }
        let counter: number = 0;
        let iterator: Node = this.head;
        do {
          counter++;
          iterator = iterator.next;
        } while (iterator !== this.head);
        return counter;
    }

    public toString(): string {
        if (!this.head) {
            return EMPTY_LIST;
        }
        let iterator: Node = this.head;
        let result: string = '';
        do {
          result += (iterator.next !== this.head) ? `${iterator.data} | ` : `${iterator.data}`;
          iterator = iterator.next;
        } while (iterator !== this.head);
        return result;
    }

}