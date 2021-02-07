import styled from "styled-components";
import PLUS_ICON from "../../../images/icons/plus.svg";

const AddButton = styled.button`
  color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  padding: 10px 15px;
  padding-left: 48px;
  height: 46px;
  line-height: 30px;
  background-image: url(${PLUS_ICON});
  background-size: 28px;
  background-position: 10px center;
  background-repeat: no-repeat;
  border-radius: 5px;
  transition: 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export default AddButton;

// const AddButton = ({ label, onClick }) => {
//   return (
//     <div className="padding">
//       <Button onClick={onClick} color="primary" size="large" startIcon={<AddIcon />}>
//         {label}
//       </Button>
//     </div>
//   )
// };

// export default AddButton;
