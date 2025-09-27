import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Nav from './component/Nav';
import Mortgages from "./component/Elementspage/Mortgages";
import Protection from "./component/Elementspage/Protection";
import Administration from "./component/Elementspage/Administration";
import SmartrConnect from "./component/Elementspage/SmartrConnect";
import LeadsBusinessContacts from "./component/Elementspage/LeadsBusinessContacts";
import HomeBuyer from "./component/Elementspage/HomeBuyer";
import Aboutus from "./component/About/Aboutus";
import Team from "./component/About/Team";
import Contacts from "./component/About/Contacts";
import BookDemo from "./component/About/BookDemo";
import Home1 from "./component/Home/Home1";

const App = () => (
  <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home1 />} />
      <Route path="/mortgages" element={<Mortgages />} />
      <Route path="/protection" element={<Protection />} />
      <Route path="/administration" element={<Administration />} />
      <Route path="/smartrconnect" element={<SmartrConnect />} />
      <Route path="/leads-business-contacts" element={<LeadsBusinessContacts />} />
      <Route path="/homebuyer" element={<HomeBuyer />} />
      <Route path="/about-us" element={<Aboutus />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/book-demo" element={<BookDemo />} />
    </Routes>
  </>
);

export default App;
