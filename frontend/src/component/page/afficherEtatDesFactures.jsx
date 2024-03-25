import React, { useState } from 'react';

function FactureComponent() {
    const [facture, setFacture] = useState(null);
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Effectuer une requête au backend pour vérifier si la facture existe
            const response = await fetch('http://127.0.0.1:8000/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nom, email, numero }),
            });
            const data = await response.json();
            
            // Si la facture existe, mettre à jour l'état pour afficher les détails
            if (response.ok) {
                setFacture(data);
            } else {
                // Gérer le cas où la facture n'existe pas
                setFacture(null);
                console.log('La facture n`existe pas.');
            }
        } catch (error) {
            console.error('Erreur lors de la récupération de la facture :', error);
        }
    };

    return (
        <div className='bg-success p-2 text-dark bg-opacity-50 d-flex justify-content-center align-items-center ' style={{height:"100vh"}}>
            
            <form method='POST' onSubmit={handleSubmit} className='border-5 border p-5'>
            <h2 className='fw-bolder font-monospace text-info bg-dark'>Recherche de Facture</h2>
                <label className='form-label fw-medium'>
                    Nom:
                    <input className='form-control'
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)} 
                    required/>
                </label>
                <br />
                <label className='form-label fw-medium'>
                    Email:
                    <input className='form-control'
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required/>
                </label>
                <br />
                <label className='form-label fw-medium'>
                    Numéro de Facture:
                    <input className='form-control'
                    type="text"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    required />
                </label>
                <br />
                <button type="submit" class="fw-medium btn btn-outline-primary">Rechercher</button>
            </form>

            {facture && (
                <div>
                    <h3>Facture trouvée :</h3>
                    <p>Nom: {facture.nom}</p>
                    <p>Email: {facture.email}</p>
                    <p>Numéro: {facture.numero}</p>
                </div>
            )}
        </div>
    );
}

export default FactureComponent;

// import React, { useState, useEffect } from 'react';


// let factures = [];
// function afficherEtatDesFactures() {
//         const [facture, setFacture] = useState(null);
//         const [nom, setNom] = useState('');
//         const [email, setEmail] = useState('');
//         const [numero, setNumero] = useState('');
// }

// function AfficherEtatDesFacturesForm () {
 
//     const [nomClient, setNomClient] = useState('setNomClient');
//     const [emailClient, setEmailClient] = useState('setEmailClient');
//     const [numeroClient, setNumeroClient] = useState('setNumeroClient');
   
 


//     const handleSubmit = (event) => {
//         event.preventDefault();

//         // pour l'envoyer au serveur
//         console.log("Nom:", nomClient);
//         console.log("Email:", emailClient);
//         console.log("Numero:", numeroClient);
       

//         // Réinitialiser le formulaire 
//         setNomClient('');
//         setEmailClient('');
//         setNumeroClient('');
        
//     };
    
//     return (
//         <div>
//             <h2>Entrez votre information</h2>
//             <form onSubmit={handleSubmit} method='POST'>
//             <div>
//                     <label htmlFor="nom">Nom:</label>
//                     <input
//                         type="text"
//                         id="nomClient"
//                         value={nomClient}
//                         onChange={(e) => setNomClient(e.target.value)}
//                         required
    
// />
//                 </div>
//                 <div>
//                     <label htmlFor="email">E-Mail:</label>
//                     <input  
//                         type="email"  
//                         id="EmailClient"  
//                         value={emailClient}  
//                         onChange={(e) => setEmailClient(e.target.value)}
//                         required
//                         />
//                         </div>
//                 <div>
//                     <label htmlFor="numero">Numero:</label>
//                     <input  
//                         type="numero"  
//                         id="numeroClient"  
//                         value={numeroClient}  
//                         onChange={(e) => setNumeroClient(e.target.value)}
//                         required
//                         />
//                         </div>
//                 <button type="submit">Envoyer</button>
//                 <button type='reset'>Supprimer</button>
//             </form>
//         </div>
//     );

// }

// export default AfficherEtatDesFacturesForm;