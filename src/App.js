import './styles/base.css'
import './styles/typography.css'
import CommentsSection from './layout/CommentsSection';
import myData from './assets/data/data.json'

import ContextProvider from './contexts/ContextProvider';
import Modal from './components/UI/Modal';
function App() {
  return (
    <ContextProvider>

    
      <CommentsSection data={myData}/>
   
    
    </ContextProvider>
  );
}

export default App;
