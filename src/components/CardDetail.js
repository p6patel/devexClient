import React from 'react';
import cardDetails from './card-details.json';
import jose from 'node-jose';

const CardDetail = ({ detail }) => {
    if(detail.length === 0) {
        return <div>Please click button to see Card details</div>
    }

    return(
        <div>
        <label>Virtual Card details</label>
        <ul>
            <li>Card Number : {cardDetails.virtualCardDetails.cardNumber}</li>
            <li>Card Holder Name : {cardDetails.virtualCardDetails.cardHolderName}</li>
            <li>Expiration Date : {cardDetails.virtualCardDetails.cardExpirationDate}</li>
            <li>CVV : {cardDetails.virtualCardDetails.cvv}</li>
            <li>Address : {cardDetails.virtualCardDetails.billingAddress.addressLine1} {cardDetails.virtualCardDetails.billingAddress.city}, {cardDetails.virtualCardDetails.billingAddress.stateCode} {cardDetails.virtualCardDetails.billingAddress.postalCode}</li>
        </ul>
        <label>Physical Card details</label>
        <ul>
            <li>Last 4 Card Number : {cardDetails.physicalCardDetails.lastFourCardNumber}</li>
            <li>Product : {cardDetails.physicalCardDetails.productName}</li>
            <li>Nickname : {cardDetails.physicalCardDetails.nickname}</li>
            <br/>
            <img src={cardDetails.physicalCardDetails.cardArtImageUrl} alt="card art" style={{height: "150px", width: "250px"}}/>
        </ul>
        </div>
    );
};

export default CardDetail;