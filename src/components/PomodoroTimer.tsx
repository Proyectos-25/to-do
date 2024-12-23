import { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60); // 25 minutos en segundos
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: number | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => {
          if (time > 0) {
            return time - 1;
          } else {
            clearInterval(interval!);
            playAlarm();
            return 0;
          }
        });
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval!);
    }
    return () => clearInterval(interval!);
  }, [isActive, time]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(25 * 60);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const playAlarm = () => {
    const audio = new Audio("/alarm.mp3");
    audio.play();
  };

  return (
    <div className="pomodoro-timer">
      <div className="time">{formatTime(time)}</div>
      <button onClick={toggleTimer} className="pomodoro-btn">
        {isActive ? "Pausar" : "Iniciar"}
      </button>
      <button onClick={resetTimer} className="pomodoro-btn">
        Reiniciar
      </button>
    </div>
  );
};

export default PomodoroTimer;