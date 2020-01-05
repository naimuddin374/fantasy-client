import { TARGET_BRANCH } from "../../store/actions/types"

export const airPriceReqLog = (airPrice, AirSegmentList) => {
    let segmentXML = ``
    let connection = ``
    let PricingModifiers = ``
    let PlatingCarrier = ``
    let SearchPassenger = ``

    let AirSegmentRef = airPrice['air:Journey'][0]['air:AirSegmentRef']
    let AirPricingInfo = airPrice['air:AirPricingInfo']
    let BookingInfo = airPrice['air:AirPricingInfo'][0]['air:BookingInfo']

    /* AirSegment */
    AirSegmentRef.map((Journey, JourneyIndex) => {
        AirSegmentList.map(segment => {
            if (segment['$'].Key === Journey['$']['Key']) {
                connection = (Object.keys(AirSegmentRef).length > 1 && Object.keys(AirSegmentRef).length > (Number(JourneyIndex) + 1)) ? `<air:Connection/>` : '';

                if (JourneyIndex === 0) {
                    PlatingCarrier = segment['$'].Carrier
                }

                segmentXML += `
                <air:AirSegment 
                                Key="${segment['$']['Key']}" 
                                Group="${segment['$']['Group']}" 
                                Carrier="${segment['$']['Carrier']}" 
                                FlightNumber="${segment['$']['FlightNumber']}" 
                                Origin="${segment['$']['Origin']}" 
                                Destination="${segment['$']['Destination']}" 
                                DepartureTime="${segment['$']['DepartureTime']}" 
                                ArrivalTime="${segment['$']['ArrivalTime']}" 
                                FlightTime="${segment['$']['FlightTime']}" 
                                Distance="${segment['$']['Distance']}" 
                                ETicketability="${segment['$']['ETicketability']}" 
                                Equipment="${segment['$']['Equipment']}" 
                                ChangeOfPlane="${segment['$']['ChangeOfPlane']}" 
                                ParticipantLevel="${segment['$']['ParticipantLevel']}" 
                                PolledAvailabilityOption="${segment['$']['PolledAvailabilityOption']}" 
                                OptionalServicesIndicator="${segment['$']['OptionalServicesIndicator']}" 
                                AvailabilitySource="${segment['$']['AvailabilitySource']}" 
                                AvailabilityDisplayType="${segment['$']['AvailabilityDisplayType']}"
                                ClassOfService="T"
                                ProviderCode="1G"
                                CabinClass="Economy"
                                >
                                ${connection}</air:AirSegment>`;
            }
        })
    })


    /* AirSegmentPricingModifiers */
    BookingInfo.map(item => {
        PricingModifiers += `
        <air:AirSegmentPricingModifiers AirSegmentRef="${item['$']['SegmentRef']}">
                    <air:PermittedBookingCodes>
                        <air:BookingCode Code="${item['$']['BookingCode']}"/>
                    </air:PermittedBookingCodes>
                </air:AirSegmentPricingModifiers>`
    })

    /* SearchPassenger */
    AirPricingInfo.map((item, index) => {
        item['air:PassengerType'].map((passenger, pIndex) => {
            if (passenger['$']['Code'] === "ADT") {
                SearchPassenger += `
                <com:SearchPassenger Key="P_${index}_${pIndex}" Code="${passenger['$']['Code']}"
                xmlns:com="http://www.travelport.com/schema/common_v47_0"/>`
            } else {
                SearchPassenger += `
                <com:SearchPassenger Age="7" Key="P_${index}_${pIndex}" Code="${passenger['$']['Code']}"
                xmlns:com="http://www.travelport.com/schema/common_v47_0"/>`
            }
        })
    })
    let schema = `<soap:Envelope
        xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Header/>
    <soap:Body>
        <air:AirPriceReq
                AuthorizedBy="user" CheckFlightDetails="true" TargetBranch="${TARGET_BRANCH}"
                TraceId=""
                xmlns:air="http://www.travelport.com/schema/air_v47_0"
                xmlns:com="http://www.travelport.com/schema/common_v47_0">
            <com:BillingPointOfSaleInfo OriginApplication="ST"
                                        xmlns:com="http://www.travelport.com/schema/common_v47_0"/>
            <air:AirItinerary>
                ${segmentXML}
            </air:AirItinerary>
            <air:AirPricingModifiers FaresIndicator="PublicAndPrivateFares" InventoryRequestType="DirectAccess" PlatingCarrier="${PlatingCarrier}"/>
            ${SearchPassenger}
            <air:AirPricingCommand>
                ${PricingModifiers}
            </air:AirPricingCommand>
        </air:AirPriceReq>
    </soap:Body>
</soap:Envelope>`;
    console.log(schema)
    return schema
}