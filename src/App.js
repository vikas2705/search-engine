import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Store from "./pages/store";
import Account from "./pages/account";
import Images from "./pages/images";
import SearchResult from "./pages/search-result";
import NotFound from "./pages/not-found";

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/store' element={<Store />} />
                <Route path='/account' element={<Account />} />
                <Route path='/images' element={<Images />} />
                <Route path='/search' element={<SearchResult />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
