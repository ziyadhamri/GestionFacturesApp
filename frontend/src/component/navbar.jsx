import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar(){
  return(
      <nav className="navbar-expand-lg  m-3 navbar bg-white border-bottom border-body" >
          <div className="container-fluid ">
              <button className="navbar-toggler" type="button" >
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <div >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-decoration-underline fw-bold shadow p-3 mb-5 bg-body-tertiary rounded ">
                      <li className="nav-item ">
                      <NavLink end to="/home" className="nav-link " id='home' >Accueil</NavLink>
                      </li>
                      <li className="nav-item">
                      <NavLink className="nav-link " to="/ajouterClient">Ajouter Client</NavLink>
                      </li>
                      <li className="nav-item">
                      <NavLink className="nav-link " to="/ajouterFacture">Ajouter Facture</NavLink>
                      </li>
                     
                      <li className="nav-item">
                      <NavLink className="nav-link" to="/enregistrerPaiement">Enregister un Paiement</NavLink>
                      </li>
                      <li className="nav-item">
                      <NavLink className="nav-link" to="/RechercheFactureParNom" >Reacherche Facture par Nom</NavLink>
                      </li>
                      <li className="nav-item">
                      <NavLink className="nav-link " to="/rechercherFactureParNumero" >Recherche Facture par Numero de telephone</NavLink>
                      </li>
                      <li className="nav-item">
                      <NavLink className="nav-link badge text-bg-primary text-wrap "  end  to="/contact" >Contact US</NavLink>
                      </li>
                  </ul>
              </div>
              </div>
           </div>
      </nav>    
  )
};
// <li className="nav-item">
//<NavLink className="nav-link" to="/afficherEtatDesFactures">Afficher les etats du factures</NavLink>
//</li>