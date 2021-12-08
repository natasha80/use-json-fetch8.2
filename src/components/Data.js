import useJsonFetch from '../hooks/useJsonFetch';

const Data = () => {
    // eslint-disable-next-line no-unused-vars
    const [data, loading, error] = useJsonFetch('http://localhost:7070/data');

    return (
        <div className="Data">
            <div className="Result">
                {loading && 'Loading...'}
                {data.status}
            </div>
        </div>
    );
};

export default Data;