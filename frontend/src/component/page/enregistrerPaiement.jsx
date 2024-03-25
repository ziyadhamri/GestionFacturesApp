import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const EnregistrerPaiementForm = () => {
  const navigate=useNavigate();   
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [numero, setNumero] = useState('');
  const [message, setMessage] = useState('');

  const checkClientExistence = async (numero) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/clients/${numero}`);
      return response.data.exist;
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la vérification du client : ', error);
      throw new Error('Une erreur s\'est produite lors de la vérification du client.');
    }
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

  const clientExists = await checkClientExistence(numero);

  if (clientExists) {
    setMessage('Ce client existe déjà');
  } else {
    const formData = new FormData();
    formData.append("client",nom)
    formData.append("email",email)
    formData.append("numero",numero)
    
      
        try {
            await axios.post('http://127.0.0.1:8000/paiements', formData);
            alert('Le paiement a été enregistré avec succès !');
            navigate('/liste_des_paiements')
        } catch (error) {
            console.log('Erreur d enregistrement du paiement : ', error);
            alert('Impossible d enregistrer ce paiement. Veuillez réessayer plus tard ou contacter l administrateur système.');
        }
}
  setNom('');
  setEmail('');
  setNumero('');

};
 
  return (
    <div>
      <h2 className='fw-bolder font-monospace text-info text-center'>Enregistrer une Facture</h2>
      <form method='POST' onSubmit={handleSubmit} className='border-5 border p-5  '>
        <label className='form-label fw-medium'>
          Nom:
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)}  className='form-control border-2  border-black'required />
        </label>
        <br />
        <label className='form-label fw-medium'>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control border-2 border-black' required />
        </label>
        <br />
        <label className='form-label fw-medium'>
          Numéro de facture:
          <input type="number" value={numero} onChange={(e) => setNumero(e.target.value)} className='form-control border-2  border-black' required />
        </label >
        <br />
        <button type="submit" class="fw-medium btn btn-outline-primary border-2">Enregistrer</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default EnregistrerPaiementForm;