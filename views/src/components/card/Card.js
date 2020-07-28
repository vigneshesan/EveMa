import React from 'react';
import styled from 'styled-components';

function Card() {
  return (
    <Container>
      <Rect className='main-card'>
        <EventName>EVENT NAME</EventName>
        <Venue>Venue</Venue>
        <Time>Time</Time>
      </Rect>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rect = styled.div`
  width: 190px;
  height: 150px;
  background-color: #ffffff;
  border-radius: 19px;
  flex-direction: column;
  display: flex;
  box-shadow: 4px 3px 2px 0.14px rgba(0, 0, 0, 0.2);
`;

const EventName = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  color: #121212;
  font-size: 25px;
  margin-top: 17px;
  margin-left: 15px;
`;

const Venue = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  color: #121212;
  font-size: 20px;
  margin-top: 16px;
  margin-left: 15px;
`;

const Time = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  color: #121212;
  font-size: 20px;
  margin-top: 6px;
  margin-left: 15px;
`;

export default Card;
