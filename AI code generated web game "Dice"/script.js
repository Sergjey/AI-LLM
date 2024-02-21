
function playSound(sound) {
    var audio = new Audio(sound); // Создаём новый объект Audio
    audio.play(); // Воспроизводим звук
}

function getDotsPositions(result) {
    // Примерные позиции точек для каждого результата, отцентрированные
    const positions = {
        1: [['50%', '50%']],
        2: [['25%', '25%'], ['75%', '75%']],
        3: [['25%', '25%'], ['50%', '50%'], ['75%', '75%']],
        4: [['25%', '25%'], ['75%', '75%'], ['25%', '75%'], ['75%', '25%']],
        5: [['25%', '25%'], ['75%', '75%'], ['25%', '75%'], ['75%', '25%'], ['50%', '50%']],
        6: [['25%', '25%'], ['75%', '75%'], ['25%', '75%'], ['75%', '25%'], ['25%', '50%'], ['75%', '50%']]
    };
    return positions[result] || [];
}

function updateDiceDots(result) {
    var dice = document.getElementById('dice');
    dice.innerHTML = ''; // Очищаем предыдущие точки
    var dotsPositions = getDotsPositions(result);
    dotsPositions.forEach(function(pos) {
        var dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.top = pos[0];
        dot.style.left = pos[1];
        dice.appendChild(dot);
    });
}

function rollDice() {
    playSound('button-click.mp3.mp3');
    var dice = document.getElementById('dice');
    dice.classList.add('rolling');
    setTimeout(function() {
        dice.classList.remove('rolling');
        var result = Math.floor(Math.random() * 6) + 1;
        playSound('Playing-sound.mp3');
        updateDiceDots(result); // Обновляем кубик с точками
        playSound('Playing-sound.mp3');
        // Добавляем результат в историю
        var history = document.getElementById('history');
        var entry = document.createElement('li');
        entry.textContent = 'Результат: ' + result;
        history.appendChild(entry);
    }, 1000);
}
