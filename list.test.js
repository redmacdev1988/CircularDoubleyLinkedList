import CircularDoubleyLinkedList from './CircularDoubleyLinkedList';
import { EMPTY_LIST } from './CircularDoubleyLinkedList';
// ref - https://jestjs.io/docs/getting-started#using-typescript

describe("List Test #1 - Circular Doubley Linked List", () => {
    let list = new CircularDoubleyLinkedList();
    test("List Instantiation", () => {
        expect(list).toBeDefined();
    });

    test(`insertAtStart - seasons`, () => {
        list.insertAtStart("winter");
        expect(list.getHead()).toBe("winter");
        list.insertAtStart("fall");
        expect(list.getHead()).toBe("fall");
        list.insertAtStart("summer");
        expect(list.getHead()).toBe("summer");
        list.insertAtStart("spring");
        expect(list.getHead()).toBe("spring");
        expect(list.numOfItems()).toBe(4);
    });

    test(`insertAtEnd - holidays`, () => {
        list.insertAtEnd("xmas");
        expect(list.getHead()).toBe("spring");
        list.insertAtEnd("new year");
        expect(list.getHead()).toBe("spring");
        list.insertAtEnd("cny");
        expect(list.getHead()).toBe("spring");
        expect(list.numOfItems()).toBe(7);
    });

    test(`remove`, () => {
        expect(list.remove("haha")).toBe("");
        expect(list.remove("fall")).toBe("fall");
        expect(list.remove("spring")).toBe("spring");
        expect(list.remove("xmas")).toBe("xmas");
        expect(list.remove("winter")).toBe("winter");
        expect(list.remove("summer")).toBe("summer");
        expect(list.remove("cny")).toBe("cny");
        expect(list.remove("new year")).toBe("new year");
        expect(list.numOfItems()).toBe(0);
        expect(list.getHead()).toBeFalsy();
    
    });

});