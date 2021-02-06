import styled from "styled-components";

const AddButton = styled.button`
  color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  text-transform: uppercase;
  background-color: transparent;
  border: none;
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
