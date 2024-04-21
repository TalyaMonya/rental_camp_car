import { PiWind } from "react-icons/pi";
import sprite from "../../../assets/sprite.svg";
import { useDispatch } from "react-redux";
import { LocationSvg, FilterIcon, LineSvg, InputWrapper, Label, Input, Filters, Title, EquipmentBoxOption, HiddenInput, EquipOption, Contetn, ContentName, VehicleList, VehicleType, VehicleName, SubmitBtn} from "./CamperFilter.styled";
import { setFilters } from "../../../redux/catalogSlice";

export const CamperFilter = () => {
    const dispatch = useDispatch();

    const handleChecked = (evt) => {
        const { value, checked } = evt.target;
        dispatch(setFilters({ value, checked }));
    };
    
    return (
        <>
            <div>
                <InputWrapper>
                    <LocationSvg>
                        <use xlinkHref={sprite + "#icon-location"}></use>
                    </LocationSvg>
                    <Label>Location</Label>
                    <Input type="text" placeholder="Kyiv, Ukraine" />
                </InputWrapper>

                <Filters>Filters</Filters>

                <div>
                    <Title>Vehicle equipment</Title>
                    <LineSvg>
                        <use xlinkHref={sprite + "#icon-line"}></use>
                    </LineSvg>
                    <EquipmentBoxOption>
                        <li>
                            <HiddenInput
                                value="vehicleEquipment_ac"
                                id="ac"
                                type="checkbox"
                                name="vehicleEquipment"
                                onChange={handleChecked}
                            />
                            <EquipOption htmlFor="ac">
                                <Contetn>
                                    <PiWind
                                        style={{
                                        color: "#000000",
                                         width: "32px",
                                        height: "32px",
                                        }}
                                        />
                                    <ContentName>AC</ContentName>
                                </Contetn>
                            </EquipOption>
                        </li>

                        <li>
                            <HiddenInput
                                value="vehicleEquipment_automatic"
                                id="automatic"
                                type="checkbox"
                                name="vehicleEquipment"
                                onChange={handleChecked}
                            />
                            <EquipOption htmlFor="automatic">
                                <Contetn>
                                     <FilterIcon>
                                        <use xlinkHref={sprite + "#icon-trans"}></use>
                                    </FilterIcon>
                                    <ContentName>Automatic</ContentName>
                                </Contetn>
                            </EquipOption>
                        </li>

                        <li>
                            <HiddenInput
                                value="vehicleEquipment_kitchen"
                                id="kitchen"
                                type="checkbox"
                                name="vehicleEquipment"
                                onChange={handleChecked}
                            />
                            <EquipOption htmlFor="kitchen">
                                <Contetn>
                                    <FilterIcon>
                                        <use xlinkHref={sprite + "#icon-kitchen"}></use>
                                    </FilterIcon>
                                    <ContentName>Kitchen</ContentName>
                                </Contetn>
                            </EquipOption>
                        </li>

                        <li>
                            <HiddenInput
                                value="vehicleEquipment_tv"
                                id="tv"
                                type="checkbox"
                                name="vehicleEquipment"
                                onChange={handleChecked}
                            />
                            <EquipOption htmlFor="tv">
                                <Contetn>
                                    <FilterIcon>
                                        <use xlinkHref={sprite + "#icon-TV"}></use>
                                    </FilterIcon>
                                    <ContentName>TV</ContentName>
                                </Contetn>
                            </EquipOption>
                        </li>

                        <li>
                            <HiddenInput
                                value="vehicleEquipment_showerWC"
                                id="showerWC"
                                type="checkbox"
                                name="vehicleEquipment"
                                onChange={handleChecked}
                            />
                            <EquipOption htmlFor="showerWC">
                                <Contetn>
                                    <FilterIcon>
                                        <use xlinkHref={sprite + "#icon-shower"}></use>
                                    </FilterIcon>
                                    <ContentName>Shower/WC</ContentName>
                                </Contetn>
                            </EquipOption>
                        </li>
                    </EquipmentBoxOption>
                </div>

                <div>
                    <Title>Vehicle type</Title>
                    <LineSvg>
                        <use xlinkHref={sprite + "#icon-line"}></use>
                    </LineSvg>
                    <VehicleList>
                        <li>
                            <HiddenInput
                                value="vehicleType_van"
                                id="van"
                                type="radio"
                                name="vehicleType"
                                onChange={handleChecked}
                            />
                            <VehicleType htmlFor="van">
                                <svg width="40" height="28">
                                    <use xlinkHref={sprite + "#icon-van"}></use>
                                </svg>
                                <VehicleName>Van</VehicleName>
                            </VehicleType>
                        </li>
                        <li>
                            <HiddenInput
                                value="vehicleType_fullyIntegrated"
                                id="fully"
                                type="radio"
                                name="vehicleType"
                                onChange={handleChecked}
                            />
                            <VehicleType htmlFor="fully">
                                <svg width="40" height="28">
                                    <use xlinkHref={sprite + "#icon-integrated"}></use>
                                </svg>
                                <VehicleName>Fully Integrated</VehicleName>
                            </VehicleType>
                        </li>
                        <li>
                            <HiddenInput
                                value="vehicleType_aclove"
                                id="aclove"
                                type="radio"
                                name="vehicleType"
                                onChange={handleChecked}
                            />
                            <VehicleType htmlFor="aclove">
                                <svg width="40" height="28">
                                    <use xlinkHref={sprite + "#icon-aclove"}></use>
                                </svg>
                                <VehicleName>Aclove</VehicleName>
                            </VehicleType>
                        </li>
                    </VehicleList>
                </div>
                <SubmitBtn type="submit">Search</SubmitBtn>
            </div>
        </>
    );
};