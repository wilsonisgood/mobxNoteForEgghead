const {observable, computed} = mobx;
const {observer} = mobxReact;
const {Component} = React;

// STORE

class Todo {
  id = Math.random();
  @observable title;
  @observable finished = false;
  constructor(title) {
    this.title = title;
  }
}

class TodoList {
  @observable todos = [];
  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}

class CompletedList {
    @observable compoleteds = []
    @computed get completedCount() {
        return this.compoleteds.filter(completed => {
            console.log('im get')
            return compoleteds.finished
        }).length
    }
    @computed set completedCount() {
        console.log('im set')
        return compoleteds.finished
    }
}

@observer
class TodoListView extends Component {
  render() {
    return {
        <div>
            <ul>
                {
                    this.props.CompletedList.compoleteds.map(completed => <TodoView todo={todo} key={todo.id}/>)
                }
            </ul>
        </div>
    }
  }
}

const TodoView = observer(({todo}) =>
    <li>
        <input type="checkbox"
            checked={todo.finished}
            onClick={() => todo.finished = !todo.finished}
        />{todo.title}
    </li>
)

const store = new CompletedList()

ReactDOM.render(<TodoListView todoList={store} />, document.getElementById('mount'))
store.compoleteds.push(
    new Todo('get a cup of coffee'),
    new Todo('get a cup of cafe')
)
store.todos.finished = true