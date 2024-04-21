import { useDispatch, useSelector } from "react-redux"
import { selectCampers, selectIsLoading } from "../../../redux/selectors";
import { useEffect, useState } from "react";
import { getAllCampers } from "../../../redux/operations";
import Notiflix from "notiflix";
import { BtnLoadMore } from "./CatalogCamperList.styled";
import { CampersItem } from "../CamperItem/CamperItem";


export const CatalogCamperList = () => {
    const dispatch = useDispatch();
    const itemCampers = useSelector(selectCampers);
    const isLoading = useSelector(selectIsLoading);

    const [visibleCampers, setVisibleCampers] = useState(4);

    const totalCampersItem = 13;

    useEffect(() => {
        dispatch(getAllCampers(visibleCampers));
    }, [dispatch, visibleCampers]);

    const handleLoadMore = () => {
        setVisibleCampers(prevItems => prevItems + 4);
    };

    const totalCampers = itemCampers.length >= totalCampersItem;

    return(
        <>
            {isLoading && Notiflix.Loading.dots("Downloading")}
            {!isLoading && Notiflix.Loading.remove()}
            <div>
                <ul>
                    {itemCampers.map((item) => (
                        <CampersItem key={item._id} value={item} />
                    ))}
                </ul>
                {!totalCampers && (
                    <BtnLoadMore onClick={handleLoadMore}>Load more</BtnLoadMore>
                )}
            </div>
        </>
    )
}