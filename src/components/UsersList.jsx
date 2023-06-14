import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers, addUser } from "../store"
import Skeleton from "./Skeleton"
import Button from "./Button"

export default function UsersList() {
  const dispatch = useDispatch()
  const { data, isLoading, error } = useSelector(state => state.users) // { data: [], isLoading: false, error: null }

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (isLoading) {
    return <Skeleton times={6} className="h-10 w-full" />
  }

  if (error) {
    console.log('error: >>>>>>>', error)
    return (
      <div>
        Error fetching data: {' '}
        <span className="font-semibold">
          {error.message}
        </span>
      </div>
    )
  }

  const renderedUsers = data.map(user => (
    <div key={user.id} className="mb-2 border rounded">
      <div className="flex p-2 items-center justify-between cursor-pointer">
        {user.name}
      </div>
    </div>
  ))

  return (
    <>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">
          Users
        </h1>
        <Button onClick={() => dispatch(addUser())}>
          + Add user
        </Button>
      </div>
      {renderedUsers}
    </>
  )
}
