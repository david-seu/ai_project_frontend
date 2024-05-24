import { useState } from 'react'
import LoginForm from '../components/LoginForm'

export default function Home() {
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    console.log({
      username,
      password,
    })
  }

  return (
    <LoginForm
      setPassword={setPassword}
      setUsername={setUsername}
      handleSubmit={handleSubmit}
    />
  )
}
