import React from 'react';
import { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert'

export default function Translate() {
    const options = [
        {
            label: 'Afrikaans',
            value: 'af'
        },
        {
            label: 'Arabic',
            value: 'ar'
        },
        {
            label: 'Hindi',
            value: 'hi'
        }
    ];
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState("")
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown label="Select a Language" selected={language} onSelected={setLanguage} options={options}/>
            <hr />
            <h3>Output</h3>
            <Convert text={text} language={language} />
        </div>
    )
}
