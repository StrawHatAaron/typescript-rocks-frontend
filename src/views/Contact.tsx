import React, {useState, useRef} from 'react';

interface ContactProps{
    name: string,
    active: boolean,
    internal: boolean,
    icon?: string
};

export const Contact: React.FC<ContactProps> = ({}) => {
    const [linkProps, setLinkProps] = useState<ContactProps | null>({
        name:"test",
        active:true,
        internal:true,
        icon:""
    });
    const inputRef = useRef<HTMLInputElement>(null); 
    const divRef = useRef<HTMLInputElement>(null); 
    return (
        <div ref={divRef}>
            <input ref={inputRef}/>
        </div>
    )
}
