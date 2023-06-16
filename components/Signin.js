import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user';
import styles from '../styles/Signin.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { useRouter } from 'next/router';
import Modal from 'react-modal';
import React from 'react';


function Signin(props) {
	const dispatch = useDispatch();
	let router = useRouter();
	const user = useSelector((state) => state.user.value);

	const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');
	const [serverError, setserverError] = useState('');

	const handleConnection = () => {

		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signInUsername, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ firstname: data.username, username: data.firstname, token: data.token }));
					setSignInUsername('');
					setSignInPassword('');

					router.push(`/home`)
				} else {
					setserverError(data.error)
				}
			});
	};

	return (
        <header className={styles.header}>
            <FontAwesomeIcon onClick={props.closeSigninModal} className={styles.closeWindow} icon={faXmark} />
			<div className={styles.registerContainer}>
                <img src="logo.svg" alt="Logo" title="Hackatweet" className={styles.logo}/>
                <p className={styles.tagline}>Connect to your Hackatweet</p>
                <input required type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} className={styles.input}/>
                <input required type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} className={styles.input}/>
                <button id="signin" onClick={() => handleConnection()} className={styles.signinBtn}>Sign in</button>
				<div style={{'color': 'red'}}>{serverError}</div>
			</div>
		</header >
	);
}

export default Signin;
