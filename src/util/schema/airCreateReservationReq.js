export const airCreateReservationReqLog = (AirPriceRsp, customerInfo) => {
    let AirSegment = AirPriceRsp['air:AirItinerary'][0]['air:AirSegment']
    let AirPricingSolution = AirPriceRsp['air:AirPriceResult'][0]['air:AirPricingSolution'][0]['$']
    let AirPricingInfo = AirPriceRsp['air:AirPriceResult'][0]['air:AirPricingSolution'][0]['air:AirPricingInfo']
    console.log(AirSegment)
    console.log(AirPricingSolution)
    console.log(AirPricingInfo)

    let segmentXML = ``
    let Connection = ``
    let CodeShareInfo = ``

    AirSegment.map((segment, segmentIndex) => {
        Connection = segment['air:Connection'] ? `<air:Connection/>` : '';
        let FlightDetails = ``
        segment['air:FlightDetails'].map(item => {

            let InFlightServices = ``
            item['air:InFlightServices'].map((service, serviceIndex) => {
                InFlightServices += `
                        <air:InFlightServices>${service}</air:InFlightServices>`
            })
            FlightDetails += `<air:FlightDetails Key="${item['$']['Key']}" Origin="${item['$']['Origin']}" Destination="${item['$']['Destination']}" DepartureTime="${item['$']['DepartureTime']}" ArrivalTime="${item['$']['ArrivalTime']}" FlightTime="${item['$']['FlightTime']}" TravelTime="${item['$']['TravelTime']}" Equipment="${item['$']['Equipment']}" AutomatedCheckin="${item['$']['AutomatedCheckin']}">
                        <air:Meals>${item['air:Meals'][0]}</air:Meals>
                        ${InFlightServices}
                    </air:FlightDetails>`
        })


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
                        <air:CodeshareInfo OperatingCarrier="${segment['air:CodeshareInfo'][0]['$']['OperatingCarrier']}">${segment['air:CodeshareInfo'][0]['_']}</air:CodeshareInfo>
                        ${FlightDetails}
                        ${Connection}
                    </air:AirSegment>`;
    })



    let schema = `<soap:Envelope 
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Header 
    xmlns:univ="http://www.travelport.com/schema/universal_v47_0">
        <univ:SupportedVersions airVersion="air_v47_0"/>
    </soap:Header>
    <soap:Body>
        <univ:AirCreateReservationReq
            AuthorizedBy="user" TraceId=""
            RetainReservation="Both" TargetBranch="P7123488"
            RestrictWaitlist="true"
            
      xmlns:univ="http://www.travelport.com/schema/universal_v47_0"
            
      xmlns:com="http://www.travelport.com/schema/common_v47_0"
            
      xmlns:air="http://www.travelport.com/schema/air_v47_0"
            
      xmlns:common_v47_0="http://www.travelport.com/schema/common_v47_0"
            >
            <com:BillingPointOfSaleInfo OriginApplication="ST" />
            <com:BookingTraveler Key="P_0" Age="21" DOB="1998-07-25" Gender="M" TravelerType="ADT">
                <com:BookingTravelerName First="NAIM" Last="UDDIN" />
                <com:PhoneNumber
                            CountryCode="880"
                            Location="DAC"
                            Number="1707500800"
                            Type="Other"
                    />
                <com:SSR Type="DOCS" FreeText="P/BD/ES221231/BD/25Jul98/M/23Oct20/UDDIN/NAIM"/>
            </com:BookingTraveler>
            <com:BookingTraveler Key="P_1" Age="31" DOB="1988-07-25" Gender="M" TravelerType="ADT">
                <com:BookingTravelerName First="AHMED" Last="SAQUIB" />
                <com:PhoneNumber
                                    CountryCode="880"
                                    Location="DAC"
                                    Number="1707500800"
                                    Type="Other"
                            />
                <com:SSR Type="DOCS" FreeText="P/BD/EA221731/BD/25Jul88/M/23Oct20/SAQUIB/AHMED"/>
            </com:BookingTraveler>
            <com:BookingTraveler Key="P_2" Age="7" DOB="2012-07-25" Gender="M" TravelerType="C07">
                <com:BookingTravelerName First="SAQUIB" Last="MOHAMMAD" />
                <com:PhoneNumber
                                    CountryCode="880"
                                    Location="DAC"
                                    Number="1707500800"
                                    Type="Other"
                            />
                <com:SSR Type="DOCS" FreeText="P/BD/EA24DS3/BD/25Jul12/M/23Oct20/MOHAMMAD/SAQUIB"/>
                <com:NameRemark Key="P_2">
                    <com:RemarkData>P-C07</com:RemarkData>
                </com:NameRemark>
            </com:BookingTraveler>
            <air:AirPricingSolution Key="${AirPricingSolution['Key']}" TotalPrice="${AirPricingSolution['TotalPrice']}" BasePrice="${AirPricingSolution['BasePrice']}" ApproximateTotalPrice="${AirPricingSolution['ApproximateTotalPrice']}" ApproximateBasePrice="${AirPricingSolution['ApproximateBasePrice']}" EquivalentBasePrice="${AirPricingSolution['EquivalentBasePrice']}" Taxes="${AirPricingSolution['Taxes']}" Fees="${AirPricingSolution['Fees']}" ApproximateTaxes="${AirPricingSolution['ApproximateTaxes']}" QuoteDate="${AirPricingSolution['QuoteDate']}">
                ${segmentXML}
                <air:AirPricingInfo Key="mflQf84R2BKAO8yDJAAAAA==" TotalPrice="BDT35863" BasePrice="USD360.00" ApproximateTotalPrice="BDT35863" ApproximateBasePrice="BDT30150" EquivalentBasePrice="BDT30150" ApproximateTaxes="BDT5713" Taxes="BDT5713" LatestTicketingTime="2020-01-11T23:59:00.000-08:00" PricingMethod="GuaranteedUsingAirlinePrivateFare" Refundable="true" IncludesVAT="false" ETicketability="Yes" ProviderCode="1G" TotalNetPrice="BDT35863">
                    <air:FareInfo Key="mflQf84R2BKAV8yDJAAAAA==" FareBasis="W1LOBD1" PassengerTypeCode="ADT" Origin="DAC" Destination="SIN" EffectiveDate="2020-01-01T01:42:00.000+06:00" DepartureDate="2020-01-11" Amount="BDT30150" PrivateFare="AirlinePrivateFare" TourCode="BDE8S131" PseudoCityCode="510K" TaxAmount="BDT5713.00">
                        <common_v47_0:Endorsement Value="NON ENDORSE/CANCELLATION/"/>
                        <common_v47_0:Endorsement Value="CHANGE FEE APPLIED/RFND"/>
                        <common_v47_0:Endorsement Value="NOT LATER THAN 90 DAYS"/>
                        <common_v47_0:Endorsement Value="AFTER TKT EXPIRY"/>
                        <air:FareRuleKey FareInfoRef="mflQf84R2BKAV8yDJAAAAA==" ProviderCode="1G">6UUVoSldxwgbzISNEj+ai8bKj3F8T9EyxsqPcXxP0TLGyo9xfE/RMjJs02vwFm2e8KjXlX2GC9Zxzxir+BHgS92XvBQcirZgruLHJPLFtpsEhxN9YvayJeh49lOlIMxhYBR1VjXHCoHXluoEouoIfvdjHI7RMFymlso7K04PFXaU6zdlRUZHbsiMHkKyPV8RgBFXFvplIhfCwfjH0KVfbiZyy4qnv9PHl2LqJ4NgqO1EQ+ZLml8hMgDrTVDGn4qCfUKpUJwmWYHhcTnUwbnO/VhhabkXTMR9JHXyDAS6XXJaa1fLuHBwW/pXMWhXzmvz8b9I8T4BsChW8vSBNa8ZUuJYtF79PC3YsxYLUKGiXKXVW5TpURjX8X3sX2bfrtYmCkJQE184nnbg2BMJ0qOmdc4YTCgtCVCco2YAUzLjYom+gN6MQilyAuaeJIc23zoev4Xvb2u1Qx+/he9va7VDH7+F729rtUMfv4Xvb2u1Qx+/he9va7VDH8ONhV50oNexly5qxZ3qLwMUu+QC5Q/Q9qZNvsjOX7piV093M//Mwsuosfqog3j0zcGIIIfNPUlh</air:FareRuleKey>
                        <air:Brand Key="mflQf84R2BKAV8yDJAAAAA==" BrandFound="false" UpSellBrandFound="false"/>
                    </air:FareInfo>
                    <air:BookingInfo BookingCode="W" CabinClass="Economy" FareInfoRef="mflQf84R2BKAV8yDJAAAAA==" SegmentRef="mflQf84R2BKAH8yDJAAAAA==" HostTokenRef="mflQf84R2BKAM8yDJAAAAA=="/>
                    <air:BookingInfo BookingCode="W" CabinClass="Economy" FareInfoRef="mflQf84R2BKAV8yDJAAAAA==" SegmentRef="mflQf84R2BKAJ8yDJAAAAA==" HostTokenRef="mflQf84R2BKAM8yDJAAAAA=="/>
                    <air:TaxInfo Category="BD" Amount="BDT500" Key="mflQf84R2BKAP8yDJAAAAA=="/>
                    <air:TaxInfo Category="OW" Amount="BDT2000" Key="mflQf84R2BKAQ8yDJAAAAA=="/>
                    <air:TaxInfo Category="UT" Amount="BDT3000" Key="mflQf84R2BKAR8yDJAAAAA=="/>
                    <air:TaxInfo Category="E7" Amount="BDT96" Key="mflQf84R2BKAS8yDJAAAAA=="/>
                    <air:TaxInfo Category="G8" Amount="BDT42" Key="mflQf84R2BKAT8yDJAAAAA=="/>
                    <air:TaxInfo Category="E5" Amount="BDT75" Key="mflQf84R2BKAU8yDJAAAAA=="/>
                    <air:FareCalc>DAC TG X/BKK TG SIN 360.00W1LOBD1 NUC360.00END ROE1.0</air:FareCalc>
                    <air:PassengerType Code="ADT" BookingTravelerRef="P_0"/>
                    <air:PassengerType Code="ADT" BookingTravelerRef="P_1"/>
                    <air:ChangePenalty>
                        <air:Percentage>0.00</air:Percentage>
                    </air:ChangePenalty>
                    <air:CancelPenalty>
                        <air:Percentage>0.00</air:Percentage>
                    </air:CancelPenalty>
                    <air:BaggageAllowances>
                        <air:BaggageAllowanceInfo TravelerType="ADT" Origin="DAC" Destination="SIN" Carrier="TG">
                            <air:URLInfo>
                                <air:URL>VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/TG</air:URL>
                            </air:URLInfo>
                            <air:TextInfo>
                                <air:Text>30K</air:Text>
                                <air:Text>BAGGAGE DISCOUNTS MAY APPLY BASED ON FREQUENT FLYER STATUS/ ONLINE CHECKIN/FORM OF PAYMENT/MILITARY/ETC.</air:Text>
                            </air:TextInfo>
                            <air:BagDetails ApplicableBags="1stChecked">
                                <air:BaggageRestriction>
                                    <air:TextInfo>
                                        <air:Text>CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE</air:Text>
                                    </air:TextInfo>
                                </air:BaggageRestriction>
                            </air:BagDetails>
                            <air:BagDetails ApplicableBags="2ndChecked">
                                <air:BaggageRestriction>
                                    <air:TextInfo>
                                        <air:Text>CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE</air:Text>
                                    </air:TextInfo>
                                </air:BaggageRestriction>
                            </air:BagDetails>
                        </air:BaggageAllowanceInfo>
                        <air:CarryOnAllowanceInfo Origin="DAC" Destination="BKK" Carrier="TG">
                            <air:TextInfo>
                                <air:Text>7K</air:Text>
                            </air:TextInfo>
                            <air:CarryOnDetails ApplicableCarryOnBags="1">
                                <air:BaggageRestriction>
                                    <air:TextInfo>
                                        <air:Text>CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE</air:Text>
                                    </air:TextInfo>
                                </air:BaggageRestriction>
                            </air:CarryOnDetails>
                            <air:CarryOnDetails ApplicableCarryOnBags="2">
                                <air:BaggageRestriction>
                                    <air:TextInfo>
                                        <air:Text>CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE</air:Text>
                                    </air:TextInfo>
                                </air:BaggageRestriction>
                            </air:CarryOnDetails>
                        </air:CarryOnAllowanceInfo>
                        <air:CarryOnAllowanceInfo Origin="BKK" Destination="SIN" Carrier="TG">
                            <air:TextInfo>
                                <air:Text>7K</air:Text>
                            </air:TextInfo>
                            <air:CarryOnDetails ApplicableCarryOnBags="1">
                                <air:BaggageRestriction>
                                    <air:TextInfo>
                                        <air:Text>CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE</air:Text>
                                    </air:TextInfo>
                                </air:BaggageRestriction>
                            </air:CarryOnDetails>
                            <air:CarryOnDetails ApplicableCarryOnBags="2">
                                <air:BaggageRestriction>
                                    <air:TextInfo>
                                        <air:Text>CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE</air:Text>
                                    </air:TextInfo>
                                </air:BaggageRestriction>
                            </air:CarryOnDetails>
                        </air:CarryOnAllowanceInfo>
                    </air:BaggageAllowances>
                </air:AirPricingInfo>
                <air:AirPricingInfo Key="mflQf84R2BKAc8yDJAAAAA==" TotalPrice="BDT26826" BasePrice="USD270.00" ApproximateTotalPrice="BDT26826" ApproximateBasePrice="BDT22613" EquivalentBasePrice="BDT22613" ApproximateTaxes="BDT4213" Taxes="BDT4213" LatestTicketingTime="2020-01-11T23:59:00.000-08:00" PricingMethod="GuaranteedUsingAirlinePrivateFare" Refundable="true" IncludesVAT="false" ETicketability="Yes" ProviderCode="1G" TotalNetPrice="BDT35863">
                    <air:FareInfo Key="mflQf84R2BKAj8yDJAAAAA==" FareBasis="W1LOBD1" PassengerTypeCode="CNN" Origin="DAC" Destination="SIN" EffectiveDate="2020-01-01T01:42:00.000+06:00" DepartureDate="2020-01-11" Amount="BDT22613" PrivateFare="AirlinePrivateFare" TourCode="BDE8S131" PseudoCityCode="510K" TaxAmount="BDT4213.00">
                        <air:FareTicketDesignator Value="CH"/>
                        <common_v47_0:Endorsement Value="NON ENDORSE/CANCELLATION/"/>
                        <common_v47_0:Endorsement Value="CHANGE FEE APPLIED/RFND"/>
                        <common_v47_0:Endorsement Value="NOT LATER THAN 90 DAYS"/>
                        <common_v47_0:Endorsement Value="AFTER TKT EXPIRY"/>
                        <air:FareRuleKey FareInfoRef="mflQf84R2BKAj8yDJAAAAA==" ProviderCode="1G">6UUVoSldxwgbzISNEj+ai8bKj3F8T9EyxsqPcXxP0TLGyo9xfE/RMpvJpPC8QdYUW2IzSJ5QSuF0Ln4Z4y6fdUaT+YplK3UuR85kg2/WOs0mcsuKp7/Tx8+IhlLWwhcDMRjvuHpJVypwcke+IvV68Q6SdY/HIJTkxKqtbaHtWhdHe5PQSyOliFtmA6R7WFDeHdfnFnbQauKtsVq2HyDI/SpWayaaoHmg3tRK6tpsjyZnGuJ7EZ7uQLt1C8nRz6Ji9kY7J0WSfnw3ukFTwWsKZbPL7cRxZYtuJJJkSAQvpY68XeP3Ob9lxdeW6gSi6gh+vJWr6+nvtEIlMRQnpyWfCMCIbRqMTJchO9AiVt4ZroBaeijkgxpswsErsm/4n+Qei1wzEP2Ynv5JTyB5x9tYSQLWhthMb3jlQD/hZztUai2G62UMOI1Qj2pYV94+54rCly5qxZ3qLwOXLmrFneovA5cuasWd6i8Dly5qxZ3qLwOXLmrFneovA2+QKPIWaRvq6oxE1UL944DjaSte7T4ddN+x1f7ldG8knVsA8ym8NgYSiYw8naSusQ7bvAHYUzO75W4bRuwrrPA=</air:FareRuleKey>
                        <air:Brand Key="mflQf84R2BKAj8yDJAAAAA==" BrandFound="false" UpSellBrandFound="false"/>
                    </air:FareInfo>
                    <air:BookingInfo BookingCode="W" CabinClass="Economy" FareInfoRef="mflQf84R2BKAj8yDJAAAAA==" SegmentRef="mflQf84R2BKAH8yDJAAAAA==" HostTokenRef="mflQf84R2BKAN8yDJAAAAA=="/>
                    <air:BookingInfo BookingCode="W" CabinClass="Economy" FareInfoRef="mflQf84R2BKAj8yDJAAAAA==" SegmentRef="mflQf84R2BKAJ8yDJAAAAA==" HostTokenRef="mflQf84R2BKAN8yDJAAAAA=="/>
                    <air:TaxInfo Category="BD" Amount="BDT500" Key="mflQf84R2BKAd8yDJAAAAA=="/>
                    <air:TaxInfo Category="OW" Amount="BDT2000" Key="mflQf84R2BKAe8yDJAAAAA=="/>
                    <air:TaxInfo Category="UT" Amount="BDT1500" Key="mflQf84R2BKAf8yDJAAAAA=="/>
                    <air:TaxInfo Category="E7" Amount="BDT96" Key="mflQf84R2BKAg8yDJAAAAA=="/>
                    <air:TaxInfo Category="G8" Amount="BDT42" Key="mflQf84R2BKAh8yDJAAAAA=="/>
                    <air:TaxInfo Category="E5" Amount="BDT75" Key="mflQf84R2BKAi8yDJAAAAA=="/>
                    <air:FareCalc>DAC TG X/BKK TG SIN 270.00W1LOBD1/CH NUC270.00END ROE1.0</air:FareCalc>
                    <air:PassengerType BookingTravelerRef="P_2" Code="CNN" Age="7"/>
                    <air:ChangePenalty>
                        <air:Percentage>0.00</air:Percentage>
                    </air:ChangePenalty>
                    <air:CancelPenalty>
                        <air:Percentage>0.00</air:Percentage>
                    </air:CancelPenalty>
                    <air:BaggageAllowances>
                        <air:BaggageAllowanceInfo TravelerType="CNN" Origin="DAC" Destination="SIN" Carrier="TG">
                            <air:URLInfo>
                                <air:URL>VIEWTRIP.TRAVELPORT.COM/BAGGAGEPOLICY/TG</air:URL>
                            </air:URLInfo>
                            <air:TextInfo>
                                <air:Text>30K</air:Text>
                                <air:Text>BAGGAGE DISCOUNTS MAY APPLY BASED ON FREQUENT FLYER STATUS/ ONLINE CHECKIN/FORM OF PAYMENT/MILITARY/ETC.</air:Text>
                            </air:TextInfo>
                            <air:BagDetails ApplicableBags="1stChecked">
                                <air:BaggageRestriction>
                                    <air:TextInfo>
                                        <air:Text>CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE</air:Text>
                                    </air:TextInfo>
                                </air:BaggageRestriction>
                            </air:BagDetails>
                            <air:BagDetails ApplicableBags="2ndChecked">
                                <air:BaggageRestriction>
                                    <air:TextInfo>
                                        <air:Text>CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE</air:Text>
                                    </air:TextInfo>
                                </air:BaggageRestriction>
                            </air:BagDetails>
                        </air:BaggageAllowanceInfo>
                        <air:CarryOnAllowanceInfo Origin="DAC" Destination="BKK" Carrier="TG">
                            <air:TextInfo>
                                <air:Text>7K</air:Text>
                            </air:TextInfo>
                            <air:CarryOnDetails ApplicableCarryOnBags="1">
                                <air:BaggageRestriction>
                                    <air:TextInfo>
                                        <air:Text>CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE</air:Text>
                                    </air:TextInfo>
                                </air:BaggageRestriction>
                            </air:CarryOnDetails>
                            <air:CarryOnDetails ApplicableCarryOnBags="2">
                                <air:BaggageRestriction>
                                    <air:TextInfo>
                                        <air:Text>CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE</air:Text>
                                    </air:TextInfo>
                                </air:BaggageRestriction>
                            </air:CarryOnDetails>
                        </air:CarryOnAllowanceInfo>
                        <air:CarryOnAllowanceInfo Origin="BKK" Destination="SIN" Carrier="TG">
                            <air:TextInfo>
                                <air:Text>7K</air:Text>
                            </air:TextInfo>
                            <air:CarryOnDetails ApplicableCarryOnBags="1">
                                <air:BaggageRestriction>
                                    <air:TextInfo>
                                        <air:Text>CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE</air:Text>
                                    </air:TextInfo>
                                </air:BaggageRestriction>
                            </air:CarryOnDetails>
                            <air:CarryOnDetails ApplicableCarryOnBags="2">
                                <air:BaggageRestriction>
                                    <air:TextInfo>
                                        <air:Text>CHGS MAY APPLY IF BAGS EXCEED TTL WT ALLOWANCE</air:Text>
                                    </air:TextInfo>
                                </air:BaggageRestriction>
                            </air:CarryOnDetails>
                        </air:CarryOnAllowanceInfo>
                    </air:BaggageAllowances>
                </air:AirPricingInfo>
                <air:FareNote Key="mflQf84R2BKAq8yDJAAAAA==">RATE USED IN EQU TOTAL IS BSR 1USD - 83.75BDT</air:FareNote>
                <air:FareNote Key="mflQf84R2BKAr8yDJAAAAA==">TOUR CODE: BDE8S131</air:FareNote>
                <air:FareNote Key="mflQf84R2BKAs8yDJAAAAA==">LAST DATE TO PURCHASE TICKET: 11JAN20</air:FareNote>
                <air:FareNote Key="mflQf84R2BKAt8yDJAAAAA==">FARE HAS A PLATING CARRIER RESTRICTION</air:FareNote>
                <air:FareNote Key="mflQf84R2BKAu8yDJAAAAA==">E-TKT REQUIRED</air:FareNote>
                <air:FareNote Key="mflQf84R2BKAv8yDJAAAAA==">TICKETING FEES MAY APPLY</air:FareNote>
                <air:FareNote Key="mflQf84R2BKAw8yDJAAAAA==">RATE USED IN EQU TOTAL IS BSR 1USD - 83.75BDT</air:FareNote>
                <air:FareNote Key="mflQf84R2BKAx8yDJAAAAA==">TOUR CODE: BDE8S131</air:FareNote>
                <air:FareNote Key="mflQf84R2BKAy8yDJAAAAA==">LAST DATE TO PURCHASE TICKET: 11JAN20</air:FareNote>
                <air:FareNote Key="mflQf84R2BKAz8yDJAAAAA==">FARE HAS A PLATING CARRIER RESTRICTION</air:FareNote>
                <air:FareNote Key="mflQf84R2BKA08yDJAAAAA==">E-TKT REQUIRED</air:FareNote>
                <air:FareNote Key="mflQf84R2BKA18yDJAAAAA==">TICKETING FEES MAY APPLY</air:FareNote>
                <common_v47_0:HostToken Key="mflQf84R2BKAM8yDJAAAAA==">GFB10101ADT00  01W1LOBD1                               0200010002#GFB200010101NADTV3912BD010010000299722770416W1LOBD1W1LOBDUEH#GFMCXOW912YBD01FTG ADTW1LOBD1</common_v47_0:HostToken>
                <common_v47_0:HostToken Key="mflQf84R2BKAN8yDJAAAAA==">GFB10202CNN00  01W1LOBD1        CH                     0200010002#GFB200020201NCNNV3912BD010010000299722770416100159891W1LOBD1W1LOBDUEH#GFMCXOW912YBD01FTG CNNW1LOBD1</common_v47_0:HostToken>
            </air:AirPricingSolution>
            <com:ActionStatus Type="TAU" TicketDate="2019-12-31T10:37:17+06:00" ProviderCode="1G" />
        </univ:AirCreateReservationReq>
    </soap:Body>
</soap:Envelope>`;
    console.log(schema)
    return schema
}