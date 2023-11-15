import React, { useState, useEffect } from 'react';
import { ButtonNewsletter, DescriptionNewsletter, Input, InputContainerNewsletter, NewsletterContainer, TitleNewsletter } from './Newsletter.style';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSendClick = () => {
  
        fetch('http://localhost:3005/newsletter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log('Email trimis cu succe:', data);
              
                setEmail('');
            })
            .catch((error) => {
                console.error('Eroare la trimiterea emailului:', error);
            });
    };

    return (
        <NewsletterContainer>
            <TitleNewsletter>
                Newsletter
            </TitleNewsletter>

            <DescriptionNewsletter>
                Vrei sa fii primul care afla vestile bune? Aboneaza-te la newsletterul nostru!
            </DescriptionNewsletter>

            <InputContainerNewsletter>
                <Input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></Input>
                <ButtonNewsletter onClick={handleSendClick}>Send</ButtonNewsletter>
            </InputContainerNewsletter>
        </NewsletterContainer>
    );
};

export default Newsletter;
