function getMinMove(start:string, target:string, brokenTiles: string[]): number{
const lettertonum: Record<string, number> = {
    "a":1,
    "b":2,
    "c":3,
    "d":4,
    "e":5,
    "f":6,
    "g":7,
    "h":8,
}
const numtoletter: Record<number, string> = {
    1:"a",
    2:"b",
    3:"c",
    4:"d",
    5:"e",
    6:"f",
    7:"g",
    8:"h",
}
let ans =0
let dir = [[-1, -2], [-2, -1], [1, -2], [2, -1], [-2, 1], [-1, 2], [2, 1], [1, 2]];
let n = 8;
let current = [lettertonum[start[0]], parseInt(start[1])];
let targetPos = [lettertonum[target[0]], parseInt(target[1])];
let visited = new Set<string>();
let queue: [number, number, number][] = [[current[0], current[1], 0]];
visited.add(start);
while (queue.length > 0) {
    let [x, y, move] = queue.shift()!;
    if (x === targetPos[0] && y === targetPos[1]) {
        ans=move;
        break;
    }
    for (const [dx, dy] of dir) {
        let newx = x + dx;
        let newy = y + dy;
        if (newx >= 1 && newx <= n && newy >= 1 && newy <= n) {
            let newtile = numtoletter[newx] + newy;
            if (!brokenTiles.includes(newtile) && !visited.has(newtile)) {
                queue.push([newx, newy, move + 1]);
                visited.add(newtile);
            }
        }
    }
}

return ans;
}
let start='d6'
let target='h8'
let brokenTiles= ['f6','f7']
console.log(getMinMove(start,target,brokenTiles))








