import { useQuery } from "@tanstack/react-query";
import { getMainData /* getProjectData */ } from "./api";

/* export function useProjectsData() {
  return useQuery({
    queryKey: ["projectData"],
    queryFn: getProjectData,
  });
} */

export function useMainData() {
  return useQuery({
    queryKey: ["mainData"],
    queryFn: getMainData,
    refetchInterval: false,
  });
}
