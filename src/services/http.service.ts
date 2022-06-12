import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export class HttpService {
  static async request<T = any>(
    identifier: string,
    axiosConfig: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    const { method, url } = axiosConfig
    const baseMessage = `${method} ⟴ Axios ⟴ ${identifier} ⟴ URL: ${url}`

    try {
      const response = await axios.request(axiosConfig)

      console.log(`${response.status} ${baseMessage}`, response)

      return response
    } catch (e: any) {
      console.log(
        `${e?.response?.status || 'UNANABLE'} ${baseMessage}`,
        e?.response || e,
      )

      throw new Error(e)
    }
  }
}
