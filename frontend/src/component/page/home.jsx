import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
const Home=()=> {
    return (        
        <div className="card text-bg-dark ">
              {/* <img src="https://th.bing.com/th/id/OIP.u_zb_CzelqyGjCEpWjEcpAHaFL?rs=1&pid=ImgDetMain" alt="" srcset=""className='card-img img-fluid overlay-text  ' /> */}
            {/* <video src="https://pin.it/56LRE5OJU" className='card-img img-fluid overlay-text  ' ></video> */}
            {/* <video src="https://pin.it/56LRE5OJU" class="object-fit-contain" autoplay></video> */}
            <img  alt="" src='https://i.pinimg.com/564x/41/0b/16/410b1699faad5d0db4d504d57891bd7c.jpg ' className='card-img img-fluid overlay-text  ' />
           <div className='card-img-overlay text-dark'>
             <h1 className="card-title mt-5 mb-4 text-center fs-1">GF est l'outil qu'il vous faut !</h1>
            <p className="card-text lead fw-semibold">Quoi de mieux qu'une solution 100% marocaine pour vous aider à gérer votre facturation au Maroc et votre relation client </p>
            <p className="card-text lead fw-semibold">GF est un logiciel simple à utiliser, professionnel et innovant.</p>
            <p className="card-text lead fw-semibold fst-italic">GF : Le meilleur logiciel de facturation au Maroc</p>
            </div>
    </div>
    );
}

export default Home;
