import styled from 'styled-components';
import PLUS_ICON from '../../../images/icons/plus.svg';
import DELETE_ICON from '../../../images/icons/delete.svg';
import EDIT_ICON from '../../../images/icons/edit.svg';

const LightButton = styled.button`
  color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  padding: 10px 15px;
  padding-left: 48px;
  line-height: 26px;
  background-size: 20px;
  background-position: 10px center;
  background-repeat: no-repeat;
  border-radius: ${({ theme }) => theme.radius};
  letter-spacing: ${({ theme }) => theme.spacing};
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media only screen and (max-width: ${({ theme }) => theme.mediaMaxSize.xs}) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
    padding-left: 40px;
    line-height: 26px;
  }
`;

export const AddButton = styled(LightButton)`
  background-image: url(${PLUS_ICON});
`;

export const DeleteButtonText = styled(LightButton)`
  background-image: url(${DELETE_ICON});
`;

export const DeleteButton = styled(LightButton)`
  background-image: url(${DELETE_ICON});
  padding-left: 15px;
`;

export const EditButton = styled(LightButton)`
  background-image: url(${EDIT_ICON});
  padding-left: 15px;
`;
