// 导入request.js
import request from '~/utils/request'// @==>src
// 可以按需导出
// 获取商品列表  方法一  返回一个请求的方法
export const getProduct = (params) => request.post('/product/', {params})
// 获取商品详情
export const getProductDetail = (id) => request.post(`/product/${id}`)
// 方法二 在api文件里出来异步请求
export const getCategory = async () => {
  const res = await request.post(`/category/`)
  return res.data.results
}
