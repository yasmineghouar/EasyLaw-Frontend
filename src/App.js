import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import HomePage from './Pages/homePage'
import NewsPage from './Pages/newsPage'
import AidePage from './Pages/aidePage'
import OffresPage from './Pages/offresPage'
import DetailNews from './Pages/detailPage'
import LawPage from './Pages/lawPage'
import Jurisprudence from './Pages/jurisprudence'
import ChatBot from './Pages/chatBot'
import GestionUser from './Pages/gestionUser'
import GestionModirateur from './Pages/gestionModirateur'
import IndexLaw from "./Pages/indexLaw"
import IndexJurisprudence from "./Pages/indexJurisprudence"
import GestionOffres from "./Pages/gestionOffres"
import LawClassification from "./Pages/lawClassification"
import JrisprudenceClassification from "./Pages/JrisprudenceClassification"
import ScrapingTextJuridique from "./Pages/ScrapingTextJuridique"
import IndexNews from "./Pages/IndexNews"
import DetailFacture from './Pages/detailFacture'
import ProfilePage from './Pages/profilePage'; 
import NotifPage from './Pages/notifPage';
import LoginPage from './Pages/loginPage'
import RegisterPage from './Pages/registerPage'
import DetailsMahkamaPage from './Pages/detailsMahkamaPage'
import DetailsMajlissPage from './Pages/detailsMajlissPage'
import HistoriquesFacturationPage from './Pages/historiquesFacturationPage'
import GestionIntrestedDomain from './Pages/gestionIntrestedDomain'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/Aide' element={<AidePage />} />
          <Route path="/News/DetailNews/:idNews" element={<DetailNews />} />
          <Route path='/News' element={<NewsPage/>}/>
          <Route path='/Offres' element={<OffresPage/>}/>
          <Route path='/Law' element={<LawPage/>}/>
          <Route path='/Jurisprudence' element={<Jurisprudence/>}/>
          <Route path='/ChatBot' element={<ChatBot/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/detailsMahkama/:id" element={<DetailsMahkamaPage />} />  
          <Route path="/detailsMajliss/:id" element={<DetailsMajlissPage />} />
          <Route path="/historiquesFact" element={<HistoriquesFacturationPage />} />
          {/* administration pages  */}
          <Route path='/GestionUser' element={<GestionUser/>}/>
          <Route path='/GestionModirateur' element={<GestionModirateur/>}/>
          <Route path='/ScrapingTextJuridique' element={<ScrapingTextJuridique/>}/>
          <Route path='/IndexLaw' element={<IndexLaw/>}/>
          <Route path='/IndexJurisprudence' element={<IndexJurisprudence/>}/>
          <Route path='/IndexNews' element={<IndexNews/>}/>
          <Route path='/GestionOffres' element={<GestionOffres/>}/>
          <Route path='/LawClassification' element={<LawClassification/>}/>
          <Route path='/JrisprudenceClassification' element={<JrisprudenceClassification/>}/>
          <Route path='/DetailFacture/:idFacture' element={<DetailFacture/>}/>
          
          <Route path='/ProfilePage' element={<ProfilePage />} />
          <Route path='/NotifPage' element={<NotifPage />} />
          <Route path='/gestionIntrestedDomain' element={<GestionIntrestedDomain/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
