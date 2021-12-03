const api = {
  post: (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 3000)
    })
}

export default api
