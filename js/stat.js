window.renderStatistics = function (ctx, names, times) {
  var coordinationX = 150;
  var coordinationY = 240;
  var widthColumn = 40;
  var distanceBetweenColumn = 50;
  var color = '';

  var printField = function (color, x, y) {
    ctx.strokeStyle = 'black';
    ctx.strokeRect(x, y, 420, 270);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 420, 270);
  };

  var printRect = function (color, x, y, height) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, widthColumn, height);
  };

  var printText = function (str, x, y) {
    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText(str, x, y);
  };

  var countTimeHeight = function (times) {
    var maxTime = 0;
    var gistogramHeight = 150;
    var playerTimeHeight = [];

    for (var i = 0; i < times.length; i++) {
      if (times[i] > maxTime) {
        maxTime = times[i];
      }
    }

    for (var i = 0; i < times.length; i++) {
      playerTimeHeight.push(Math.ceil(times[i] * gistogramHeight / maxTime));
    }
    return playerTimeHeight;
  };

  var getRandomColor = function (min, max) {
     return Math.floor(Math.random() * (max - min)) + min;
	}

  printField('rgba(0,0,0,0.7)', 110, 20);
  printField('white', 100, 10);
  printText('Ура вы победили!', 120, 30);
  printText('Список результатов:', 120, 50);

  for (var i = 0; i < names.length; i++) {
    printText(Math.ceil(times[i]), coordinationX, coordinationY - countTimeHeight(times)[i] - 20);
    printText(names[i], coordinationX, coordinationY + 10);
    var saturation = getRandomColor(0,255);
    var transparence = Math.random();
    if (names[i] === 'Вы') {
      color = 'rgba(255, 0, 0, 1)';
    } else {
      color = 'rgba(0, 0, ' + saturation + ', ' + transparence + ')';
    }
    printRect(color, coordinationX, coordinationY - countTimeHeight(times)[i], countTimeHeight(times)[i]);
    coordinationX += widthColumn + distanceBetweenColumn;
    console.log(countTimeHeight(times)[i]);
  }
};

