export const validLoginForm = ({ username, password }) => {
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
