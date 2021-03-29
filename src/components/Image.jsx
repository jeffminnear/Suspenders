import React from 'react';
import { Avatar } from '@material-ui/core';
import { Suspense } from 'react';

const fetchUrl = 'https://dog.ceo/api/breeds/image/random';

async function getImage() {
    const response = await fetch(fetchUrl);
    const data = await response.json();
    return data.message;
};

function wrapPromise(promise) {
    let status = 'pending';
    let response;
    let suspender = promise.then(
        result => {
            status = 'success';
            response = result;
        },
        err => {
            status = 'error';
            response = err;
        }
    );
    return {
        read() {
            switch (status) {
                case 'pending':
                    throw suspender;
                case 'error':
                    throw response;
                case 'success':
                    return response;
            }
        }
    }
}

const fetchImage = () => {
    return wrapPromise(getImage());
}

function DogImage({ image }) {
    const imgSrc = image.read();
    return (
        <Avatar
            src={imgSrc}
            style={{
                height: '200px',
                width: '200px',
            }} 
        />
    );
}

function FallBack() {
    return (
        <p
            style={{
                textAlign: 'center',
                fontSize: '20px',
                color: 'black',
                position: 'relative',
                left: '-20%',
            }}
        >
            Searching for good boys and girls...
        </p>
    );
}

export default function Image() {
    return (
        <Suspense fallback={FallBack()}>
            <DogImage
                image={fetchImage()}   
            />
        </Suspense>
    );
}
