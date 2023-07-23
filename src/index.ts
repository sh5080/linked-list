// Linked List 노드 인터페이스
interface Node<T> {
  data: T;
  next: Node<T> | null;
}

// Linked List 클래스
class LinkedList<T> {
  private head: Node<T> | null;

  constructor() {
    this.head = null;
  }

  // 노드를 맨 끝에 추가하는 메서드
  append(data: T): void {
    const newNode: Node<T> = { data, next: null };

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

  // 노드를 특정 위치에 삽입하는 메서드
  insert(data: T, position: number): void {
    if (position === 0) {
      const newNode: Node<T> = { data, next: this.head };
      this.head = newNode;
      return;
    }

    let current = this.head;
    let prev: Node<T> | null = null;
    let index = 0;
    while (current && index < position) {
      prev = current;
      current = current.next;
      index++;
    }

    const newNode: Node<T> = { data, next: current };
    if (prev) {
      prev.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  // 노드를 삭제하는 메서드
  remove(data: T): void {
    if (!this.head) return;

    let current: Node<T> | null = this.head;
    let prev: Node<T> | null = null;
    while (current && current.data !== data) {
      prev = current;
      current = current.next;
    }

    if (current) {
      if (prev) {
        prev.next = current.next;
      } else {
        this.head = current.next;
      }
    }
  }

  // Linked List를 출력하는 메서드
  print(): void {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// 라이브러리로 사용하기 위해 export
export default LinkedList;
