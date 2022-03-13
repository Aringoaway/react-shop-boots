import styles from './Card.module.scss';
console.log(styles)

function Card(props) {
    const onClickBtn =  () => {
        alert(props.title)
    }

    return(
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/heart-unliked.svg" alt="Unliked"/>
            </div>

            <img width={133} height={112} src={props.imgUrl} alt=""/>
            <p>{props.title}</p>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                    <span>Price:</span>
                    <b>{props.price}</b>
                </div>
                <button className="button" onClick={onClickBtn}>
                    <img width={11} height={11} src="/img/plus.svg" alt=""/>
                </button>
            </div>
        </div>
    );
}

export default Card;