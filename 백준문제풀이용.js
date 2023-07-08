let dfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.

  // 방문한 노드와, 방문해야할 노드
  const visited = [];
  let needVisited = [];

  // 방문 해야할 노드에 초기값은 루트 노드
  needVisited.push(node);

  // 방문 해야할 노드가 없을 때 까지 반복한다.
  while (needVisited.length !== 0) {
    // 현재 방문 해야할 노드의 자식 노드를 가져온다.
    const child = needVisited.shift();
    // 방문한 노드의 자식 노드가 없을 경우
    if (!visited.includes(child)) {
      // 자식 노드는 방문 처리
      visited.push(child.value);
      // 방문해야할 노드에는 자식 노드의 자식들과 현재 남아있는 방문 해야할 노드들을 채워준다.
      needVisited = [...child.children, ...needVisited];
    }
  }
  return visited;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};

let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = dfs(root);
console.log(output); // --> [1, 2, 4, 5, 3]

leaf1.addChild(new Node(6));
rootChild2.addChild(new Node(7));
output = dfs(root);
console.log(output); // --> [1, 2, 4, 6, 5, 3, 7]
