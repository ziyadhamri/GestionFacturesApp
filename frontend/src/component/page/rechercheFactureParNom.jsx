import React, { useState } from 'react';


function RechercheFactureParNomForm() {
  const [searchData, setSearchData] = useState({
    nom: '',
    //numero: '',
  });

  const [searchResult, setSearchResult] = useState(null);

  const handleChange = (event) => {
    setSearchData({ ...searchData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      
      const response = await fetch('/backend/ClientController', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(searchData)
      });

      const data = await response.json();
      
      if (data.clientExists) {
        setSearchResult('Le client existe.');
      } else {
        setSearchResult('Le client n\'existe pas.');
      }
    } catch (error) {
      console.error('Une erreur est survenue :', error);
      setSearchResult('Une erreur est survenue lors de la recherche du client.');
    }
  };

  return (
    <div>
      <h2 className='fw-bolder font-monospace text-info text-center'>Recherche du client</h2>
      <form onSubmit={handleSubmit} method='POST' className='border-5 border p-5'>
        <div>
          <label className='form-label fw-medium'>Nom :</label>
          <input
            className='form-control'
            type="text"
            name="nom"
            value={searchData.nom}
            onChange={handleChange}
            required
          />
        </div>
       <br />
        <button type="submit" className='btn btn-primary mx-3 fw-medium '>Rechercher</button>
      </form>
      {searchResult && <p>{searchResult}</p>}
    </div>
  );
}

export default RechercheFactureParNomForm;


//ce code ne semble pas chercher directement dans la base de données de factures pour voir si le client existe.
//Il envoie simplement les données saisies dans le formulaire (le nom du client) à un endpoint backend spécifié ('/backend/ClientController') via une requête POST.
//Ce que le backend fait avec ces données dépend de sa propre logique de traitement de requêtes.
//Dans ce cas, le backend semble être responsable de vérifier si un client avec le nom fourni existe dans la base de données et de renvoyer une réponse appropriée.
// Si vous souhaitez que le backend interroge la base de données de factures pour vérifier si le client existe,
//vous devez vous assurer que le code du backend inclut la logique nécessaire pour effectuer cette recherche.
//Le frontend envoie simplement les données saisies dans le formulaire au backend et traite la réponse renvoyée par celui-ci.