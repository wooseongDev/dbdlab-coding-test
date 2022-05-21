import axios from 'axios'

const URL =
  'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9f70142f-4f22-4bf9-84d4-62ba9edfcdda/getCovid19GenAgeCaseInfJson.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220520T100431Z&X-Amz-Expires=86400&X-Amz-Signature=1d52f32f40406a54d564c218ac94c8f2a4f2b2f405f66b6a1a6883cabe5b767d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22getCovid19GenAgeCaseInfJson.json%22&x-id=GetObject'

export type GenAgeCaseItem = {
  // 확진자
  confCase: string

  // 구분(성별,연령별)
  gubun: string

  // 기준일
  stateDt: string
}

export type GenAgeCaseResponse = {
  items: {
    item: GenAgeCaseItem[]
  }
}

export const getCovid19GenAgeCaseInf = async (): Promise<GenAgeCaseResponse> => {
  const { data } = await axios.get<GenAgeCaseResponse>(URL)

  return data
}
