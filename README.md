재사용을 위한 linked list 모듈

## Table of Contents

- [설명](#설명)
- [설치 방법](#설치-방법)
- [사용 방법](#사용-방법)

## 설명

LinkedList는 TypeScript로 구현된 간단한 링크드 리스트(Linked List) 자료구조 라이브러리입니다.

## 설치 방법

npm을 사용하여 linkedlist 라이브러리를 설치할 수 있습니다:

```bash
npm install linkedlist

```

### 사용 방법

프로젝트에서 linkedlist 라이브러리를 사용하려면 먼저 LinkedList 클래스를 import 해야 합니다.

```typescript
import LinkedList from "linkedlist";
```

새로운 링크드 리스트 생성:

```js
const list = new LinkedList();
```

API Reference

|         Function         |                    Description                     |
| :----------------------: | :------------------------------------------------: |
|      `append(data)`      |      주어진 데이터를 리스트 끝에 추가합니다.       |
| `insert(data, position)` | 주어진 데이터를 리스트의 지정된 위치에 삽입합니다. |
|      `remove(data)`      |   리스트에서 주어진 데이터의 요소를 제거합니다.    |
|        `print()`         |   링크드 리스트를 콘솔에 출력합니다. (디버깅용)    |

## `append(data)`

#### Parameters

1. `data` (any): 삽입할 데이터로, 링크드 리스트에 저장될 값입니다. data는 어떤 타입의 데이터도 가능합니다.
   이 메서드는 주어진 data를 새로운 노드로 생성하여 링크드 리스트의 끝에 추가합니다.

##### 사용 방법

`list.append(1)` -- 요소를 링크드 리스트 끝에 추가

## `insert(data, position)`

#### Parameters

1. `data` (any): 삽입할 데이터로, 링크드 리스트에 저장될 값입니다. data는 어떤 타입의 데이터도 가능합니다.

2. `position` (number): 데이터를 삽입할 위치로, 0부터 시작하여 리스트의 인덱스를 나타냅니다. 즉, position이 0인 경우 데이터가 리스트의 맨 앞에 삽입되고, position이 리스트의 길이보다 큰 경우 데이터는 리스트의 맨 끝에 삽입됩니다.

##### 사용 방법

`list.insert(4, 1)` -- 요소를 링크드 리스트 특정 위치에 추가

## `remove(data)`

#### Parameters

1. `data` (any): 링크드 리스트에서 삭제하고자 하는 노드의 데이터입니다. 이 함수는 리스트에서 해당 데이터를 가진 노드를 찾아서 삭제합니다. data는 어떤 타입의 데이터도 가능합니다.

##### 사용 방법

`list.remove(2)` -- 링크드 리스트에서 요소 제거

## `print()`

#### Parameters

1. print() 함수는 매개변수가 없습니다. 이 함수는 링크드 리스트에 저장된 모든 노드의 데이터를 출력합니다.

##### 사용 방법

`list.print()` -- 링크드 리스트에 저장된 데이터가 순서대로 콘솔에 출력
