const MyHelper = {
  install(app) {
    app.config.globalProperties.$log = (data) => {
      console.log(data)
    }
  },
}

export default MyHelper
