
import { PiWind } from "react-icons/pi";
import sprite from "../../assets/sprite.svg";
import { ContentVehicleDetails, ItemFeatures, ItemVehicleDetails, ListFeatures, ListVehicleDetails, TitleVehicleDetails, WrapperIcon } from "./Features.styled";

export const Features = ({ data }) => {
    const { details } = data;

    const detailsFilter = Object.entries(details).filter(
        ([value]) => value !== 0 || value !== "");

    const iconSet = {
        CD: (
            <svg width="20" height="20">
                <use xlinkHref={sprite + "#icon-CD"}></use>
            </svg>
        ),
        TV: (
            <svg width="20" height="20">
                <use xlinkHref={sprite + "#icon-TV"}></use>
            </svg>
        ),
        airConditioner: (
            <svg width="20" height="20">
                <use xlinkHref={sprite + "#icon-conditioner"}></use>
            </svg>
        ),
        beds: (
            <svg width="20" height="20">
                <use xlinkHref={sprite + "#icon-bed"}></use>
            </svg>
        ),
        freezer: (
            <svg width="20" height="20">
                <use xlinkHref={sprite + "#icon-freezer"}></use>
            </svg>
        ),
        gas: (
            <svg width="20" height="20">
                <use xlinkHref={sprite + "#icon-gas"}></use>
            </svg>
        ),
        toilet: (
            <svg width="20" height="20">
                <use xlinkHref={sprite + "#icon-toilet"}></use>
            </svg>
        ),
        hob: (
            <svg width="20" height="20">
                <use xlinkHref={sprite + "#icon-hob"}></use>
            </svg>
        ),
        kitchen: (
            <svg width="20" height="20">
                <use xlinkHref={sprite + "#icon-kitchen"}></use>
            </svg>
        ),
        radio: (
            <svg width="20" height="20">
                <use xlinkHref={sprite + "#icon-radio"}></use>
            </svg>
        ),
        shower: (
            <svg width="20" height="20">
                <use xlinkHref={sprite + "#icon-shower"}></use>
            </svg>
        ),
        bathroom: ((
            <svg width="20" height="20">
                <use xlinkHref={sprite + "#icon-shower"}></use>
            </svg>
        )),
        microwave: (
            <svg width="20" height="20">
                <use xlinkHref={sprite + "#icon-microwave"}></use>
            </svg>
        ),
        water: (
            <svg width="20" height="20">
                <use xlinkHref={sprite + "#icon-water"}></use>
            </svg>
        ),
        AC: (
            <PiWind
                style={{
                    color: "#101828",
                    width: "20px",
                    height: "20px",
                }}
            />
        ),
    };

    const vehicleDetailsKey = [
        "form",
        "length",
        "width",
        "height",
        "consumption",
        "tank",
    ];

    return (
        <>
            <div>
                <ListFeatures>
                    {detailsFilter.map(([key, value], idx) => (
                        <ItemFeatures key={idx}>
                            <WrapperIcon>{iconSet[key]}</WrapperIcon>
                            {value > 1 && <p>{value} &nbsp;</p>}
                            <p>{key}</p>
                        </ItemFeatures>
                    ))}
                </ListFeatures>
                <TitleVehicleDetails>Vehicle details</TitleVehicleDetails>
                <ListVehicleDetails>
                    {Object.entries(data).map(([key, value]) =>
                        vehicleDetailsKey.includes(key) && (
                            <ItemVehicleDetails key={key}>
                                <ContentVehicleDetails>{key}</ContentVehicleDetails>
                                <ContentVehicleDetails>{value}</ContentVehicleDetails>
                            </ItemVehicleDetails>
                        )
                    )}
                </ListVehicleDetails>
            </div>
        </>
    );
};