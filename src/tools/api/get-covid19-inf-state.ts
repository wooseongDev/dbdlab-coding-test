import axios from 'axios'

const URL =
  'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/84168dd6-1a38-4965-90a9-0f08f82280ed/getCovid19InfStateJson.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220520T094735Z&X-Amz-Expires=86400&X-Amz-Signature=ed0b1a56dc82fcb145b4b1b3aa0d3401fb32ca0df53fcf11d2dad4745173111b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22getCovid19InfStateJson.json%22&x-id=GetObject'

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
  const { data } = await axios.get<Covid19Response>(URL)

  return data
}
