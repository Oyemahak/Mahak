import React, { useEffect, useRef, useState } from 'react';
import './clickrush.css';
import Footer from '../../components/Footer';

const ClickRush = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameActive, setGameActive] = useState(false);
  const [result, setResult] = useState(null);
  const gameAreaRef = useRef(null);

  const emojis = ['😀', '😎', '👻', '💥', '🥶', '🐸', '🦄', '🍕', '🧠', '👾'];

  useEffect(() => {
    let timer;
    if (gameActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    } else if (gameActive && timeLeft === 0) {
      endGame();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, gameActive]);

  useEffect(() => {
    if (!gameActive) return;

    const interval = setInterval(() => {
      const emoji = document.createElement('span');
      emoji.className = 'cr-emoji';
      emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

      const gameArea = gameAreaRef.current;
      const { width, height } = gameArea.getBoundingClientRect();
      const x = Math.random() * (width - 40);
      const y = Math.random() * (height - 40);

      emoji.style.left = `${x}px`;
      emoji.style.top = `${y}px`;

      emoji.onclick = () => {
        emoji.classList.add('clicked');
        setScore((prev) => prev + 1);
        setTimeout(() => emoji.remove(), 300);
      };

      gameArea.appendChild(emoji);
      setTimeout(() => emoji.remove(), 1500);
    }, 800);

    return () => clearInterval(interval);
  }, [gameActive]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(10);
    setResult(null);
    setGameActive(true);
  };

  const endGame = () => {
    setGameActive(false);
    let medal = '', message = '';

    if (score <= 4) {
      medal = '🥉 Bronze';
      message = 'You click like a sleepy sloth 😴';
    } else if (score <= 8) {
      medal = '🥈 Silver';
      message = 'Fast but not furious ⚡';
    } else {
      medal = '🥇 Gold';
      message = 'Lightning Fingers! Are you even human? 🦾';
    }

    setResult({ medal, message });
  };

  return (
    <div className="cr-container">
      <div className="cr-header">
        <div className="cr-title">Click as many emojis as you can in 10 seconds!</div>
        <button className="cr-start-btn" onClick={startGame} disabled={gameActive}>
          🚀 Start Game
        </button>
        <div className="cr-score-info">Score: {score} | Time Left: {timeLeft}s</div>
      </div>

      <div className="cr-box-wrapper">
        <div className="cr-box" ref={gameAreaRef}>
          {result && (
            <div className="cr-popup animate-popup">
              <h2>{result.medal}</h2>
              <p>{result.message}</p>
              <p>Final Score: {score}</p>
              <div className="cr-btn-group">
                <button className="cr-btn-play" onClick={startGame}>🔁 Play Again</button>
                <button className="cr-btn-home" onClick={() => window.location.href = '/play'}>🏠 Back to Play</button>
              </div>
            </div>
          )}
        </div>
        <div className="cr-box-border-glow"></div>
      </div>
    </div>
  );
};

export default ClickRush;