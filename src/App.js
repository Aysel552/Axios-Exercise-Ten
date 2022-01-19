import './App.css';
import { Component } from 'react';
import axios from 'axios';

class App extends Component{

  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts ')
      .then(res => {
        const posts = res.data;
        console.log(posts);
        this.setState({posts})
    })
  }

  render() {
    return (
      <div>
        {this.state.posts.map(post => <p key={post.id}>{post.title}
          <span>{post.body}</span>
        </p>)}
      </div>
    )
  }

}

export default App;
