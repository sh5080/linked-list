/**
 * Linked List 노드 인터페이스
 */
interface Node<T> {
  /**
   * 노드에 저장되는 데이터
   */
  data: T;

  /**
   * 다음 노드를 가리키는 포인터
   * 다음 노드가 없을 경우 null
   */
  next: Node<T> | null;
}

/**
 * Linked List 클래스
 */
declare class LinkedList<T> {
  /**
   * Linked List의 첫 번째 노드를 가리키는 포인터
   */
  private head: Node<T> | null;

  /**
   * 노드를 맨 끝에 추가하는 메서드
   * @param data - 추가할 노드의 데이터
   */
  append(data: T): void;

  /**
   * 노드를 특정 위치에 삽입하는 메서드
   * @param data - 삽입할 노드의 데이터
   * @param position - 삽입할 위치 (0부터 시작)
   */
  insert(data: T, position: number): void;

  /**
   * 노드를 삭제하는 메서드
   * @param data - 삭제할 노드의 데이터
   */
  remove(data: T): void;

  /**
   * Linked List를 출력하는 메서드
   */
  print(): void;
}

export default LinkedList;
