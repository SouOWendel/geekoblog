import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.theme.primary};
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  padding: 4em;
  background: ${props => props.theme.background};
`;