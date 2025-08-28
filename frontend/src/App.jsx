import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout'
// import AdminDashboard from './components/AdminDashboard'
// import DonorsRecipientsPortal from './components/demo'
// import Guideline from './components/Guideline'
// import Donor from './components/Donor'
// import DonorDashboard from './components/DonorDashboard'
// import FindMatch from './components/FindMatch'

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
        {/* <Route path='/' element={<AdminDashboard/>}/>
        <Route path='/guide' element={<Guideline/>}/>
        <Route path='/donor' element={<Donor/>}/>
        <Route path='/find' element={<FindMatch/>}/>
        <Route path='/dashboard' element={<DonorDashboard/>}/>
        <Route path='/demo' element={<DonorsRecipientsPortal/>}/> */}
      </Route>
    </Routes>
  )
}

export default App