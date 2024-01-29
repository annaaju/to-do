import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from '../views/Home/app';
import Task from '../views/Task/task';
import QrCode from '../views/QrCode/QrCode'

export default function MyRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/task" element={<Task />} />
                <Route path="/task/:id" element={<Task />} />
                <Route path="/qrcode" element={<QrCode />} />
            </Routes>
        </BrowserRouter>
    )
}
