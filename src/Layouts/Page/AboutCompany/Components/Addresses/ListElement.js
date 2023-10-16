import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`
    outline: none;
    border-radius: 0px;
    border: solid #152842 1px;
    background-color: #D9E2EF;
    color: #666787;
`;

function ListElement(props) {
    return (
        <div className='d-inline-flex flex-row align-items-center align-self-center'>
            <SecondaryButton>
                <IconOnlyButton icon={<EditIcon/>}/>
            </SecondaryButton>

            <SecondaryButton>
               <IconOnlyButton icon={<RemoveIcon/>}/>
            </SecondaryButton>
        </div>
    );
}

export default ListElement;