interface ButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
    return (
        <button onClick={onClick} className={className} style={{ cursor: "pointer" }}>
            {label}
        </button>
    );
};

export default Button;