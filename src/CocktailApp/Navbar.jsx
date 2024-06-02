
import {
BrowserRouter,
Routes,
Route,
Link,
} from "react-router-dom";


const Navbar = () => {
return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="users/*" element={<Users />} />
  </Routes>
</BrowserRouter>
);
}