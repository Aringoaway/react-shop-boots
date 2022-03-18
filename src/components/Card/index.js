import React from "react";
import styles from './Card.module.scss';


function Card(props) {
    const [isAdded, setIsAdded] = React.useState(false);
    const onClickPlus = () => {
        setIsAdded(!isAdded);
    }
    return(
        <div className={styles.card}>
            <div className={styles.favorite} onClick={props.onFavorit}>
                <img src="/img/heart-unliked.svg" alt="Unliked"/>
            </div>

            <img width={133} height={112} src={props.imgUrl} alt=""/>
            <p>{props.title}</p>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                    <span>Price:</span>
                    <b>{props.price}</b>
                </div>
                    <img
                        className={styles.plus}
                        onClick={onClickPlus}
                        src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                        alt=""
                    />
            </div>
        </div>
    );
}

export default Card;