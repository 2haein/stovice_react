import React, { useCallback, useRef, useState } from 'react';
import TodoInsert from '../components/todo/TodoInsert';
import TodoList from '../components/todo/TodoList';
import TodoTemplate from '../components/todo/TodoTemplate';

const Schedule = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '스토비스 경제 주식알리미',
      checked: false,
    },
    {
      id: 2,
      text: '관련 일정을 입력해주세요',
      checked: false,
    },
    {
      id: 3,
      text: '추가 및 수정이 가능합니다',
      checked: false,
    },
  ]);
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
};

export default Schedule;
