import Request from '@/api/request'

const Increment: any = (param: object) => Request.post('', param)

export { Increment }
