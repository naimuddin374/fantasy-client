export const lowFareSearchReqLog = data => {
    let adult = ``
    if (Number(data.adults) === 1) {
        adult = `<com:SearchPassenger Code="ADT" xmlns:com="http://www.travelport.com/schema/common_v47_0"/>`
    } else if (Number(data.adults) === 2) {
        adult = `<com:SearchPassenger Code="ADT" xmlns:com="http://www.travelport.com/schema/common_v47_0"/>
        <com:SearchPassenger Code="ADT" xmlns:com="http://www.travelport.com/schema/common_v47_0"/>`
    } else if (Number(data.adults) === 3) {
        adult = `<com:SearchPassenger Code="ADT" xmlns:com="http://www.travelport.com/schema/common_v47_0"/>
        <com:SearchPassenger Code="ADT" xmlns:com="http://www.travelport.com/schema/common_v47_0"/>
        <com:SearchPassenger Code="ADT" xmlns:com="http://www.travelport.com/schema/common_v47_0"/>`
    }


    let schema = `<soap:Envelope
        xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <air:LowFareSearchReq
        AuthorizedBy="user" TraceId="test-request" TargetBranch="P7123488"
                SolutionResult="true"
                ReturnUpsellFare="true"
                xmlns:air="http://www.travelport.com/schema/air_v47_0"
                xmlns:com="http://www.travelport.com/schema/common_v47_0"
        >
            <com:BillingPointOfSaleInfo OriginApplication="ST"/>
            <air:SearchAirLeg>
                <air:SearchOrigin>
                    <com:CityOrAirport Code="${data.origin}" PreferCity="true"/>
                </air:SearchOrigin>
                <air:SearchDestination>
                    <com:CityOrAirport Code="${data.destination}" PreferCity="true"/>
                </air:SearchDestination>
                <air:SearchDepTime PreferredTime="${data.departureDate}"/>
                <air:AirLegModifiers></air:AirLegModifiers>
            </air:SearchAirLeg>
            <air:AirSearchModifiers>
                <air:PreferredProviders>
                    <com:Provider Code="1G"
                                  xmlns:com="http://www.travelport.com/schema/common_v47_0"/>
                </air:PreferredProviders>
            </air:AirSearchModifiers>
            ${adult}
        </air:LowFareSearchReq>
    </soap:Body>
</soap:Envelope>`
    return schema
}