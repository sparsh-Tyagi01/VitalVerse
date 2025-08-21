import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import AdminDashboard from './components/AdminDashboard'

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path='/' element={<AdminDashboard/>}/>
      </Route>
    </Routes>
  )
}

export default App