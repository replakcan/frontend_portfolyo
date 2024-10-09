import { useQuery } from "@tanstack/react-query";
import { getLangData } from "./api";

export function useLangData() {

    return useQuery({
        queryKey: ["langData"],
        queryFn: getLangData
    })

}