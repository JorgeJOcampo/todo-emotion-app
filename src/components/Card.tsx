import React, { ReactElement } from 'react';
import styled from '@emotion/styled/macro';

const Container = styled.div`
  font-size: 32px;
  color: white;
  padding: 2rem 1rem;
  border-radius: 8px;
  border: 2px solid #80a6e4;
  @media only screen and (max-width: 900px) {
    width: 75%;
  }
`;

interface Props {
  title: string;
}

const Card = ({ title }: Props): ReactElement => {
  return (
    <Container>
      {title.length > 40 ? `${title.substring(0, 40)}...` : title}
    </Container>
  );
};

export default Card;
