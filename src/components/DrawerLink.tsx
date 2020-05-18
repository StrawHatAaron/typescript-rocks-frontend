import React, {useState, useRef} from 'react';

interface DrawerLinkProps{
    name: string,
    active: boolean,
    internal: boolean,
    icon?: string
};

export const DrawerLink: React.FC<DrawerLinkProps> = ({}) => {
    const [linkProps, setLinkProps] = useState<DrawerLinkProps | null>({
        name:"test",
        active:true,
        internal:true,
        icon:""
    });
    const inputRef = useRef<HTMLInputElement>(null); 

    return (
        <>
            <input ref={inputRef}/>
        </>
    )
}