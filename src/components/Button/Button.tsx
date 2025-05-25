import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className: string;
    classNameText: string;
}

const Button = ({ type, children, className, classNameText, onClick }: ButtonProps) => {
    return (
        <>
            <button 
                className={className}
                type={type}
                onClick={onClick}
            >
                <p className={classNameText}>{children}</p>
            </button>
        </>
    )
}

export default Button;