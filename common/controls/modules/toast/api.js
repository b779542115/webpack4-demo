import createAPI from '../../assets/helpers/create-api'

export default function addToast (Vue, Toast) {
  createAPI(Vue, Toast, [], true)
}