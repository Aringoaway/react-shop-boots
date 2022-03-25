import React from "react";
import ContentLoader from "react-content-loader"
import styles from './Card.module.scss';
import AppContext from "../../context";


function Card({
    id,
    title,
    imageUrl,
    price,
    onFavorite,
    onPlus,
    favorited = false,
    loading = false
    }) {
    const { isItemAdded } = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    console.log(title, isItemAdded(id));

    const onClickPlus = () => {
        onPlus({ id, title, imageUrl, price});
    }

    const onClickFavorite = () => {
        onFavorite({ id, title, imageUrl, price});
        setIsFavorite(!isFavorite);
    }
    return(
        <div className={styles.card}>
            {
                loading ? ( <ContentLoader
                    speed={2}
                    width={150}
                    height={230}
                    viewBox="0 0 150 230"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb" >
                    <rect x="0" y="171" rx="3" ry="3" width="93" height="15" />
                    <rect x="0" y="146" rx="3" ry="3" width="150" height="15" />
                    <rect x="0" y="204" rx="8" ry="8" width="80" height="24" />
                    <rect x="118" y="198" rx="8" ry="8" width="32" height="32" />
                    <rect x="0" y="0" rx="8" ry="8" width="160" height="130" />
                    <rect x="75" y="60" rx="0" ry="0" width="4" height="0" />
                </ContentLoader> ): (
                <>
                    <div className={styles.favorite} onClick={onClickFavorite}>
                        <img
                            src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
                            alt="Unliked"/>
                    </div>

                    <img width='100%' height={135} src={imageUrl} alt=""/>
                    <p>{title}</p>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column ">
                            <span>Price:</span>
                            <b>{price}</b>
                        </div>
                        <img
                            className={styles.plus}
                            onClick={onClickPlus}
                            src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                            alt=""
                        />
                    </div>
                </>
                )}
        </div>
    );
}

export default Card;