import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user';
import styles from '../styles/Signup.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import React from 'react';


function Signup(props) {
	const dispatch = useDispatch();
    let router = useRouter();

	const [signUpFirstname, setSignUpFirstname] = useState('');
	const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
	const [serverError, setserverError] = useState('');

	const handleRegister = () => {	
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ firstname: data.username, username: data.firstname, token: data.token }));
                    setSignUpFirstname('');
					setSignUpUsername('');
					setSignUpPassword('');

					router.push(`/home`)
				} else {
					setserverError(data.error)
				}
			});
	};

	return (
        
		<header className={styles.header}>
            <FontAwesomeIcon onClick={props.closeModal} className={styles.closeWindow} icon={faXmark} />
			<div className={styles.registerContainer}>
                <img src="logo.svg" alt="Logo" title="Hackatweet" className={styles.logo}/>
                <p className={styles.tagline}>Create your Hackatweet account</p>
                <input type="text" placeholder="Firstname" id="signUpFirstname" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} className={styles.input} />
                <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} className={styles.input}/>
                <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} className={styles.input}/>
                <button id="signup" onClick={() => handleRegister()} className={styles.signupBtn}>Sign up</button>
				<div style={{'color': 'red'}}>{serverError}</div>
			</div>
		</header >
	);
}

export default Signup;
