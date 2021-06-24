import { useEffect, useState } from "react"

interface IFetch {
    data: IQuote[];
    loading: boolean;
    error: null;
}

interface IQuote {
    id: number;
    quote?: string;
    author?: string;
    series: string;
}

export const useFetch = ( url: string ) => {
    const [state, setState] = useState<IFetch>({ data: [], loading: true, error: null });
    
    useEffect( () => {
        setState({ data: [], loading: true, error: null });
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setState({
                    loading: false,
                    error: null,
                    data
                });
            });
    },[url]);

    return state;
}