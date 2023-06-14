import { GoTrashcan } from "react-icons/go"
import { deleteUser } from "../store"
import { useThunk } from "../hooks/useThunk"
import Button from "./Button"

export default function UsersListItem({ user }) {
  const [doDeleteUser, isLoading, error] = useThunk(deleteUser)

  function handleClick() {
    doDeleteUser(user)
  }

  return (
    <div className="mb-2 border rounded">
      <div className="flex items-center gap-2 p-2 cursor-pointer">
        <Button loading={isLoading} onClick={handleClick}>
          <GoTrashcan />
        </Button>
        {error && <div>Error deleting user</div>}
        {user.name}
      </div>
    </div>
  )
}
