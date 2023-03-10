import React from 'react'
import styled from "styled-components";
import { useEffect, useState } from "react";


const BIRD_SIZE = 20;
const GAME_WIDTH = 900;
const GAME_HEIGHT = 700;
const GRAVITY = 5;
const JUMP_TOP = 100;
const OBSTACLE_WIDTH = 40;
const OBSTACLE_GAp = 200;
const Birds = () => {
    const [birdposition, setbirdposition] = useState(250);
    const [gamestarted, setgamestarted] = useState(false);
    const [obstacleHeight, setobstacleHeight] = useState(100);
    const [obstacleLeft, setobstacleLeft] = useState(GAME_WIDTH - OBSTACLE_WIDTH);
    const [score, setscore] = useState(0);
  
    const bottomobstacleHeight = GAME_HEIGHT - OBSTACLE_GAp - obstacleHeight;
    useEffect(() => {
      let timeid;
      if (gamestarted && birdposition < GAME_HEIGHT - BIRD_SIZE) {
        timeid = setInterval(() => {
          setbirdposition((birdposition) => birdposition + GRAVITY);
        }, 24);
      }
  
      return () => {
        clearInterval(timeid);
      };
    }, [birdposition, gamestarted]);
  
    useEffect(() => {
      let obstacleId;
      if (gamestarted && obstacleLeft >= -OBSTACLE_WIDTH) {
        obstacleId = setInterval(() => {
          setobstacleLeft((obstacleLeft) => obstacleLeft - 5);
        }, 24);
  
        return () => {
          clearInterval(obstacleId);
        };
      } else {
        setobstacleLeft(GAME_WIDTH - OBSTACLE_WIDTH);
        setobstacleHeight(
          Math.floor(Math.random() * (GAME_HEIGHT - OBSTACLE_GAp))
        );
        setscore((score) => score + 1);
      }
    }, [gamestarted, obstacleLeft]);
    useEffect(() => {
      const hascollidewithTopobstacle =
        birdposition >= 0 && birdposition < obstacleHeight;
      const hascollidewithBottomobstacle =
        birdposition <= 500 && birdposition >= 500 - bottomobstacleHeight;
      if (
        obstacleLeft >= 0 &&
        obstacleLeft <= OBSTACLE_WIDTH &&
        (hascollidewithTopobstacle || hascollidewithBottomobstacle)
      )
        setgamestarted(false);
    }, [birdposition, obstacleHeight, bottomobstacleHeight, obstacleLeft]);
  
    const handletop = () => {
      let newposition = birdposition - JUMP_TOP;
      if (!gamestarted) {
        setgamestarted(true);
      } else if (newposition < 0) {
        setbirdposition(0);
      } else {
        setbirdposition(newposition);
      }
    };
  return (
<Div onClick={handletop}>
      <span style={{ color: "white", fontSize: "34px", position: "absolute" }}>
        {score - 1}
      </span>
      <Gamebox height={GAME_HEIGHT} width={GAME_WIDTH}>
        <Obstacle
          top={0}
          width={OBSTACLE_WIDTH}
          height={obstacleHeight}
          left={obstacleLeft}
        />
        <Obstacle
          top={GAME_HEIGHT - (obstacleHeight + bottomobstacleHeight)}
          width={OBSTACLE_WIDTH}
          height={bottomobstacleHeight}
          left={obstacleLeft}
        />
        <Bird size={BIRD_SIZE} top={birdposition} />
      </Gamebox>
    </Div>
  )
}

export default Birds;
const Bird = styled.div`
  position: absolute;
  background-color: red;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  top: ${(props) => props.top}px;
  border-radius: 50%;
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Gamebox = styled.div`
margin-top: 2vh;
  height: 70vh;
  width: 90vw;
  background-color: blue;
  overflow: hidden;
`;

const Obstacle = styled.div`
  position: relative;
  top: ${(props) => props.top}px;
  background-color: green;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.left}px;
`;
