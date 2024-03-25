import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AjouterClientForm() {
    const [nom, setNomClient] = useState('');
    const [email, setEmailClient] = useState('');
    const [numero, setNumeroClient] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("nom", nom);
        formData.append("email", email);
        formData.append("numero", numero);

        axios.post('http://127.0.0.1:8000/ClientController', formData)
    .then(response => {
        alert(`Client added successfully!`);
        navigate('/ajouterClient');
    })
    .catch(error => {
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


        setNomClient('');
        setEmailClient('');
        setNumeroClient('');
    };

    const handleNomChange = (event) => {
        setNomClient(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmailClient(event.target.value);
    };

    const handleNumeroChange = (event) => {
        setNumeroClient(event.target.value);
    };

    return (
        <div className='d-flex justify-content-center align-items-center ' style={{ height: "100vh" }}>
            <form onSubmit={handleSubmit} className='border-5 border p-5'>
                <h2 className='text-center text-primary fw-medium'>Ajouter client</h2>
                <div>
                    <label className='form-label fw-medium'>
                        Entrez votre nom :
                        <input className='form-control border-black border-2'
                            type="text"
                            value={nom}
                            onChange={handleNomChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className='form-label fw-medium'>
                        Entrez votre email  :
                        <input className='form-control border-black border-2'
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className='form-label fw-medium'>
                        Entrez votre numero  :
                        <input className='form-control border-black border-2'
                            type="number"
                            value={numero}
                            onChange={handleNumeroChange}
                            required
                        />
                    </label>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-outline-primary fw-medium border-2">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AjouterClientForm;



























// import React, { useState } from 'react';
// import axios from "axios";
// import {useNavigate} from "react-router-dom";



// function AjouterClientForm() {
    
//     function ajouterClient(client, email,numero) {
//         let nouveauClient = { client: client, email: email, numero: numero };
//         clients.push(nouveauClient);
//         return clients;
//     }
    
//     const navigate=useNavigate();   
//     const [nom, setNomClient] = useState('');
//     const [email, setEmailClient] = useState('');
//     const [numero, setNumeroClient] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const formData = new FormData();
//         formData.append("client",nom)
//         formData.append("email",email)
//         formData.append("numero",numero)

//         axios.post('http://127.0.0.1:8000/ClientController',formData)
//         .then(({data})=> {
//             alert(`Client added successfully!`);
//             navigate('/ajouterClient')
//         }).catch(({response})=>{
//             if  (response.status === 422) {
//                 console.log(response.data.error)
//             }else{
//             console.log(response.data.message)
//             }
//     }) 

//         ajouterClient(nom, email, numero);
       
//     };

//     const handleNomChange = (event) => {
//         setNomClient(event.target.value);
//     };

//     const handleEmailChange = (event) => {
//         setEmailClient(event.target.value);
//     };

//     const handleNumeroChange = (event) => {
//         setNumeroClient(event.target.value);
//     };

//     axios.post('http://localhost:3306/ClientController',clients).then((response)=> {
//             alert(`Client added successfully!`);
//             navigate('/ajouterClient')
//         }).catch((error)=>alert(error));     
    

//     return (
//         <div className='d-flex justify-content-center align-items-center ' style={{height:"100vh"}}>
//             <form onSubmit={handleSubmit} className='border-5 border p-5' action="ClientController.php" method="Post">
//             <h2 className='text-center text-primary fw-medium'>Ajouter client</h2>

//                 <div>
//                     <label className='form-label fw-medium'>
//                         Entrez votre client :
//                         <input className='form-control'
//                             type="text"
//                             value={nom}
//                            onChange={handleNomChange}
//                             required
//                         />
//                     </label>
//                 </div>
//                 <div>
//                     <label className='form-label fw-medium'>
//                         Entrez votre email  :
//                         <input className='form-control'
//                             type="email"
//                             value={email}
//                             onChange={handleEmailChange}
//                             required
//                         />
//                     </label>
//                 </div>
//                 <div>
//                     <label className='form-label fw-medium'>
//                         Entrez votre numero  :
//                         <input  className='form-control'
//                             type="number"
//                             value={numero}
//                             onChange={handleNumeroChange}
//                             required
//                         />
//                     </label>
//                 </div>
            
//                 <div class="text-center">
//                <button type="submit" class="btn btn-outline-primary fw-medium">Ajouter</button>
//              </div>
//             </form>
//         </div>
//     );
  
// };

// export default AjouterClientForm;





























/*
        //Axios post request to send the data to the server side
        axios.post('/addClient', client )
        .then((response)=>{
            if(response.data==="Client added successfully"){
                alert("Le Client a été ajouté avec succès");
                navigate("/liste_des_clients");
              }else{
                  alert("Erreur d'ajout du Client");
              }
              
        })
    
    
      setNomClient('')
      setEmailClient('')
      setNumeroClient('')  
    }

*/




/*import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";


let clients = [];

function AjouterClientForm() {

    function ajouterClient(client, email,numero) {
        let nouveauClient = { client: client, email: email,numero: numero };
        clients.push(nouveauClient);
        return clients;
    }
    
    const navigate=useNavigate();   
    const [nom, setNomClient] = useState('');
    const [email, setEmailClient] = useState('');
    const [numero, setNumeroClient] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        ajouterClient(nom, emailClient,numero);
       
    };

    const handleNomChange = (event) => {
        setNomClient(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmailClient(event.target.value);
    };

    const handleNumeroChange = (event) => {
        setNumeroClient(event.target.value);
    };

    axios.post('http://localhost:3000/ajouterClient',clients).then((response)=> {
            alert(`Client added successfully!`);
            navigate('/ajouterClient')
        }).catch((error)=>alert(error));     
    

    return (
        <div className='d-flex justify-content-center align-items-center ' style={{height:"100vh"}}>
            <form onSubmit={handleSubmit} className='border-5 border p-5' action="" method="Post">
            <h2 className='text-center'>Ajouter client</h2>

                <div>
                    <label className='form-label'>
                        Entrez votre client :
                        <input className='form-control'
                            type="text"
                            value={nom}
                            onChange={handleNomChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className='form-label'>
                        Entrez votre email  :
                        <input className='form-control'
                            type="email"
                            value={emailClient}
                            onChange={handleEmailChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className='form-label'>
                        Entrez votre numero  :
                        <input  className='form-control'
                            type="number"
                            value={numero}
                            onChange={handleNumeroChange}
                            required
                        />
                    </label>
                </div>
            
                <div class="text-center">
               <button type="submit" class="btn btn-outline-primary">Ajouter</button>
             </div>
            </form>
        </div>
    );
  
};
        

export default AjouterClientForm;
*/