import  { useState } from 'react';

export default function Form({ func }) {
    const [inputValue, setInputValue] = useState('');

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const bullets = parseInt(inputValue, 10);

        if (!isNaN(bullets) && bullets > 0) {
            func({initialBullets: bullets});
            setInputValue('');
        }
    }

    return (
    <form onSubmit={handleSubmit}>
        <label>
        Введите количество пуль:
        <input type="number" value={inputValue} onChange={handleInputChange} min="1" />
        </label>
    <button type="submit">Начать игру</button>
    </form>
    );
}
