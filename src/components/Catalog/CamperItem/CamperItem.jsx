import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { selectFavoriteCampers } from "../../../redux/selectors";
import { useMemo } from "react";
import { PiWind } from "react-icons/pi";
import { StarSvg, LocationSvg, ListItem, Image, WrapperTitle, Title, WrapperPrice, Price, WrapperHeart, InfoCard, WrapperRating, Reviews, WrapperLocation, Location, Description, InfoList, InfoListItem, InfoListText, ButtonShowMore } from "./CamperItem.styled";
import { addToFavorite, removeFromFavorite } from "../../../redux/catalogSlice";
import sprite from "../../../assets/sprite.svg";
import { ModalShowMore } from "../../Modal/Modal";
import "../../Modal/Modal.css";


export const CampersItem = ({value}) => {
    const dispatch = useDispatch();

    const [isOpenModal, setIsOpenModal] = useState(false);
    const favorites = useSelector(selectFavoriteCampers);

    const isFavoriteCard = useMemo(
        () => favorites.find((favorite) => favorite._id === value._id),
        [favorites, value._id]
    );

    const handlOpenModal = () => {
        setIsOpenModal(true);
        document.body.style.overflow = "hidden";
    };

    const handleCloseModal = () => {
        setIsOpenModal(false);
        document.body.style.overflow = "auto";
    };

    const {
        adults,
        description,
        engine,
        location,
        name,
        price,
        rating,
        transmission,
        details,
        gallery,
        reviews,
    } = value;
    
    const priceValue = price.toFixed(2).replace(".", ",");

    return (
        <>
            <ListItem>
                <Image src={gallery[0]} alt={name} />
                <div>
                    <WrapperTitle>
                        <Title>{name}</Title>
                        <WrapperPrice>
                            <Price>€{priceValue}</Price>
                            <WrapperHeart>
                                {isFavoriteCard ?
                                (<svg
                                    width="24"
                                    height="24"
                                    onClick={() => {
                                    dispatch(removeFromFavorite(value));
                                     }}>
                                        <use xlinkHref={sprite + "#icon-heart-red"}></use>
                                    </svg>) :
                                    (<svg
                                    width="24"
                                    height="24"
                                    onClick={() => {
                                    dispatch(addToFavorite(value));}}>
                                        <use xlinkHref={sprite + "#icon-heart"}></use>
                                    </svg>)
                                }
                            </WrapperHeart>
                        </WrapperPrice>
                    </WrapperTitle>
                    <InfoCard>
                        <WrapperRating>
                            <StarSvg>
                                <use xlinkHref={sprite + "#icon-star"}></use>
                            </StarSvg>
                            <Reviews>
                                {rating} ({reviews.length} Reviews)
                            </Reviews>
                        </WrapperRating>
                        <WrapperLocation>
                            <LocationSvg>
                                <use xlinkHref={sprite + "#icon-location"}></use>
                            </LocationSvg>
                            <Location>{location}</Location>
                        </WrapperLocation>
                    </InfoCard>

                    <Description>{description}</Description>
                    <InfoList>
                        <InfoListItem>
                            <svg width="20" height="20">
                                <use xlinkHref={sprite + "#icon-adults"}></use>
                            </svg>
                            <InfoListText>{adults}&nbsp;adults</InfoListText>
                        </InfoListItem>
                        <InfoListItem>
                            <svg width="20" height="20">
                                <use xlinkHref={sprite + "#icon-trans"}></use>
                            </svg>
                            <InfoListText>{transmission}</InfoListText>
                        </InfoListItem>
                        <InfoListItem>
                            <svg width="20" height="20">
                                <use xlinkHref={sprite + "#icon-petrol"}></use>
                            </svg>
                            <InfoListText>{engine}</InfoListText>
                        </InfoListItem>
                        <InfoListItem>
                            <svg width="20" height="20">
                                <use xlinkHref={sprite + "#icon-kitchen"}></use>
                            </svg>
                            <InfoListText>Kitchen</InfoListText>
                        </InfoListItem>
                        <InfoListItem>
                            <svg width="20" height="20">
                                <use xlinkHref={sprite + "#icon-bed"}></use>
                            </svg>
                            <InfoListText>{details.beds}&nbsp;beds</InfoListText>
                        </InfoListItem>
                        <InfoListItem>
                            <PiWind
                                style={{
                                color: "#000000",
                                width: "20px",
                                height: "20px",
                                }}
                            />
                            <InfoListText>AC</InfoListText>
                        </InfoListItem>
                    </InfoList>
                    <ButtonShowMore type="button" onClick={handlOpenModal} >
                        Show more
                    </ButtonShowMore>
                </div> 
            </ListItem>

            <ModalShowMore
                isModalOpen={isOpenModal}
                setModalClose={handleCloseModal}
                data={value}
            />
        </>
    )
}