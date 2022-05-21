
export class Node {
    constructor(public data: string,  public prev: Node | null, public next: Node | null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }

    cleanUp() {
        this.data = "";
        this.next = null;
        this.prev = null;
    }

    logData() {
        console.log("|" + this.data + "|");
    }
}