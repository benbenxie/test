import api from './index'
// axios
import request from '@/utils/request'

// 查看人员详情
export function ckry(data) {
  return request({
    url: api.ckry,
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data),
    hideloading: true
  })
}
