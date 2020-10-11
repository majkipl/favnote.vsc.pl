import styles from "styled-components";

const ButtonIcon = styles.button`
  height: 67px;
  width: 67px;
  border-radius: 20px;
  background-color: transparent;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;
  border: none;

  &&:hover {
      background-color: white;
  }
`;

export default ButtonIcon;
