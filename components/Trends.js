import styles from '../styles/Trends.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function Trend(props) {

    return(
        <div className={styles.content}>
            <div className={styles.title}>
                <a href="/" title={props.hashtag}>{props.hashtag}</a>
            </div>
            <small><div className={styles.count}>{props.count} tweet(s)</div></small>
            <hr />
        </div>
    )

}

export default Trend;