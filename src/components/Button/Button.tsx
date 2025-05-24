import { ReactNode } from "react";

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    children: ReactNode;
    className: string;
    classNameText: string;
}

const Button = ({ type, children, className, classNameText }: ButtonProps) => {
    return (
        <>
        <button 
            className={className}
            type={type}
        >
            <p className={classNameText}>{children}</p>
        </button>
        </>
    )
}

export default Button;