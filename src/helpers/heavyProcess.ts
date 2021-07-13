export const heavyProcess = (iterations: number) => {
    for (let i = 0; i < iterations; i++) {
        console.log('Andiamo...');
    }
    return `${iterations} iterations performed`;
}