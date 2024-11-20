export const getPlanets = async () => {
    const response = await fetch('https://my-json-server.typicode.com/your-backend-url/planets');
    return await response.json();
};
