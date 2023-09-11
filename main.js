function measureIteration () {
  let startTime = +new Date();

  const canvas = document.createElement('canvas');
  canvas.width = 100;
  canvas.height = 100;

  const ctx = canvas.getContext('2d');

  for (let x = 0; x < canvas.width; x += 1) {
    for (let y = 0; y < canvas.height; y += 1) {
      ctx.fillRect(x, y, 1, 1);
    }
  }

  const endTime = +new Date();

  return endTime - startTime;
}


function measure (times = 10) {
  let time = 0;

  for (let index = 0; index < times; index += 1) {
    time += measureIteration();
  }

  return time;  
}


const button = document.getElementById('test');
button.addEventListener('click', () => {
  const time = measure();
  
  document.getElementById('result').textContent = time;
})