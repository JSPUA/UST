import React from 'react'
import {Routes, Route}from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import ShowBook from './pages/ShowBook'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'
import BookList from './pages/BookList'
import LoginPage from './pages/LoginPage'
import ForgetPassword from './pages/ForgetPassword'
import Signup from './pages/Signup'
import Upload from './pages/upload'
import ApplyList from './pages/ApplyList'
import SpecificApplyInfo from './pages/specificApplyInfo'
import DeleteApplyList from './pages/ApplyDelete'
import TableWithSearch from './pages/sampletable'
import UploadPDF from './pages/uploadPDF'
import ResearchList from './pages/ResearchList'
import PDFViewerPage from './pages/PDFViewerPage'
import PDFViewer from './pages/PDFViewer'
import AddPicture from './pages/AddPicture'
import ShowPicture from './pages/ShowPicture'
import UpdatePicture from './pages/UpdatePicture'
import DeletePicture from './pages/DeletePicture'
import AddPatient from './pages/AddPatient'
import AddPatientPassword from './pages/AddPatientPassword'
import PatientList from './pages/PatientList'
import SpecificPatientInfo from './pages/specificPatientInfo'
import UpdatePatient from './pages/UpdatePatient'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/booklist' element={<BookList/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>
      <Route path='/forgetpassword' element={<ForgetPassword/>}/>
      <Route path='/upload' element={<Upload/>}/>
      <Route path='/applyList' element={<ApplyList/>}/>
      <Route path='/applyListFilter' element={<ApplyList/>}/>
      <Route path='/get-image/details/:id' element={<SpecificApplyInfo/>}/>
      <Route path='/get-image/delete/:id' element={<DeleteApplyList/>}/>
      <Route path='/sampleTable' element={<TableWithSearch/>}/>
      <Route path='/uploadPDF' element={<UploadPDF/>}/>
      <Route path='/researchList' element={<ResearchList/>}/>
      
      <Route path="/pdf/:id" element={<PDFViewer />} />

      <Route path="/addPic" element={<AddPicture/>} />
      <Route path="/showPic" element={<ShowPicture/>} />
      <Route path="/updatePic/:id" element={<UpdatePicture/>} />
      <Route path="/deletePic/:id" element={<DeletePicture/>} />
      <Route path="/addPatient" element={<AddPatient/>} />
     
      <Route path="/showPatient" element={<PatientList/>} />
      <Route path="/showPatientByID/:id" element={<SpecificPatientInfo/>} />
      <Route path="/updatePatientByID/:id" element={<UpdatePatient/>} />
      {/* <Route path='/viewPDF' element={<ViewPDF/>}/> */}

    </Routes>
  )
}

export default App