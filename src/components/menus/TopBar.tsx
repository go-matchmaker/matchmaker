import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 100px;
  box-shadow: 0px 0px 10px ${(props) => props.theme.colors.menuGrey};
`;

const Button = styled.button``;

interface Props {
  pageName: string;
}

const TopBar: React.FC<Props> = ({ pageName }) => {
  const router = useRouter();
  return (
    <Container>
      <Button onClick={() => router.push("/login")}>Login</Button>
      <Button onClick={() => router.push("/register")}>Register</Button>
    </Container>
  );
};

export default TopBar;
