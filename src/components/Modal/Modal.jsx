import Modal from "react-modal";
import "./Modal.css";
import sprite from "../../assets/sprite.svg";
import { BsFillStarFill as YellowStar } from "react-icons/bs";
import { useState } from "react";
import { BtnWrapper, CardInfo, CloseModal, CrossIcon, Description, ExpandedContetnWrapp, FeaturesBtn, GalleryImg, GalleryItem, GalleryList, IconLine, Location, ModalContent, Price, Radio, RadioWrapper, Reviews, Title, Wrapp } from "./Modal.styled";
import { Features } from "../Features/Features";
import { Reviews as ReviewsList } from "../Reviews/Reviews";
import { CamperForm } from "../CamperForm/CamperForm";


Modal.setAppElement("#modal");

export const ModalShowMore = ({ isModalOpen, setModalClose, data }) => {
    const [openFeature, setOpenFeature] = useState(false);
    const [openReviews, setOpenReviews] = useState(false);

    const openFeatureMenu = () => {
        setOpenFeature(true);
        setOpenReviews(false);
    };

    const openReviewsMenu = () => {
        setOpenReviews(true);
        setOpenFeature(false);
    };

    const { name, price, rating, reviews, description, gallery, location } = data;

    const priceValue = price.toFixed(2).replace(".", ",");

    return (
        
        <Modal
            overlayClassName="Modal-overlay"
            className="Modal-content"
            isOpen={isModalOpen}
            onRequestClose={() => {
                setModalClose();
                    setOpenFeature(false);
                    setOpenReviews(false);
                }}
                contentLabel="More info modal">
            <ModalContent>
                <CloseModal onClick={setModalClose}>
                    <CrossIcon>
                        <use xlinkHref={sprite + "#icon-close"}></use>
                    </CrossIcon>
                </CloseModal>

                <div>
                    <Title>{name}</Title>
                    <CardInfo>
                        <Wrapp>
                            <YellowStar style={{ color: "#ffc531" }} />
                            <Reviews>
                                {rating} ({reviews.length} Reviews)
                            </Reviews>
                        </Wrapp>
                        <Wrapp>
                            <svg width="16" height="16">
                                <use xlinkHref={sprite + "icon-location"}/>
                            </svg>
                            <Location>{location}</Location>
                        </Wrapp>
                    </CardInfo>
                    <Price>€{priceValue}</Price>
                    <GalleryList>
                        {gallery.map((item) => (
                            <GalleryItem key={item}>
                                <GalleryImg src={item} alt={name} />
                            </GalleryItem>
                        ))}
                    </GalleryList>
                    <Description>{description}</Description>
                </div>

                <BtnWrapper>
                    <RadioWrapper>
                        <Radio id="features" name="expand" type="radio" />
                        <label htmlFor="features">
                            <FeaturesBtn onClick={openFeatureMenu}>Features</FeaturesBtn>
                        </label>
                    </RadioWrapper>

                    <RadioWrapper>
                        <Radio id="reviews" name="expand" type="radio" />
                        <label htmlFor="reviews">
                            <FeaturesBtn onClick={openReviewsMenu}>Reviews</FeaturesBtn>
                        </label>
                    </RadioWrapper>
                </BtnWrapper>

                <IconLine></IconLine>

                <ExpandedContetnWrapp>
                    {openFeature && (
                        <>
                            <Features data={data} />
                            <CamperForm/>
                        </>
                    )}
                    {openReviews && (
                        <>
                            <ReviewsList data={data} />
                            <CamperForm/>
                        </>
                    )}
                </ExpandedContetnWrapp>
                </ModalContent>
            </Modal>
    
    )
}