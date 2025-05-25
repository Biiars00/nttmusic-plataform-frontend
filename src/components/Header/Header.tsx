import { ReactNode } from "react";

interface IHeaderProps {
    nameLogo: string;
    children?: ReactNode;
}

const Header = ({ nameLogo, children }: IHeaderProps) => {
    return (
        <header className="flex items-center pl-4 text-sans bg-white h-16 shadow-md">
            <h1 className="font-bold text-xl font-heading">{nameLogo}</h1>
            {children}
        </header>
    )
}

export default Header;