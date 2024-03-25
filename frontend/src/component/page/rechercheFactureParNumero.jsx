import React, { useState } from 'react';

const RechercheClientParNumero = () => {
    const [numeroClient, setNumeroClient] = useState('');
    const [clientTrouve, setClientTrouve] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleNumeroChange = (event) => {
        setNumeroClient(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        
        try {
            const response = await fetch('/api/backend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ numero: numeroClient }),
            });
            const data = await response.json();
            setClientTrouve(data.client);
        } catch (error) {
            console.error('Erreur lors de la recherche du client :', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2 className='fw-bolder font-monospace text-info text-center'>Recherche de client par numéro</h2>
            <form onSubmit={handleSubmit} method='POST' className='border-5 border p-5'>
                <label className='form-label fw-medium'>
                    Numéro de client :
                    <input
                        className='form-control'
                        type="text"
                        value={numeroClient}
                        onChange={handleNumeroChange}
                        required
                    />
                </label>
                <button 
                    type="submit"
                    disabled={loading}
                    className='btn btn-primary mx-3 fw-medium '
                    >
                    Rechercher
                </button>
            </form>
            {loading && <p>Recherche en cours...</p>}
            {clientTrouve !== null && (
                <p>
                    {clientTrouve
                        ? `Le client avec le numéro ${numeroClient} a été trouvé.`
                        : `Aucun client trouvé avec le numéro ${numeroClient}.`}
                </p>
            )}
        </div>
    );
};

export default RechercheClientParNumero;




























// import React, { useState } from 'react';
// import axios from 'axios'; //Axios pour effectuer des requêtes HTTP

// function RechercherFactureParNumeroForm() {
//     const [numero, setNumero] = useState('');
//     const [clientExiste, setClientExiste] = useState(false);

//     const handleChange = (event) => {
//         setNumero(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Logique pour rechercher le client par numéro, par exemple, en utilisant une requête AJAX ou en filtrant une liste de clients.
//         // Ici, je suppose que vous avez une fonction appelée rechercherClientParNumero dans votre backend.
        
//         // Appelez votre backend pour vérifier si le client existe
//         const rechercherClientParNumero = (numero) => {
//             return axios.post('/backend/', { numero })
//                 .then(response => {
//                     return response.data.clientExists;
//                 })
//                 .catch(error => {
//                     console.error('Une erreur est survenue lors de la recherche du client :', error);
//                     throw error;
//                 });
//         };
        

//         rechercherClientParNumero(numero)
//             .then((result) => {
//                 setClientExiste(result);
//             })
//             .catch((error) => {
//                 console.error('Une erreur est survenue :', error);
//             });
//     };

//     return (
//         <div>
//             <h2 className='fw-bolder font-monospace text-info text-center'>Recherche du client</h2>
//             <form onSubmit={handleSubmit} className='border-5 border p-5'>
//                 <label className='form-label fw-medium'>
//                     Numéro du client :
//                     <input
//                         className='form-control'
//                         type="number"
//                         value={numero}
//                         onChange={handleChange}
//                         required
//                     />
//                 </label>
//                 <br />
//                 <button type="submit" className="fw-medium btn btn-outline-primary">Rechercher</button>
//             </form>
//             {clientExiste && <p>Le client existe.</p>}
//             {!clientExiste && <p>Le client n'existe pas.</p>}
//         </div>
//     );
// }

// export default RechercherFactureParNumeroForm;

// // Cette fonction simule une recherche de client par numéro dans le backend.
// function rechercherClientParNumero(numero) {
//     // Ici, vous pouvez implémenter la logique pour interroger votre backend.
//     // Dans cet exemple, nous renvoyons simplement une promesse qui se résout avec un booléen aléatoire.
//     return new Promise((resolve) => {
//         // Supposons que la recherche réussisse avec une probabilité de 50% pour cet exemple
//         const clientExiste = Math.random() < 0.5;
//         resolve(clientExiste);
//     });
// }





// let clients = [];
// function RechercherFactureParNumeroForm({numeroClient}) {
//     let found = clients.filter(f => f.client === numeroClient);
//     if(found){
//         found.numeroClient = "le client existe";
//     }else{
//         return false;
//     }
//     return(
//         <div>
//       <h2 className='fw-bolder font-monospace text-info text-center'>Recherche du client</h2>
//         <form method="post" className='border-5 border p-5' > 
//             <label className='form-label fw-medium'>
//              Numero du client :
//         <input
//              className='form-control'
//             type="number"
//             value={numeroClient}
//             onChange={RechercherFactureParNumeroForm}
//             required
//         />
//     </label>
//     <br />
//     <button type="submit" class="fw-medium btn btn-outline-primary">Rechercher</button>
//     </form>
//     </div>
//     )
// };  
// export default RechercherFactureParNumeroForm;