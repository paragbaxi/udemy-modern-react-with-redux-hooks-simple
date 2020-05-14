import React, { useState } from 'react';
import ResourceList from './ResourceList';

// function level state using hooks
const App = () => {
    const [resource, setResource] = useState('posts');
    return (
        <div className="ui container">
            <div>
                <button
                    className="ui button"
                    onClick={() => setResource('posts')}
                >
                    Posts
                </button>
                <button
                    className="ui button"
                    onClick={() => setResource('todos')}
                >
                    Todos
                </button>
            </div>
            <ResourceList resource={resource} />
        </div>
    );
};

// class level state
// class App extends Component {
//     state = { resource: 'posts' };
//     render() {
//         return (
//             <div className="ui container">
//                 <div>
//                     <button
//                         className="ui button"
//                         onClick={() => this.setState({ resource: 'posts' })}
//                     >
//                         Posts
//                     </button>
//                     <button
//                         className="ui button"
//                         onClick={() => this.setState({ resource: 'todos' })}
//                     >
//                         Todos
//                     </button>
//                 </div>
//                 {this.state.resource}
//             </div>
//         );
//     }
// }

export default App;
