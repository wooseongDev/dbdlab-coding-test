import { axiosInstance } from '@tools/api/axios-instance'

const URL = '/api/covid19-gen-age-case-inf'

export type Covid19GenAgeCaseItem = {
  // 확진자
  confCase: string

  // 구분(성별,연령별)
  gubun: string

  // 기준일
  stateDt: string
}

export type GenAgeCaseResponse = {
  items: {
    item: Covid19GenAgeCaseItem[]
  }
}

export const getCovid19GenAgeCaseInf = async (): Promise<GenAgeCaseResponse> => {
  const { data } = await axiosInstance.get<GenAgeCaseResponse>(URL)

  return data
}
