import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/page/home";
import AjouterClientForm from "./component/page/ajouterClient";
import AjouterFactureForm from "./component/page/ajouterFacture";
//import AfficherEtatDesFacturesForm from "./component/page/afficherEtatDesFactures";
import EnregistrerPaiementForm from "./component/page/enregistrerPaiement.jsx";
import ContactForm from "./component/page/contact";
import Navbar from "./component/navbar";
import RechercheClientParNumero from "./component/page/rechercheFactureParNom.jsx";
import RechercherFactureParNumeroForm from "./component/page/rechercheFactureParNumero";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/Home" element={<Home />} />

        <Route path="/ajouterClient" element={<AjouterClientForm />} />
        
        <Route path="/ajouterFacture" element={<AjouterFactureForm />} />
       
        <Route
          path="/enregistrerPaiement"
          element={<EnregistrerPaiementForm />}
        />
        <Route path="/contact" element={<ContactForm />} />

        <Route
          path="/RechercheFactureParNom"
          element={<RechercheClientParNumero />}
        />
        <Route
          path="/rechercherFactureParNumero"
          element={<RechercherFactureParNumeroForm />}
        />
      </Routes>
    </>
  );
}
export default App;
// <Route
//path="/afficherEtatDesFactures"
//element={<AfficherEtatDesFacturesForm />}
///>