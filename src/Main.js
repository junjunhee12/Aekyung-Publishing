import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import { LanguageProvider } from "./LanguageContext/LanguageContext";

function Main(){
    return(
        <LanguageProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />}/>
                        <Route path="Page1" element={<Page1 />}/>
                        <Route path="Page2" element={<Page2 />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </LanguageProvider>
        
    )
}

export default Main;