function shortestPath(V, edges, start, end) {
  let adj = [];
  for (let i = 0; i < V; i++) adj.push([]);
  for (let i = 0; i < edges.length; i++) {
    let u = edges[i][0], v = edges[i][1];
    adj[u].push(v);
    adj[v].push(u);
  }

  let queue = [[start, 0]];
  let visited = new Array(V).fill(false);
  visited[start] = true;

  for (let i = 0; i < queue.length; i++) {
    let node = queue[i][0], dist = queue[i][1];
    if (node === end) return dist;

    for (let j = 0; j < adj[node].length; j++) {
      let nei = adj[node][j];
      if (!visited[nei]) {
        visited[nei] = true;
        queue.push([nei, dist + 1]);
      }
    }
  }

  return -1;
}

console.log(shortestPath(5, [[0,1],[0,2],[1,3],[2,3],[3,4]], 0, 4)); 
