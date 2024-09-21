import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1e1e2e;
  padding: 0 20px;
`;

export const Form = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  width: 400px;
  max-width: 100%;
  backdrop-filter: blur(10px);
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  outline: none;
  font-family: 'Poppins', sans-serif;
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 8px;
  background-color: #ff6f61;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
  font-family: 'Poppins', sans-serif;
  
  &:hover {
    background-color: #ff3f2e;
  }
`;

export const ToggleLink = styled.p`
  color: #fff;
  margin-top: 15px;
  text-align: center;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`;
