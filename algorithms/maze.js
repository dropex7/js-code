let maze = [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '+', '+', '+', '#', '+', '+', '+', '#'],
    ['#', '+', '#', '+', '#', '+', '#', '+', '#'],
    ['+', '+', '#', '+', '0', '+', '#', '+', '#'],
    ['#', '#', '#', '+', '#', '#', '#', '#', '#'],
    ['#', '#', '+', '+', '#', '#', '#', '#', '#'],
    ['#', '#', '+', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#'],
];

let endCoor;
let stack = [];
let correctPath = [];
let visited = [];
let result = [];

solveMaze();

function solveMaze() {
    try {
        endCoor = findEnd(maze);
        const startCoor = findStart(maze);
        stack.push({
            x: startCoor[0],
            y: startCoor[1]
        });
        createVisited();
        recursionSolve(stack[0].x, stack[0].y);
        findWay(correctPath);
    } catch (e) {
        console.log('The problem cannot be solved')
        return
    }

}

// Инициализируем массив с посещениями 
function createVisited() {
    for (let i = 0; i < maze.length; i++) {
        visited.push([]);
        for (let k = 0; k < maze[i].length; k++) {
            visited[i][k] = false;
        }
    }
}

// Ищем координаты начала
function findStart(maze) {
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[i].length; j++) {
            if (maze[i][j] === '0') {
                return [i, j]
            }
        }
    }
}

// Ищем координаты конца
function findEnd(maze) {
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[i].length; j++) {
            if (i === 0 || i === maze.length - 1 || j === 0 || j === maze[i].length - 1)
                if (maze[i][j] === '+') {
                    return [i, j]
                }
        }
    }
    return null
}
// Ищем путь, начиная с конца
function findWay(way) {
    let currentCoor = {
        x: way[way.length - 1].x,
        y: way[way.length - 1].y,
        direction: way[way.length - 1].direction
    }
    for (let i = way.length - 1; i > 0; i--) {
        if (Math.abs(currentCoor.x - way[i - 1].x) + Math.abs(currentCoor.y - way[i - 1].y) < 2) {
            result.unshift(currentCoor.direction);
            currentCoor.x = way[i - 1].x;
            currentCoor.y = way[i - 1].y;
            currentCoor.direction = way[i - 1].direction;
        }
    }
    console.log(result);
}

function recursionSolve(x, y, direction) {
    while (stack.length > 0) {
        stack.shift()
        visited[x][y] = true
        correctPath.push({
            x: x,
            y: y,
            direction: direction
        })
        if (x === endCoor[0] && y === endCoor[1]) {
            console.log('solve ended');
            return
        }
        if (maze[x + 1][y] === '+' && !visited[x + 1][y]) {
            stack.push({
                x: x + 1,
                y: y
            });
            recursionSolve(x + 1, y, 'bottom');
        }
        if (maze[x - 1][y] === '+' && !visited[x - 1][y]) {
            stack.push({
                x: x - 1,
                y: y
            });
            recursionSolve(x - 1, y, 'top');
        }
        if (maze[x][y + 1] === '+' && !visited[x][y + 1]) {
            stack.push({
                x: x,
                y: y + 1
            });
            recursionSolve(x, y + 1, 'right');
        }
        if (maze[x][y - 1] === '+' && !visited[x][y - 1]) {
            stack.push({
                x: x,
                y: y - 1
            });
            recursionSolve(x, y - 1, 'left');
        }
    }
}