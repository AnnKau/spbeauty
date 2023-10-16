import styled from 'styled-components';
import SearchIcon from '../../../../Icons/SearchIcon';
import IconOnlyButton from '../../../../Components/IconOnlyButton';

const WrapperInput = styled.div`
    position:relative;
    width: 217px;
    height: 34px;
`;

const Input = styled.input`
    outline: none;
    border-radius: 24px;
    width: 100%;
    border: 1px solid var(--steel-gray-200, #E2E8F0);
    background: var(--steel-gray-50, #F8FAFC);
    &:hover {
        border: 1px solid var(--steel-gray-200, #E2E8F0);
        opacity: 0.8;
        background: var(--steel-gray-50, #F8FAFC);
    }
    &:focus {
        background: white;
    }
`;

const SearchIconWrapper = styled.div`
    background-color: #4B759E;
    position: absolute;
    box-sizing:border-box;
    right: 0px;  /* Здесь можно добавить отступ от правого края, чтобы сдвинуть иконку левее */
    top:50%;
    transform: translateY(-50%);
`;

function SearchField() {
    return (
        <WrapperInput className='d-inline-flex'>  {/* Устанавливает ширину поля и включает относительное положение */}
            <Input className='p-3' placeholder='Найти'/>
            <SearchIconWrapper className='p-3'>  {/* Устанавливает абсолютное положение внутри поля ввода */}
                <IconOnlyButton icon={<SearchIcon/>}/>
            </SearchIconWrapper>
        </WrapperInput>
    );
}

export default SearchField;