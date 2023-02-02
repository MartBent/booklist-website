import { useState } from 'react'
import './App.css'
import { Book } from './components/book'

function App() {
    return (
        <div className="App">
            <Book title="Yeet"></Book>
            <Book title="Second"></Book>
        </div>
    )
}

export default App
