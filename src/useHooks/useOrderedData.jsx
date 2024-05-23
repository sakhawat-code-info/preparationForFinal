import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuthInfo from "./useAuthInfo";


const useOrderedData = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuthInfo();

    const {refetch, data: orderData = [] } = useQuery({
        queryKey: ['orderData', user?.email],
        queryFn: async () => {
            const result = await axiosSecure(`/foodOrdered?email=${user.email}`);
            return result.data;
        }

    })
    return [orderData, refetch];

};

export default useOrderedData;