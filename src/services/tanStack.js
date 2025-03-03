import { useQuery } from '@tanstack/react-query'
import { getMainData } from './api'

export function useMainData() {
  return useQuery({
    queryKey: ['mainData'],
    queryFn: getMainData,
    refetchInterval: false,
  })
}
