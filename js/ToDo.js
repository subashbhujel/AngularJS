function todoCtrl($scope) {    

    // returns the total number of TODO list
    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    }

    // Array of ToDo list
    $scope.todos = [
        { text: 'Go get RayBan', done: false },
        { text: 'Workout', done: false },
        { text: 'Open an Chase Account', done: false },
        { text: 'Indoor Soccer', done: false }
    ]

    // Add new todo List
    $scope.addTodo = function () {
        $scope.todos.push({ text: $scope.newTodo, done: false });
        $scope.newTodo = '';
    }

    //Removes the todo List
    $scope.removeTodo = function () {
        $scope.todos = _.filter($scope.todos, function (todo) {
            return !todo.done;
        })
    }
}