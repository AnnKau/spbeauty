import Clickable from "./Clickable";
import styled from "styled-components";



function PrimaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '144px' : props.minWidth; 
    const Button = styled.div`
        background: #3B82F6;
        border-radius: 24px;
        padding: 8px 16px;
        width: 217px;
        justify-content: center;
        align-items: center;
        gap: 16px;
        min-width: ${minWidth};
        color: white;
        &:hover {
            background: #3B82F6;
            opacity: 0.8;
        }
        &:active {
            background: #0F172A;
        }
    `;
    return (
        <Clickable>
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default PrimaryButton;