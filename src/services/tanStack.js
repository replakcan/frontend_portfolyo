import { useQuery } from "@tanstack/react-query";
import { getProjectData } from "./api";

export function useLangData() {

    return useQuery({
        queryKey: ["projectData"],
        queryFn: getProjectData
    })

}