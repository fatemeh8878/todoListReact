import {create} from "zustand";

type Todo = { id: number, text: string, done: boolean, }

type TodoStore = {
    todos: Todo[];
    addTodo: ({text, status}: { text: string, status: string }) => void
    removeTodo: (id: number) => void;
    filter: "All" | "Done" | "Undone";
    toggleDone: (id: number) => void;
    setFilter: (filter: "All" | "Done" | "Undone") => void
};
export const useTodoStore = create<TodoStore>(
    (set) => ({
        todos: [],
        filter: "All",
        addTodo: ({text, status}: {
            text: string,
            status: string
        }) => set(state => ({todos: [...state.todos, {id: Date.now(), text, done: false}]})),
        removeTodo: (id: number) => set(state => ({todos: state.todos.filter(todo => todo.id !== id)})),
        setFilter: (filter) => set({filter}),
        toggleDone: (id: number) => set(state => ({
            todos: state.todos.map(todo => todo.id === id ? {
                ...todo,
                done: !todo.done
            } : todo)
        }))
    }));