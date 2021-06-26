import { useEffect, useRef, useState } from "react"

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

    const isMounted = useRef(true);
    const [state, setState] = useState<IFetch>({ data: [], loading: true, error: null });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])
    
    useEffect( () => {
        setState({ data: [], loading: true, error: null });
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setTimeout(() => {
                    if (isMounted.current) {
                        setState({
                            loading: false,
                            error: null,
                            data
                        });
                    }
                }, 4000);
            });
    },[url]);

    return state;
}