import React from 'react';
import useResources from './useResources';

// hooks and having an async function defined in useEffect
const ResourceList = ({ resource }) => {
    const resources = useResources(resource);
    return (
        <ul>
            {resources.map((record) => (
                <li key={record.id}>{record.title}</li>
            ))}
        </ul>
    );
};

// hooks pushing to a functional component
// destructure resource from props
// const ResourceList = ({ resource }) => {
//     const [resources, setResources] = useState([]);

//     const fetchResource = async (resource) => {
//         const response = await axios.get(
//             `https://jsonplaceholder.typicode.com/${resource}`
//         );

//         setResources(response.data);
//     };

//     useEffect(() => {
//         fetchResource(resource);
//     }, [resource]);

//     return <div>{resources.length}</div>;
// };

// hooks pushing to a class based component
// class ResourceList extends Component {
//     state = { resources: [] };
//     async componentDidMount() {
//         const response = await axios.get(
//             `https://jsonplaceholder.typicode.com/${this.props.resource}`
//         );

//         this.setState({ resources: response.data });
//     }

//     componentDidUpdate(prevProps) {
//         // this would cause state to update, causing us to grab api again resulting in infinite loop
//         // this.componentDidMount();
//         // console.log(prevProps);
//         if (prevProps.resource !== this.props.resource) {
//             this.componentDidMount();
//         }
//     }

//     render() {
//         return <div>{this.state.resources.length}</div>;
//     }
// }

export default ResourceList;
