import { useEffect, useState } from "react";


const useAllData = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])



    // console.log(data);


    return data;
};

export default useAllData;