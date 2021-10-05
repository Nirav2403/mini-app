import React, { useState } from 'react'

export default function Accordian({ items }) {
    const [activeIndex, setactiveIndex] = useState(null)
    const ontitleClick = (index) => {
        setactiveIndex(index);
    }
    const renderItem = items.map((item, index) => {
        const active = index===activeIndex ? 'active' : '';
        return <React.Fragment key={item.title}>
            <div className={`title ${active}`} onClick={() => ontitleClick(index)}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    })
    return (
        <>
            <div className="ui styled accordion">{renderItem}</div>
        </>
    )
}
