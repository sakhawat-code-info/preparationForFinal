import { useEffect, useState } from "react";


const useAllData = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])



    // console.log(data);


    return data;
};

export default useAllData;