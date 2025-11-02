import { useState } from 'react';
import { Plus, X, Check, Edit3 } from 'lucide-react';

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
  time?: string;
}

export const ToDoList = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: '1', text: 'Review morning emails', completed: false, time: '09:00' },
    { id: '2', text: 'Team meeting', completed: false, time: '10:30' },
    { id: '3', text: 'Lunch with client', completed: false, time: '12:00' }
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState('');
  const [newTime, setNewTime] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      const todo: TodoItem = {
        id: Date.now().toString(),
        text: newTodo.trim(),
        completed: false,
        time: newTime || undefined
      };
      setTodos([...todos, todo]);
      setNewTodo('');
      setNewTime('');
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const pendingTodos = todos.filter(todo => !todo.completed);

  return (
    <div className="mirror-module h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Check className="w-6 h-6 text-accent mr-2" />
          <h3 className="mirror-text-primary text-xl font-light">Today's Tasks</h3>
        </div>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="p-1 hover:bg-muted/20 rounded-full transition-colors"
        >
          <Edit3 className="w-4 h-4 mirror-text-secondary" />
        </button>
      </div>

      <div className="space-y-3 max-h-64 overflow-y-auto">
        {pendingTodos.map((todo) => (
          <div key={todo.id} className="flex items-center justify-between group">
            <div className="flex items-center flex-1">
              <button
                onClick={() => toggleTodo(todo.id)}
                className="w-4 h-4 border border-accent/50 rounded mr-3 flex-shrink-0 hover:bg-accent/20 transition-colors"
              />
              <div className="flex-1">
                <span className="mirror-text-primary text-sm">{todo.text}</span>
                {todo.time && (
                  <span className="mirror-text-secondary text-xs ml-2">at {todo.time}</span>
                )}
              </div>
            </div>
            {isEditing && (
              <button
                onClick={() => deleteTodo(todo.id)}
                className="p-1 hover:bg-destructive/20 rounded opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-3 h-3 text-destructive" />
              </button>
            )}
          </div>
        ))}
      </div>

      {isEditing && (
        <div className="mt-4 pt-4 border-t border-border/30">
          <div className="space-y-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add new task..."
              className="w-full bg-transparent border border-border/30 rounded px-2 py-1 mirror-text-primary text-sm placeholder:mirror-text-secondary focus:outline-none focus:border-accent/50"
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            />
            <div className="flex gap-2">
              <input
                type="time"
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                className="bg-transparent border border-border/30 rounded px-2 py-1 mirror-text-primary text-xs focus:outline-none focus:border-accent/50"
              />
              <button
                onClick={addTodo}
                className="p-1 bg-accent hover:bg-accent/80 rounded transition-colors"
              >
                <Plus className="w-4 h-4 text-background" />
              </button>
            </div>
          </div>
        </div>
      )}

      {todos.filter(t => t.completed).length > 0 && (
        <div className="mt-4 pt-4 border-t border-border/30">
          <div className="mirror-text-secondary text-xs mb-2">Completed ({todos.filter(t => t.completed).length})</div>
          {todos.filter(t => t.completed).map((todo) => (
            <div key={todo.id} className="flex items-center mb-1 opacity-50">
              <Check className="w-3 h-3 text-accent mr-2" />
              <span className="mirror-text-secondary text-xs line-through">{todo.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};