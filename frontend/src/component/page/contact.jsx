import React from 'react';
import { useState } from 'react';

function ContactForm() {
        const [client, setClient] = useState('');
        const [email, setEmail] = useState('');
        const [numero, setNumero] = useState('');
        const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // pour l'envoyer au base de donnees
        console.log("Nom:", client);
        console.log("Email:", email);
        console.log("Numero:", numero);
        console.log("Message:", message);
        
        setClient('');
        setEmail('');
        setNumero('');
        setMessage('');
    };

    return (
        <div>
            <h2 className=' text-bg-primary  text-center'>Contactez-nous</h2>
            <form onSubmit={handleSubmit} method='POST' className='col-md-6 mx-auto'>
                <div>
                    <label htmlFor="client" className=' text-center col-sm-2 col-form-label'>Nom:</label>
                    <input
                        type="text"
                        id="client"
                        value={client}
                        onChange={(e) => setClient(e.target.value)}
                        required
    
/>
                </div>
                <div>
                    <label htmlFor="email" className='text-center col-sm-2 col-form-label'>E-Mail:</label>
                    <input  
                        type="email"  
                        id="email"  
                        value={email}  
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                        </div>
                <div>
                    <label htmlFor="numero" className='text-center col-sm-2 col-form-label'>Numero:</label>
                    <input  
                        type="numero"  
                        id="numero"  
                        value={numero}  
                        onChange={(e) => setNumero(e.target.value)}
                        required
                        />
                        </div>
                    <label htmlFor="message" className=' text-center col-sm-2 col-form-label'>message:</label>
                    <textarea 
                         rows="3" 
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        ></textarea>                  
<br />
                <div className=''>
                    <button type="submit" className=' btn btn-outline-primary mr-2 mx-5'>Envoyer</button>
                    <button type='reset' className='btn btn-outline-danger    '>Supprimer</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm; 