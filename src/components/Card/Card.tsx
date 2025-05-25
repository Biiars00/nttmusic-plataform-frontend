import { MouseEventHandler, ReactNode } from "react";

interface ICard {
    key: string;
    onClick: MouseEventHandler<HTMLDivElement>;
    className: string;
    children: ReactNode
}

const CardAlbum = ({ key, className, onClick, children }: ICard) => {
    return (
        <>
            <div
               key={key} 
               className={className}
               onClick={onClick}
            >
                {children}
            </div>
        </>
    )
}

export default CardAlbum;