import axios from 'axios'
import qs from 'qs'

function listArticle () {
  const url = '/api/portal/article'
  return axios.get(url)
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

export {
  listArticle,
  findArticleById,
  viewArticle,
  updateArticle
}
