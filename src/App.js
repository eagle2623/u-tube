import {BrowserRouter , Routes , Route} from 'react-router-dom'
import {Box} from '@mui/material'


import Navbar from './components/Navbar'
import Feed from './components/Feed'
import VideoDetail from './components/VideoDetail'
import ChannelDetail from './components/ChannelDetail'
import SearchFeed from './components/SearchFeed'

// import { Navbar , Feed , VideoDetail , ChannelDetail , SearchFeed } from './components';


function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Feed/>}/>
          <Route path='/video/:id' element={<VideoDetail/>}/>
          <Route path='/channel/:id' element={<ChannelDetail/>}/>
          <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
