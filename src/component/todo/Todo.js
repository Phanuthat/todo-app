import React, { useContext, useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import { StoreContext } from "../../context/store"
import { Button, Space, Modal as Modalantd } from "antd"
import { Card, StyleWapper } from "./Style"
import { Formik } from "formik"
import axios from "axios"
import { InputWithErrorMessage } from "../../common"
export const Todo = (props) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState("")
  const [todos, setTodo] = useState([])

  useEffect(() => {
    getTodos()
  }, [])
  const { auth } = useContext(StoreContext)
  const getToken = JSON.parse(auth.token)
  if (!getToken.token) return <Redirect to='/login' />

  const config = (title = "", description = "") => {
    return {
      headers: {
        Authorization: `Bearer ${getToken}`,
      },
      data: {
        title,
        description,
      },
    }
  }
  const apiEndPoint = "https://candidate.neversitup.com/todo"

  const showModal = (type) => {
    setModalOpen(!modalOpen)
    setModalType(type)
  }

  const getTodos = async () => {
    try {
      const res = await axios.get(`${apiEndPoint}/todos`, config)
      const data = res.data
      if (data) {
        setTodo(data)
        console.log("red data", data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const createTodo = async (title, description) => {
    axios({
      url: `${apiEndPoint}/todos`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${getToken}`,
      },
      data: {
        title,
        description,
      },
    })
      .then((res) => {
        console.log("Res edit page ===================>", res.data)
        // this.props.location.push("/profile")
      })
      .catch((err) => {
        console.log(err)
      })

    // try {
    //   const res = await axios.post(
    //     `${apiEndPoint}/todos/`,
    //     config(title, description),
    //   )
    //   const data = res.data
    //   if (data) {
    //     console.log(data)
    //   }
    // } catch (error) {
    //   console.log(error)
    // }
  }

  const onSubmit = (values, formikActions) => {
    const { title, description } = values

    switch (modalType) {
      case "edit":
        break
      case "add":
        break
      case "delete":
        break
      default:
        break
    }
    createTodo(title, description)
  }

  const Modal = () => (
    <Formik
      initialValues={{ title: "", description: "" }}
      onSubmit={(values, actions) => onSubmit(values, actions)}
    >
      {({ values, errors, handleSubmit, handleChange }) => (
        <Modalantd
          title={modalType}
          visible={modalOpen}
          onOk={handleSubmit}
          //   confirmLoading={confirmLoading}
          onCancel={showModal}
          okText='Submit'
        >
          <div>
            <InputWithErrorMessage
              onChange={handleChange("title")}
              placeholder='Title'
              value={values.title}
            />
            <InputWithErrorMessage
              onChange={handleChange("description")}
              placeholder='Description'
              value={values.description}
            />
          </div>
        </Modalantd>
      )}
    </Formik>
  )
  console.log(todos)
  return (
    <StyleWapper>
      <Space direction='vertical'>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button type='primary' onClick={() => showModal("create")}>
            + Create
          </Button>
        </div>
        <Card>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <a onClick={() => showModal("edit")}>edit</a>
            <a onClick={() => showModal("delete")}>delete</a>
          </div>
          <h3>Title</h3>
          <p>test</p>
        </Card>
        <Card>
          <h3>Title</h3>
          <p>test</p>
        </Card>
        <Card>
          <h3>Title</h3>
          <p>test</p>
        </Card>
        <Card>
          <h3>Title</h3>
          <p>test</p>
        </Card>
        <Card>
          <h3>Title</h3>
          <p>test</p>
        </Card>
      </Space>
      <Modal />
    </StyleWapper>
  )
}
