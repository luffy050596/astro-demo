// 性能测试：可变 vs 不可变操作

// 1. 可变对象操作
function mutableTest() {
  console.time('mutable');
  const user = {
    name: "John",
    age: 30,
    scores: Array(1000).fill(0)
  };

  for (let i = 0; i < 1000; i++) {
    user.age = i;
    user.scores[i] = i;
  }
  console.timeEnd('mutable');
}

// 2. 不可变对象操作
function immutableTest() {
  console.time('immutable');
  let user = {
    name: "John",
    age: 30,
    scores: Array(1000).fill(0)
  };

  for (let i = 0; i < 1000; i++) {
    user = {
      ...user,
      age: i,
      scores: [...user.scores.slice(0, i), i, ...user.scores.slice(i + 1)]
    };
  }
  console.timeEnd('immutable');
}

// 3. 使用 Immer 的不可变操作
import { produce } from 'immer';

function immerTest() {
  console.time('immer');
  let user = {
    name: "John",
    age: 30,
    scores: Array(1000).fill(0)
  };

  for (let i = 0; i < 1000; i++) {
    user = produce(user, draft => {
      draft.age = i;
      draft.scores[i] = i;
    });
  }
  console.timeEnd('immer');
}

// 运行测试
console.log('Running performance tests...');
mutableTest();
immutableTest();
immerTest(); 