import { Routes, Route } from "react-router";
import VideoListPage from "./Pages/SerbaDigital";
import InformasiLayanan from "./Pages/InformasiLayanan";
import Beranda from "./Pages/Beranda";

const App= () => {
  return (
    <Routes>
      <Route path="/" element={<Beranda/>}/>
      <Route path="/SerbaDigital" element={<VideoListPage/>}/>
      <Route path="/LayananBPJS" element={<InformasiLayanan/>}/>
      <Route path="/BantuanLayanan" element={<VideoListPage/>}/>
    </Routes>
  )
}

export default App;