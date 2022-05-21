import { axiosInstance } from '@tools/api/axios-instance'

const URL = '/api/covid19-inf-state'

export type Covid19Item = {
  // 확진자 수
  decideCnt: string

  //기준일
  stateDt: string

  // 기준시간
  stateTime: string
}

export type Covid19Response = {
  items: {
    item: Covid19Item[]
  }
}

export const getCovid19InfState = async (): Promise<Covid19Response> => {
  const { data } = await axiosInstance.get<Covid19Response>(URL)

  return data
}
