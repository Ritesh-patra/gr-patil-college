import { ConfigProvider } from 'antd'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import {
  PrePrimaryPage,
  SchoolPage,
  CollegePage,
  GalleryPage,
  DeskPage,
} from './pages/InnerPages'
import { appTheme } from './theme'

export default function App() {
  return (
    <ConfigProvider theme={appTheme}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/pre-primary" element={<PrePrimaryPage />} />
          <Route path="/school" element={<SchoolPage />} />
          <Route path="/jr-college" element={<CollegePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/information-desk" element={<DeskPage />} />
        </Route>
      </Routes>
    </ConfigProvider>
  )
}
