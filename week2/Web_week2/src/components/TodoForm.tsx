import  React, { FormEvent, useState } from 'react';
import { useTodo } from '../context/TodoContext';

interface TodoFormProps {
    input : string;
    setInput : (input: string) => void;
    handleSubmit : (e: React.FormEvent<HTMLFormElement>)=> void;
}



const TodoForm = () => {
    const [input, setInput] = useState<string>('');
    const {addTodo} = useTodo();

    const handleSubmit = ( e: FormEvent<HTMLFormElement>) :void =>{
        e.preventDefault();
        const text = input.trim();

        if (text) {
            addTodo(text);
            setInput('');
        }
    };




    return (
        <form onSubmit={handleSubmit} className="todo-container_form">
            <input 
                value={input}
                onChange={(e):void => setInput(e.target.value)}
                type='text' 
                className="todo-container_input"
                placeholder="할 일 입력"
                required
            />
            <button type='submit' className="todo-container_button">
                할 일 추가
            </button>
        </form>
    )
}

export default TodoForm
