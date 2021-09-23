import './Game.css';
import { useEffect, useRef, useState } from 'react';

let xAxis = 150;
let yAxis = 150;
let xAxisMax = xAxis + 20;
let xAxisMin = xAxis - 20;
let yAxisMax = yAxis + 20;
let yAxisMin = yAxis - 20;

const Game = (actions) => {
  const [direction, setDirection] = useState('right');
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(50);
  const [score, setScore] = useState(0);

  console.log('left=', left, 'top=', top, 'xAxis=', xAxis, 'yAxis=', yAxis);
  useEffect(() => {
    if (
      left >= xAxisMin &&
      left <= xAxisMax &&
      top >= yAxisMin &&
      top <= yAxisMax
    ) {
      xAxis = Math.round(Math.random() * 701);
      yAxis = Math.round(Math.random() * 401);

      xAxisMax = xAxis + 20;
      xAxisMin = xAxis - 20;
      yAxisMax = yAxis + 20;
      yAxisMin = yAxis - 20;

      document.getElementById('apple').style.left = xAxis + 'px';
      document.getElementById('apple').style.top = yAxis + 'px';

      setScore(score + 1);
    }

    //Move to right
    if (direction === 'right') {
      const movementRight = setInterval(() => {
        document.getElementById('Gamesnake').style.left = left + 'px';
        setLeft(left + 1);
        if (left === 980) {
          setLeft(0);
          alert('your lose');
          actions.onPlayClick(false);
        }
      }, 5);
      return () => {
        clearInterval(movementRight);
      };
    }
    //Move to down

    if (direction === 'down') {
      const movementTop = setInterval(() => {
        document.getElementById('Gamesnake').style.top = top + 'px';
        setTop(top + 1);
        if (top === 730) {
          setTop(0);
          alert('your lose');
          actions.onPlayClick(false);
        }
      }, 5);
      return () => {
        clearInterval(movementTop);
      };
    }
    //Move to up
    if (direction === 'up') {
      const movementTop = setInterval(() => {
        document.getElementById('Gamesnake').style.top = top + 'px';
        setTop(top - 1);
        if (top === 0) {
          setTop(0);
          alert('your lose');
          actions.onPlayClick(false);
        }
      }, 5);
      return () => {
        clearInterval(movementTop);
      };
    }
    //Move to left
    if (direction === 'left') {
      const movementTop = setInterval(() => {
        document.getElementById('Gamesnake').style.left = left + 'px';
        setLeft(left - 1);
        if (left === 0) {
          setLeft(0);
          alert('your lose');
          actions.onPlayClick(false);
        }
      }, 5);
      return () => {
        clearInterval(movementTop);
      };
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') setDirection('down');
    if (e.key === 'ArrowRight') setDirection('right');
    if (e.key === 'ArrowUp') setDirection('up');
    if (e.key === 'ArrowLeft') setDirection('left');
    if (e.key === 'Escape') actions.onPlayClick(false);
  });

  return (
    <div className="game">
      <button
        onClick={() => {
          actions.onPlayClick(false);
        }}
      >
        Menu
      </button>
      <div className="score">
        <span>SCORE = </span>
        <span>{score}</span>
      </div>
      <div className="game-screen">
        <div className="apple" id="apple" />
        <div className="snake" id="Gamesnake"></div>
      </div>
    </div>
  );
};

export default Game;
