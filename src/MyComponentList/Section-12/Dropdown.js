import React,{useState,useEffect,useRef} from 'react'

export default function Dropdown ({label,options, selected, onSelected}) {
    const [open, setOpen] = useState(false);
    const ref = useRef()

    const renderOption = options.map((option)=>{
        if(option.value === selected.value){
            return null;
        }
        return (
        <div key={option.value} className="item" onClick={()=>onSelected(option)}>
            {option.label}
        </div>
        );
    })

    useEffect(() => {
        if(open===!open){
        const onBodyClick = (event)=>{
            if(ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
        }
        document.body.addEventListener('click',onBodyClick);
        return(()=>{
            document.body.removeEventListener('click',onBodyClick);
        })
    }
    }, [open])

    
   
    return (
        <div ref={ref} class="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={()=>setOpen(!open)} className={`ui selection dropdown ${ open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${ open ? 'visible transition':''}`}>{renderOption}</div>
                </div>
            </div>  
        </div>
    )
}
