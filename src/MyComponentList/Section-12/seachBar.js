import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function SeachBar() {
    const [term, setTerm] = useState("")
    const [debounceTerm, setDebounceTerm] = useState(term)
    const [results, setResults] = useState([])

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceTerm(term)
        }, 1000);
        return () => {
           clearTimeout(timerId)
        }
    }, [term])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debounceTerm
                }
            })
            if(data.query !== undefined){
            setResults(data.query.search)
            }
            else if(term.value == null){
                return setResults([])
            }
        };
        search();
    }, [debounceTerm])

    // useEffect(() => {
        
    //     if (term && !results.length) {
    //         search();
    //     }
    //     else{
    //         const timeOutId = setTimeout(() => {
    //             if (term) {
    //                 search();
    //             };
    //         }, 1000);
    //         return (() => {
    //             clearTimeout(timeOutId);
    //         })
    //     }
    // }, [term, results.length])

    const renderResult = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input type="text" className="input" value={term} onChange={(e) => setTerm(e.target.value)} />
                </div>
            </div>
            <div className="ui celled list">{renderResult}</div>
        </div>
    )
}
