import axios from 'axios'
import qs from 'qs'

function listArticle (data) {
  const url = '/api/portal/article'
  return axios.get(url,data)
}

function findArticleById (id) {
  const url = '/api/portal/article/'+id
  return axios.get(url)
}

function viewArticle (id) {
  const url = '/api/portal/article/view'+id
  return axios.put(url)
}

function updateArticle (data) {
  const url = '/api/portal/article'
  return axios.put(url,data)
}

function listPictureConfigs (data) {
  const url = '/api/portal/pictureConfig'
  return axios.get(url,data)
}

function count() {
  const url = '/api/portal/visits'
  return axios.post(url)
}

export {
  listArticle,
  findArticleById,
  viewArticle,
  updateArticle,
  listPictureConfigs,
  count
}
