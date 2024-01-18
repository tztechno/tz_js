
  function drawGraph() {
      // グラフの範囲
      var minX = -10;
      var maxX = 10;

      // x軸、y軸の座標を描画
      drawAxes();

      // グラフを描く
      ctx.beginPath();
      for (var x = minX; x <= maxX; x += 0.1) {
        var y = x * x;
        var canvasX = mapRange(x, minX, maxX, 0, canvas.width);
        var canvasY = mapRange(y, 0, maxX * maxX, canvas.height, 0);
        ctx.lineTo(canvasX, canvasY);
      }
      ctx.strokeStyle = 'blue'; // グラフの線の色
      ctx.lineWidth = 2; // グラフの線の太さ
      ctx.stroke();
    }


    // x軸、y軸を描画する関数
    function drawAxes() {
      // x軸
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.strokeStyle = 'black';
      ctx.stroke();

      // y軸
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.strokeStyle = 'black';
      ctx.stroke();
    }
