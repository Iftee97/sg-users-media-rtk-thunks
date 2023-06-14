import { useEffect } from "react"
import { useSelector } from "react-redux"
import { fetchUsers, addUser } from "../store"
import { useThunk } from "../hooks/useThunk"
import Skeleton from "./Skeleton"
import Button from "./Button"
import UsersListItem from "./UsersListItem"

export default function UsersList() {
  const { data } = useSelector(state => state.users) // state.users: { data: [], isLoading: false, error: null }

  const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers)
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser)

  useEffect(() => {
    doFetchUsers()
  }, [doFetchUsers])

  function handleAddUser() {
    doCreateUser()
  }

  return (
    <>
      <div className="flex flex-row items-center justify-between m-3">
        <h1 className="m-2 text-xl">
          Users
        </h1>
        <Button loading={isCreatingUser} onClick={handleAddUser}>
          + Add user
        </Button>
        {creatingUserError && <p>Error creating user</p>}
      </div>
      {loadingUsersError ? (
        <div>
          Error fetching data: {' '}
          <span className="font-semibold">
            {loadingUsersError.message}
          </span>
        </div>
      ) : (
        isLoadingUsers ? (
          <Skeleton times={6} className="h-10 w-full" />
        ) : (
          data.map(user => (
            <UsersListItem key={user.id} user={user} />
          ))
        )
      )}
    </>
  )
}
