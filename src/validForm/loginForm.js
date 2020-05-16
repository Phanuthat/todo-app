export const validLoginForm = (username, password) => {
  switch (true) {
    case !username:
      return {
        isError: true,
        username: "Please input username",
      }
    case !password:
      return {
        isError: true,
        password: "Please input password",
      }
  }
}

export const validModalForm = (title, description) => {
  switch (true) {
    case !title:
      return {
        isError: true,
        title: "Please input title",
      }
    case !description:
      return {
        isError: true,
        description: "Please input description",
      }
    default:
      break
  }
}
