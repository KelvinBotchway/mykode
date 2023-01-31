graph = {
    '5': ['3', '7'],
    '3': ['2', '4'],
    '7': ['8'],
    '2': [],
    '4': ['8'],
    '8': [],

}

visited = []
queue = []
bfs_traversal = []


def bfs(visited, graph, node, goal):
    visited.append(node)
    queue.append(node)
    m = node
    print(f'Step Initial Queue: {queue} Initial Visited: {visited}')
    while m != goal:
        m = queue.pop(0)
        bfs_traversal.append(m)
        for neighbour in graph[m]:
            print(f'Neighbour: {neighbour}')
            if neighbour not in visited:
                visited.append(neighbour)
                queue.append(neighbour)
                print(f'Step Queue: {queue} Visited: {visited}')

        print(f"Steps : {bfs_traversal}")
        print(f"Number of steps :{len(bfs_traversal)}")


print("Following is the Breadth-First Search")
bfs(visited, graph, '5', '8')