import React, { useContext, useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import { StoreContext } from "../../context/store"
import { Button, Space, Modal as Modalantd } from "antd"
import { StyleCardWapper, StyleWapper } from "./Style"
import { Formik } from "formik"
import { InputWithErrorMessage } from "../../common"
import { getAll, create, remove, update } from "../../api"
import { validModalForm } from "../../validForm/loginForm"
export const Todo = (props) => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState({ title: "", description: "", id: "" })
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    getTodos()
  }, [!todos])

  const { modal } = useContext(StoreContext)
  const { modalType, setModalType, showModal, setShowModal } = modal

  function redirectTo(path) {
    return <Redirect to={path} />
  }

  const modalOpen = (type) => {
    setShowModal(true)
    setModalType(type)
  }

  const modalClose = () => {
    setShowModal(false)
    setModalType("")
    clearTodoState()
  }

  const onClickEdit = (values) => {
    modalOpen("update")
    setTodo(values)
  }

  const onClickDelete = (values) => {
    const { confirm } = Modalantd
    confirm({
      title: "Are you sure delete Todo?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteTodo(values)
      },
    })
  }

  const clearTodoState = () => {
    setTodo({ title: "", description: "", id: "" })
  }

  const getTodos = async () => {
    try {
      const res = await getAll()
      const data = res.data
      if (data) {
        setTodos(data)
      }
    } catch (error) {
      const { status } = error.response
      if (status === 401) {
        setRedirect(true)
      }
    }
  }

  const createTodo = async (values, formikActions) => {
    const { title, description } = values
    const validValueModal = validModalForm(title, description)

    if (validValueModal) {
      formikActions.setErrors(validValueModal)
      return
    }
    try {
      const data = {
        title,
        description,
      }

      const res = await create(data)
      if (res.status === 200) {
        modalClose()
        getTodos()
        modalClose()
      }
    } catch (error) {
      console.log(error.response)
    }
  }

  const updateTodo = async (values, formikActions) => {
    const { title, description } = values
    const validValueModal = validModalForm(title, description)

    if (validValueModal) {
      formikActions.setErrors(validValueModal)
      return
    }
    const data = {
      title: values.title,
      description: values.description,
    }
    try {
      const res = await update(values._id, data)
      if (res.status === 200) {
        modalClose()
        getTodos()
        modalClose()
      }
    } catch (error) {
      console.log(error.response)
    }
  }

  const deleteTodo = async (values) => {
    try {
      const res = await remove(values._id)
      if (res.status === 200) {
        getTodos()
      }
    } catch (error) {
      console.log(error.response)
    }
  }

  const onSubmit = (values, formikActions) => {
    switch (modalType) {
      case "update":
        updateTodo(values, formikActions)
        break
      case "create":
        createTodo(values, formikActions)
        break
      default:
        break
    }
  }

  const Modal = () => (
    <Formik
      enableReinitialize
      initialValues={todo}
      onSubmit={(values, actions) => onSubmit(values, actions)}
    >
      {({ values, errors, handleSubmit, handleChange }) => (
        <Modalantd
          title={modalType}
          visible={showModal}
          onOk={handleSubmit}
          onCancel={modalClose}
          okText='Submit'
        >
          <div>
            <InputWithErrorMessage
              onChange={handleChange("title")}
              placeholder='Title'
              value={values.title}
              isErrorStatus={!!errors.title}
              errorMessage={errors.title}
            />
            <InputWithErrorMessage
              onChange={handleChange("description")}
              placeholder='Description'
              value={values.description}
              isErrorStatus={!!errors.description}
              errorMessage={errors.description}
            />
          </div>
        </Modalantd>
      )}
    </Formik>
  )
  if (redirect) return redirectTo("/login")
  return (
    <StyleWapper>
      <Space direction='vertical' className='space-card'>
        <div className='button-center'>
          <Button type='primary' onClick={() => modalOpen("create")}>
            + Create
          </Button>
        </div>
        {todos.map((todo) => (
          <Card
            todo={todo}
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
          />
        ))}
      </Space>
      <Modal />
    </StyleWapper>
  )
}

const Card = ({
  onClickEdit = () => {},
  onClickDelete = () => {},
  todo = {},
}) => (
  <StyleCardWapper>
    <div className='position-end'>
      <Space>
        <a onClick={() => onClickEdit(todo)}>edit</a>
        <a onClick={() => onClickDelete(todo)}>delete</a>
      </Space>
    </div>
    <h3>{todo?.title}</h3>
    <p>{todo?.description}</p>
  </StyleCardWapper>
)
