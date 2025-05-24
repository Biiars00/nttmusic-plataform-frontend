import React, { FormEventHandler, ReactNode } from "react";

interface FormProps {
    onSubmit: FormEventHandler;
    name: string;
    children: ReactNode;
}

const Form = ({ onSubmit, name, children }: FormProps) => {
    return (
        <>
        <form 
            className="flex flex-col items-center justify-center p-16 bg-gray-100"
            onSubmit={onSubmit}
        >
            <h2 className="text-3xl mb-6">{name}</h2>
            {children}
        </form>
        </>
    )
}

export default Form;