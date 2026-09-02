import { ConfigProvider } from 'antd'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import {
  PrePrimaryPage,
  NurseryPage,
  JrKgPage,
  SrKgPage,
  SchoolPage,
  PrimaryPage,
  SecondaryPage,
  CollegePage,
  SciencePage,
  CommercePage,
  DegreePage,
  GalleryPage,
  DeskPage,
  NoticesPage,
  GuidelinesPage,
  CircularPage,
} from './pages/InnerPages'
import { appTheme } from './theme'

export default function App() {
  return (
    <ConfigProvider theme={appTheme}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/pre-primary" element={<PrePrimaryPage />} />
          <Route path="/pre-primary/nursery" element={<NurseryPage />} />
          <Route path="/pre-primary/jr-kg" element={<JrKgPage />} />
          <Route path="/pre-primary/sr-kg" element={<SrKgPage />} />
          <Route path="/school" element={<SchoolPage />} />
          <Route path="/school/primary" element={<PrimaryPage />} />
          <Route path="/school/secondary" element={<SecondaryPage />} />
          <Route path="/jr-college" element={<CollegePage />} />
          <Route path="/jr-college/science" element={<SciencePage />} />
          <Route path="/jr-college/commerce" element={<CommercePage />} />
          <Route path="/jr-college/degree" element={<DegreePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/information-desk" element={<DeskPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/guidelines" element={<GuidelinesPage />} />
          <Route path="/circular" element={<CircularPage />} />
        </Route>
      </Routes>
    </ConfigProvider>
  )
}
