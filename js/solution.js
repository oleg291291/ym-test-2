(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        // todo: подсчитать кол-во островов на карте
        var islandCount = 0;
        for (var y = 0; y < map.length; y++) {
            var row = map[y];
            for (var x = 0; x < row.length; x++) {
                if (map[y][x] == 1) { 
                    if ((y + 1) == map.length && (map[y][x + 1] == 0 || (x + 1) == row.length)) {
                        islandCount++;
                    }
                    else if ((y + 1) == map.length && (map[y][x + 1] == 1 && (x + 1) < row.length)) {
                        continue;
                    }
                    else if (map[y + 1][x] === 1 || map[y][x + 1] === 1) {
                        continue;
                    }
                    else {
                        var test = 0
                        for (var n = x; map[y][n] == 1; n--) {
                            if (map[y][n] === 1 && map[y + 1][n] === 1) {
                                test++;
                            }
                        }
                        if (test == 0) {
                            islandCount++;
                        }
                    }
                }
            }
        }
        return islandCount;
    }
    root.SHRI_ISLANDS.solution = solution;
})(this);
