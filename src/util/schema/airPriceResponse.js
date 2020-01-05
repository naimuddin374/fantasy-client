
export const airPriceRes = () => {
    let data = `<SOAP:Envelope xmlns:SOAP="http://schemas.xmlsoap.org/soap/envelope/">
    <SOAP:Body>
        <air:AirPriceRsp TraceId="" TransactionId="72302C480A0764779A9E21DB38EF3299" ResponseTime="3602" xmlns:air="http://www.travelport.com/schema/air_v47_0" xmlns:common_v47_0="http://www.travelport.com/schema/common_v47_0">
            <common_v47_0:ResponseMessage Code="710401" Type="Warning" ProviderCode="1G">Taxes returned at the FareInfo level are for informational purposes only, and may differ from those returned at the Itinerary/Passenger Type levels.</common_v47_0:ResponseMessage>
            <common_v47_0:ResponseMessage Code="0" Type="Warning" ProviderCode="1G">The price is informational and can only be stored manually.</common_v47_0:ResponseMessage>
            <common_v47_0:ResponseMessage Code="4400" Type="Warning" ProviderCode="1G">No Merchandising optional services returned for Flight(s) [TG][340]</common_v47_0:ResponseMessage>
            <common_v47_0:ResponseMessage Code="4400" Type="Warning" ProviderCode="1G">No Merchandising optional services returned for Flight(s) [TG][403]</common_v47_0:ResponseMessage>
            <air:AirItinerary>
                <air:AirSegment Key="Q/bPf83R2BKAHRcqNAAAAA==" Group="0" Carrier="TG" FlightNumber="340" ProviderCode="1G" Origin="DAC" Destination="BKK" DepartureTime="2020-01-16T02:00:00.000+06:00" ArrivalTime="2020-01-16T05:30:00.000+07:00" FlightTime="150" TravelTime="150" Distance="963" ClassOfService="W" Equipment="330" ChangeOfPlane="false" OptionalServicesIndicator="false" AvailabilitySource="S" ParticipantLevel="Secure Sell" PolledAvailabilityOption="O and D cache or polled status used with different local status" AvailabilityDisplayType="Fare Specific Fare Quote Unbooked">
                    <air:CodeshareInfo OperatingCarrier="TG">Thai Airways Intl Public CO Ltd</air:CodeshareInfo>
                    <air:FlightDetails Key="Q/bPf83R2BKAIRcqNAAAAA==" Origin="DAC" Destination="BKK" DepartureTime="2020-01-16T02:00:00.000+06:00" ArrivalTime="2020-01-16T05:30:00.000+07:00" FlightTime="150" TravelTime="150" Equipment="330" AutomatedCheckin="false">
                        <air:Meals>Meal</air:Meals>
                        <air:InFlightServices>Movie</air:InFlightServices>
                        <air:InFlightServices>Audio Programming</air:InFlightServices>
                        <air:InFlightServices>Non-smoking</air:InFlightServices>
                    </air:FlightDetails>
                    <air:Connection/>
                </air:AirSegment>
                <air:AirSegment Key="Q/bPf83R2BKAJRcqNAAAAA==" Group="0" Carrier="TG" FlightNumber="403" ProviderCode="1G" Origin="BKK" Destination="SIN" DepartureTime="2020-01-16T08:00:00.000+07:00" ArrivalTime="2020-01-16T11:15:00.000+08:00" FlightTime="135" TravelTime="135" Distance="889" ClassOfService="W" Equipment="359" ChangeOfPlane="false" OptionalServicesIndicator="false" AvailabilitySource="S" ParticipantLevel="Secure Sell" PolledAvailabilityOption="O and D cache or polled status used with different local status" AvailabilityDisplayType="Fare Specific Fare Quote Unbooked">
                    <air:CodeshareInfo OperatingCarrier="TG">Thai Airways Intl Public CO Ltd</air:CodeshareInfo>
                    <air:FlightDetails Key="Q/bPf83R2BKAKRcqNAAAAA==" Origin="BKK" Destination="SIN" DepartureTime="2020-01-16T08:00:00.000+07:00" ArrivalTime="2020-01-16T11:15:00.000+08:00" FlightTime="135" TravelTime="135" Equipment="359" DestinationTerminal="1" AutomatedCheckin="false">
                        <air:Meals>Meal</air:Meals>
                        <air:InFlightServices>Movie</air:InFlightServices>
                        <air:InFlightServices>Audio Programming</air:InFlightServices>
                        <air:InFlightServices>Non-smoking</air:InFlightServices>
                    </air:FlightDetails>
                </air:AirSegment>
            </air:AirItinerary>
            <air:AirPriceResult>
                <air:AirPricingSolution Key="Q/bPf83R2BKALRcqNAAAAA==" TotalPrice="BDT98552" BasePrice="USD990.00" ApproximateTotalPrice="BDT98552" ApproximateBasePrice="BDT82913" EquivalentBasePrice="BDT82913" Taxes="BDT15639" Fees="BDT0" ApproximateTaxes="BDT15639" QuoteDate="2020-01-05">
                    <air:AirSegmentRef Key="Q/bPf83R2BKAHRcqNAAAAA=="/>
                    <air:AirSegmentRef Key="Q/bPf83R2BKAJRcqNAAAAA=="/>
                    <air:AirPricingInfo Key="Q/bPf83R2BKAORcqNAAAAA==" TotalPrice="BDT35863" BasePrice="USD360.00" ApproximateTotalPrice="BDT35863" ApproximateBasePrice="BDT30150" EquivalentBasePrice="BDT30150" ApproximateTaxes="BDT5713" Taxes="BDT5713" LatestTicketingTime="2020-01-16T23:59:00.000-08:00" PricingMethod="GuaranteedUsingAirlinePrivateFare" Refundable="true" IncludesVAT="false" ETicketability="Yes" ProviderCode="1G" TotalNetPrice="BDT35863">
                        <air:FareInfo Key="Q/bPf83R2BKAVRcqNAAAAA==" FareBasis="W1LOBD1" PassengerTypeCode="ADT" Origin="DAC" Destination="SIN" EffectiveDate="2020-01-06T02:12:00.000+06:00" DepartureDate="2020-01-16" Amount="BDT30150" PrivateFare="AirlinePrivateFare" TourCode="BDE8S131" PseudoCityCode="510K" TaxAmount="BDT5713.00">
                            <common_v47_0:Endorsement Value="NON ENDORSE/CANCELLATION/"/>
                            <common_v47_0:Endorsement Value="CHANGE FEE APPLIED/RFND"/>
                            <common_v47_0:Endorsement Value="NOT LATER THAN 90 DAYS"/>
                            <common_v47_0:Endorsement Value="AFTER TKT EXPIRY"/>
                            <air:FareRuleKey FareInfoRef="Q/bPf83R2BKAVRcqNAAAAA==" ProviderCode="1G">6UUVoSldxwh5aiD2j9dRfsbKj3F8T9EyxsqPcXxP0TLGyo9xfE/RMjJs02vwFm2e8KjXlX2GC9Zxzxir+BHgS92XvBQcirZgruLHJPLFtpsEhxN9YvayJeh49lOlIMxhYBR1VjXHCoHXluoEouoIfvdjHI7RMFymlso7K04PFXaU6zdlRUZHbsiMHkKyPV8RgBFXFvplIhfCwfjH0KVfbiZyy4qnv9PHl2LqJ4NgqO1EQ+ZLml8hMgDrTVDGn4qCfUKpUJwmWYHhcTnUwbnO/VhhabkXTMR9JHXyDAS6XXJaa1fLuHBwW/pXMWhXzmvzs1mEkOA37oJW8vSBNa8ZUuJYtF79PC3YsxYLUKGiXKXVW5TpURjX8X3sX2bfrtYmCkJQE184nnbg2BMJ0qOmdc4YTCgtCVCco2YAUzLjYom+gN6MQilyAuaeJIc23zoev4Xvb2u1Qx+/he9va7VDH7+F729rtUMfv4Xvb2u1Qx+/he9va7VDH8ONhV50oNexly5qxZ3qLwMUu+QC5Q/Q9qZNvsjOX7piV093M//Mwsuosfqog3j0zcGIIIfNPUlh</air:FareRuleKey>
                            <air:Brand Key="Q/bPf83R2BKAVRcqNAAAAA==" BrandFound="false" UpSellBrandFound="false"/>
                        </air:FareInfo>
                        <air:BookingInfo BookingCode="W" CabinClass="Economy" FareInfoRef="Q/bPf83R2BKAVRcqNAAAAA==" SegmentRef="Q/bPf83R2BKAHRcqNAAAAA==" HostTokenRef="Q/bPf83R2BKAMRcqNAAAAA=="/>
                        <air:BookingInfo BookingCode="W" CabinClass="Economy" FareInfoRef="Q/bPf83R2BKAVRcqNAAAAA==" SegmentRef="Q/bPf83R2BKAJRcqNAAAAA==" HostTokenRef="Q/bPf83R2BKAMRcqNAAAAA=="/>
                        <air:TaxInfo Category="BD" Amount="BDT500" Key="Q/bPf83R2BKAPRcqNAAAAA=="/>
                        <air:TaxInfo Category="OW" Amount="BDT2000" Key="Q/bPf83R2BKAQRcqNAAAAA=="/>
                        <air:TaxInfo Category="UT" Amount="BDT3000" Key="Q/bPf83R2BKARRcqNAAAAA=="/>
                        <air:TaxInfo Category="E7" Amount="BDT96" Key="Q/bPf83R2BKASRcqNAAAAA=="/>
                        <air:TaxInfo Category="G8" Amount="BDT42" Key="Q/bPf83R2BKATRcqNAAAAA=="/>
                        <air:TaxInfo Category="E5" Amount="BDT75" Key="Q/bPf83R2BKAURcqNAAAAA=="/>
                        <air:FareCalc>DAC TG X/BKK TG SIN 360.00W1LOBD1 NUC360.00END ROE1.0</air:FareCalc>
                        <air:PassengerType Code="ADT"/>
                        <air:PassengerType Code="ADT"/>
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
                    <air:AirPricingInfo Key="Q/bPf83R2BKAcRcqNAAAAA==" TotalPrice="BDT26826" BasePrice="USD270.00" ApproximateTotalPrice="BDT26826" ApproximateBasePrice="BDT22613" EquivalentBasePrice="BDT22613" ApproximateTaxes="BDT4213" Taxes="BDT4213" LatestTicketingTime="2020-01-16T23:59:00.000-08:00" PricingMethod="GuaranteedUsingAirlinePrivateFare" Refundable="true" IncludesVAT="false" ETicketability="Yes" ProviderCode="1G" TotalNetPrice="BDT35863">
                        <air:FareInfo Key="Q/bPf83R2BKAjRcqNAAAAA==" FareBasis="W1LOBD1" PassengerTypeCode="CNN" Origin="DAC" Destination="SIN" EffectiveDate="2020-01-06T02:12:00.000+06:00" DepartureDate="2020-01-16" Amount="BDT22613" PrivateFare="AirlinePrivateFare" TourCode="BDE8S131" PseudoCityCode="510K" TaxAmount="BDT4213.00">
                            <air:FareTicketDesignator Value="CH"/>
                            <common_v47_0:Endorsement Value="NON ENDORSE/CANCELLATION/"/>
                            <common_v47_0:Endorsement Value="CHANGE FEE APPLIED/RFND"/>
                            <common_v47_0:Endorsement Value="NOT LATER THAN 90 DAYS"/>
                            <common_v47_0:Endorsement Value="AFTER TKT EXPIRY"/>
                            <air:FareRuleKey FareInfoRef="Q/bPf83R2BKAjRcqNAAAAA==" ProviderCode="1G">6UUVoSldxwh5aiD2j9dRfsbKj3F8T9EyxsqPcXxP0TLGyo9xfE/RMpvJpPC8QdYUW2IzSJ5QSuF0Ln4Z4y6fdUaT+YplK3UuR85kg2/WOs0mcsuKp7/Tx8+IhlLWwhcDMRjvuHpJVypwcke+IvV68Q6SdY/HIJTkxKqtbaHtWhdHe5PQSyOliFtmA6R7WFDeHdfnFnbQauKtsVq2HyDI/SpWayaaoHmg3tRK6tpsjyZnGuJ7EZ7uQLt1C8nRz6Ji9kY7J0WSfnw3ukFTwWsKZbPL7cRxZYtuJJJkSAQvpY68XeP3Ob9lxdeW6gSi6gh+vJWr6+nvtEJQyMCR8I1qwMCIbRqMTJchO9AiVt4ZroBaeijkgxpswsErsm/4n+Qei1wzEP2Ynv5JTyB5x9tYSQLWhthMb3jlQD/hZztUai2G62UMOI1Qj2pYV94+54rCly5qxZ3qLwOXLmrFneovA5cuasWd6i8Dly5qxZ3qLwOXLmrFneovA2+QKPIWaRvq6oxE1UL944DjaSte7T4ddN+x1f7ldG8knVsA8ym8NgYSiYw8naSusQ7bvAHYUzO75W4bRuwrrPA=</air:FareRuleKey>
                            <air:Brand Key="Q/bPf83R2BKAjRcqNAAAAA==" BrandFound="false" UpSellBrandFound="false"/>
                        </air:FareInfo>
                        <air:BookingInfo BookingCode="W" CabinClass="Economy" FareInfoRef="Q/bPf83R2BKAjRcqNAAAAA==" SegmentRef="Q/bPf83R2BKAHRcqNAAAAA==" HostTokenRef="Q/bPf83R2BKANRcqNAAAAA=="/>
                        <air:BookingInfo BookingCode="W" CabinClass="Economy" FareInfoRef="Q/bPf83R2BKAjRcqNAAAAA==" SegmentRef="Q/bPf83R2BKAJRcqNAAAAA==" HostTokenRef="Q/bPf83R2BKANRcqNAAAAA=="/>
                        <air:TaxInfo Category="BD" Amount="BDT500" Key="Q/bPf83R2BKAdRcqNAAAAA=="/>
                        <air:TaxInfo Category="OW" Amount="BDT2000" Key="Q/bPf83R2BKAeRcqNAAAAA=="/>
                        <air:TaxInfo Category="UT" Amount="BDT1500" Key="Q/bPf83R2BKAfRcqNAAAAA=="/>
                        <air:TaxInfo Category="E7" Amount="BDT96" Key="Q/bPf83R2BKAgRcqNAAAAA=="/>
                        <air:TaxInfo Category="G8" Amount="BDT42" Key="Q/bPf83R2BKAhRcqNAAAAA=="/>
                        <air:TaxInfo Category="E5" Amount="BDT75" Key="Q/bPf83R2BKAiRcqNAAAAA=="/>
                        <air:FareCalc>DAC TG X/BKK TG SIN 270.00W1LOBD1/CH NUC270.00END ROE1.0</air:FareCalc>
                        <air:PassengerType Code="CNN" Age="7"/>
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
                    <air:FareNote Key="Q/bPf83R2BKAqRcqNAAAAA==">RATE USED IN EQU TOTAL IS BSR 1USD - 83.75BDT</air:FareNote>
                    <air:FareNote Key="Q/bPf83R2BKArRcqNAAAAA==">TOUR CODE: BDE8S131</air:FareNote>
                    <air:FareNote Key="Q/bPf83R2BKAsRcqNAAAAA==">LAST DATE TO PURCHASE TICKET: 16JAN20</air:FareNote>
                    <air:FareNote Key="Q/bPf83R2BKAtRcqNAAAAA==">FARE HAS A PLATING CARRIER RESTRICTION</air:FareNote>
                    <air:FareNote Key="Q/bPf83R2BKAuRcqNAAAAA==">E-TKT REQUIRED</air:FareNote>
                    <air:FareNote Key="Q/bPf83R2BKAvRcqNAAAAA==">TICKETING FEES MAY APPLY</air:FareNote>
                    <air:FareNote Key="Q/bPf83R2BKAwRcqNAAAAA==">RATE USED IN EQU TOTAL IS BSR 1USD - 83.75BDT</air:FareNote>
                    <air:FareNote Key="Q/bPf83R2BKAxRcqNAAAAA==">TOUR CODE: BDE8S131</air:FareNote>
                    <air:FareNote Key="Q/bPf83R2BKAyRcqNAAAAA==">LAST DATE TO PURCHASE TICKET: 16JAN20</air:FareNote>
                    <air:FareNote Key="Q/bPf83R2BKAzRcqNAAAAA==">FARE HAS A PLATING CARRIER RESTRICTION</air:FareNote>
                    <air:FareNote Key="Q/bPf83R2BKA0RcqNAAAAA==">E-TKT REQUIRED</air:FareNote>
                    <air:FareNote Key="Q/bPf83R2BKA1RcqNAAAAA==">TICKETING FEES MAY APPLY</air:FareNote>
                    <common_v47_0:HostToken Key="Q/bPf83R2BKAMRcqNAAAAA==">GFB10101ADT00  01W1LOBD1                               0200010002#GFB200010101NADTV3912BD010010000299722770416W1LOBD1W1LOBDUEH#GFMCXOW912YBD01FTG ADTW1LOBD1</common_v47_0:HostToken>
                    <common_v47_0:HostToken Key="Q/bPf83R2BKANRcqNAAAAA==">GFB10202CNN00  01W1LOBD1        CH                     0200010002#GFB200020201NCNNV3912BD010010000299722770416100159891W1LOBD1W1LOBDUEH#GFMCXOW912YBD01FTG CNNW1LOBD1</common_v47_0:HostToken>
                </air:AirPricingSolution>
            </air:AirPriceResult>
        </air:AirPriceRsp>
    </SOAP:Body>
</SOAP:Envelope>`;
    return data
}
