var React = require('react');

var AddTodo = React.createClass({
  hendleSubmit: function(e){
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.facus();
    }
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.hendleSubmit}>
          <input type="text" ref="todoText" placeholder="what do you need to do?" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
