import { useQuery } from "@tanstack/react-query";
import { getProjectData } from "./api";

export function useProjectsData() {
  return useQuery({
    queryKey: ["projectData"],
    queryFn: getProjectData,
  });
}
