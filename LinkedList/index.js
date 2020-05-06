class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{

    constructor(head = null, size = 0){
        this.head = head;
        this.size = size;
    }

    insertData = (data) => {
        this.head = new Node(data, this.head);
        this.size++;
    }

    insertLast = data => {

        const node = new Node(data);
        let current;
        
        if(!this.head){
            this.head = node;
        }

        else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }

        this.size++;
    }

    insertAt(data, index){

        if(index > 0 && index > this.size){
            return 'Index out of bound';
        }

        if(index === 0){
            this.insertData(data);
            return;
        }

        const node = new Node();
        let current, previous;
        let count = 0;

        current = this.head;

        while(count < index){
            
        }
    }

    printData = () => {
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

}

const node1 = new Node(100);

const ll = new LinkedList();

ll.insertData(100);
ll.insertData(200);
ll.insertData(300);
ll.insertData(400);
ll.insertLast(500);

ll.printData();




















// const node1 = {
//     name: 'React'
// }

// const node2 = {
//     name: 'Angular'
// }

// node2.next = node1;

// console.log(node2);