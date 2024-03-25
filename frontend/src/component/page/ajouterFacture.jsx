import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AjouterFactureForm() {
    const [numero, setNumero] = useState('');
    const [montant, setMontant] = useState('');
    const [nom, setNom] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("numero", numero);
        formData.append("montant", montant);
        formData.append("nom", nom);

        axios.post('http://127.0.0.1:8000/ClientController', formData)
    .then(({ data }) => {
        alert(`Facture added successfully!`);
        navigate('/ajouterFacture');
    }).catch((error) => {
        if (error.response && error.response.data) {
            if (error.response.status === 422) {
                console.log(error.response.data.error);
            } else {
                console.log(error.response.data.message);
            }
        } else {
            console.log(error.message); 
        }
    });

        const nouvelleFacture = { numero: numero, montant: montant, nom: nom };
        setFactures(prevFactures => [...prevFactures, nouvelleFacture]);
    };

    const handleNumeroChange = (event) => {
        setNumero(event.target.value);
    };

    const handleMontantChange = (event) => {
        setMontant(event.target.value);
    };

    const handleNomChange = (event) => {
        setNom(event.target.value);
    };

 
    const [factures, setFactures] = useState([]);

    return (
        <div className='d-flex justify-content-center align-items-center ' style={{ height: "100vh" }}>
            <form onSubmit={handleSubmit} className='border-5 border p-5'>
                <h2 className='text-center text-primary'>Ajouter Facture</h2>
                <label className='form-label fw-medium' >
                    Entrez votre numero :
                    <input
                        className='form-control'
                        type="number"
                        value={numero}
                        onChange={handleNumeroChange}
                        required
                    />
                </label><br />
                <label className='form-label fw-medium'>
                    Entrez votre nom  :
                    <input
                        className='form-control'
                        type="text"
                        value={nom}
                        onChange={handleNomChange}
                        required
                    />
                </label><br />
                <label className='form-label fw-medium'>
                    Entrez le montant  :
                    <input
                        className='form-control'
                        type="number"
                        value={montant}
                        onChange={handleMontantChange}
                        required
                    />
                </label><br />
                <button type="submit" className='btn btn-primary mx-3 fw-medium '>Ajouter la Facture</button>
            </form>
        </div>
    );
}

export default AjouterFactureForm;



// import React, { useState } from 'react';
// import axios from "axios";
// import {useNavigate} from "react-router-dom";


// function AjouterFactureForm() {
//     let factures = [];
//     function ajouterFacture(numero,montant,nom){
//         let nouvelleFacture = {numero:numero, montant:montant, nom:nom};
//         factures.push(nouvelleFacture);
//         return factures;
//     }


//     const navigate=useNavigate();
//     const [numero, setNumero] = useState('');
//     const [montant, setMontant] = useState('');
//     const [nom, setNom] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const formData = new FormData();
//         formData.append("numero",numero)
//         formData.append("montant",montant)
//         formData.append("nom",nom)

//         axios.post('http://127.0.0.1:8000/ClientController',formData)
//         .then(({data})=> {
//             alert(`Facture added successfully!`);
//             navigate('/ajouterFacture')
//         }).catch(({response})=>{
//             if  (response.status === 422) {
//                 console.log(response.data.error)
//             }else{
//             console.log(response.data.message)
//             }
//     }) 
//     ajouterFacture(numero, montant, nom);

// };
//     const handleNumeroChange = (event) => {
//         setNumero(event.target.value);
//     };

//     const handleMontantChange = (event) => {
//         setMontant(event.target.value);
//     };

//     const handleNomChange = (event) => {
//         setNom(event.target.value);
//     };

    
//     axios.post('http://localhost:3000/ajouterFacture',factures).then((response)=> {
//         alert(`Facture added successfully!`);
//         navigate('/ajouterFacture')
//     }).catch((error)=>alert(error));     


//     return (
//         <div className='d-flex justify-content-center align-items-center ' style={{height:"100vh"}}>
//         <form onSubmit={handleSubmit} className='border-5 border p-5'>
//         <h2 className='text-center text-primary'>Ajouter Facture</h2>
//         <label className='form-label fw-medium' >
//             Entrez votre numero :
//             <input
//              className='form-control'
//                 type="number"
//                 value={numero}
//                 onChange={handleNumeroChange}
//                 required
//             />
//         </label><br />
//         <label className='form-label fw-medium'>
//             Entrez votre nom  :
//             <input
//              className='form-control'
//                 type="text"
//                 value={nom}
//                 onChange={handleNomChange}
//                 required
//             />
//         </label><br />
//         <label className='form-label fw-medium'>
//             Entrez le montant  :
//             <input
//              className='form-control'
//                 type="number"
//                 value={montant}
//                 onChange={handleMontantChange}
//                 required
//             />
//         </label><br />
        
//         <button type="submit" className='btn btn-primary mx-3 fw-medium '>Ajouter la Facture</button>
//                 </form>
//     </div>
// );
// }

// export default AjouterFactureForm;