
  const canvasSize = 512;
  const whiteColor = "#FFFFFF";
  const button4x4 = document.getElementById('4x4')
  button4x4.addEventListener('click', () => {
    let canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      let ctx = canvas.getContext('2d');
      const pixelSize = canvasSize / img4x4.length;
      ctx.fillStyle = whiteColor;
      ctx.fillRect(0, 0, canvasSize, canvasSize);
      for (let i = 0; i < img4x4.length; i++) {
        for (let j = 0; j < img4x4[i].length; j++) {
          ctx.fillStyle = `#${img4x4[i][j]}`;
          ctx.fillRect(i * pixelSize, j * pixelSize, pixelSize, pixelSize);
        }
      }
    }
  });
  
  const button32x32 = document.getElementById('32x32')
  button32x32.addEventListener('click', () => {
    const canvas = document.getElementById('canvas');
      if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        let pixelSize = canvasSize / img32x32.length;
        ctx.fillStyle = whiteColor;
        ctx.fillRect(0, 0, canvasSize, canvasSize);
        for (let i = 0; i < img32x32.length; i++) {
          for (let j = 0; j < img32x32[i].length; j++) {
            let opacity = (img32x32[i][j][3] / 255).toFixed(6);
            ctx.fillStyle = `rgba(${img32x32[i][j][0]}, ${img32x32[i][j][1]}, ${img32x32[i][j][2]}, ${opacity})`;
            ctx.fillRect(i * pixelSize, j * pixelSize, pixelSize, pixelSize);
          }
        }
      }
  });
  
  const button256x256 = document.getElementById('256x256')
  button256x256.addEventListener('click', () => {
    const canvas = document.getElementById('canvas');
      if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = whiteColor;
        ctx.fillRect(0, 0, canvasSize, canvasSize);
        image = new Image();
        image.src = 'assets/images/rsschool.png';
        image.onload = () => {
        ctx.drawImage(image, 0, 0, canvasSize, canvasSize);
        }              
      }
  });
