import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
    const [resources, setResources] = useState([]);

    // useEffect not allowed to have async function
    useEffect(() => {
        // workaround is to define a function
        (async (resource) => {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/${resource}`
            );

            setResources(response.data);
            // and immediately invoke it
        })(resource);
    }, [resource]);

    return resources;
};

export default useResources;
