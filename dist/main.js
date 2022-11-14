const initApp = () => {
  const container = document.getElementById('container');
  const text = document.getElementById('text');

  const TOTAL_TIME = 7500;
  const breatheTime = (TOTAL_TIME / 5) * 2;
  const holdTime = TOTAL_TIME / 5;

  const delay = (millisecs) => new Promise((res) => setTimeout(res, millisecs));

  const breathAnimation = async () => {
    text.innerText = 'Breathe In';
    container.className = 'container grow';

    await delay(breatheTime);

    text.innerText = 'Hold';
    await delay(holdTime);

    text.innerText = 'Breathe Out';
    container.className = 'container shrink';
  };

  setInterval(breathAnimation, TOTAL_TIME);
};

document.addEventListener('DOMContentLoaded', initApp);

const mainAsync = async () => {
  await delay(7500);
  console.log('1s');
  await delay(7500);
  console.log('2s');
  await delay(7500);
  console.log('3s');
};
