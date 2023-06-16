import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  margin: 0 144px 10px 144px;
  padding: 30px 40px 40px 40px;

  background-color: black;
  border-radius: 0 0 10px 10px;

  img {
    width: 50%;

    border: 1px solid white;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 24px;

  button {
    display: flex;
    align-items: center;
    gap: 8px;

    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-top: 10px;

  > h2 {
    margin-top: 20px;
  }

  > p {
    margin-bottom: 30px;
  }
`;

export const Scrollbar = styled.div`
  margin: 2px 5px 0 0;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }
`;
