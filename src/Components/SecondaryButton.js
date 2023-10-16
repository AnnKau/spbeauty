import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '144px' : props.minWidth;
    const Button = styled.div`
        background: #FFF;
        padding: 8px 16px;
        justify-content: center;
        align-items: center;
        gap: 16px;
        border: 1px solid #64748B;
        border-radius: 24px;
        min-width: ${minWidth};
        min-width: 100px;
        color: #152842;
        &:hover {
            background: #FFF;
            opacity: 0.8;
        }
        &:active {
            background: #FFF;
            opacity: 0.6;
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;