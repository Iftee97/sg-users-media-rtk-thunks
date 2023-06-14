import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../store"

export default function UsersList() {
  const dispatch = useDispatch()
  const { data, isLoading, error } = useSelector(state => state.users) // { data: [], isLoading: false, error: null }

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (isLoading) {
    return (
      <div className="text-center">
        Loading...
      </div>
    )
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

  return (
    <div>
      num of users: {data.length}
    </div>
  )
}
