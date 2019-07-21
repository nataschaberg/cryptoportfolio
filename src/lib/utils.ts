import axios from 'axios'

export async function getRequest(url: string): Promise<any> {
  let data
  try {
    const res = await axios.get(url)
    data = res.data
  } catch (err) {
    // TODO: catch err.response for error status codes
    return err
  }
  return data
}

interface Products {
  id: string
  stats: object
}

export async function getProductIds(url: string): Promise<Products[]> {
  // call api and return [{id: , stats: {}}]
  const result = await getRequest(url)
  return result.map((el: any) => ({ id: el.id, stats: {} }))
}

export async function getProductStats(
  url: string,
  products: Products[]
): Promise<Products[]> {
  return await Promise.all(
    products.map(async (el: any) => {
      return {
        id: el.id,
        stats: await getRequest(`${url}/${el.id}/stats`),
      }
    })
  )
}
