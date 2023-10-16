import styled from "styled-components";

const Input = styled.input`
    outline: none;
    padding: 8px 16px;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    border-radius: 24px;
    width: 100px;
    min-width: 50%;
    max-width: 100%;
    border: 1px solid var(--steel-gray-200, #E2E8F0);
    background-color: var(--steel-gray-50, #F8FAFC);
    color: #666787;
    &:hover {
        background-color: #D9E2EFB8;
    }
`;

function TitledTextInput({title, def}) {
    
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div>{title}</div>);
    return (
        <div className='d-flex flex-column gap-1'>
            {Title}
            <Input className='p-2' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;