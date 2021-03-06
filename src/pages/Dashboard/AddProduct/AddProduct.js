import React, { useRef } from 'react';
import './AddProduct.css'

const AddProduct = () => {
    const bikeNameRef = useRef();
    const brandRef = useRef();
    const descriptionRef = useRef();
    const imageUrlRef = useRef();
    const priceRef = useRef();

    const handleAddBike = e => {
        e.preventDefault();
        const bike_name = bikeNameRef.current.value;
        const brand = brandRef.current.value;
        const short_des = descriptionRef.current.value;
        const image = imageUrlRef.current.value;
        const price = priceRef.current.value;

        const newBike = { bike_name, image, short_des, brand, price }
        // console.log(newBike)

        fetch('https://floating-depths-12610.herokuapp.com/cycles', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBike)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Bike Added Successfully');
                    e.target.reset();
                }
            })
    }

    return (
        <div className="my-4">
            <h2 className="text-center bg-danger text-light py-2 my-4">Add here a Bike with Details</h2>
            <form onSubmit={handleAddBike} className="add-product-form">
                <input ref={bikeNameRef} type="text" placeholder="Bike Name" />
                <input ref={brandRef} type="text" placeholder="Brand Name" />
                <textarea ref={descriptionRef} name="" id="" cols="30" rows="5" placeholder="Write Here Short Description of Bike"></textarea>
                <input ref={imageUrlRef} type="text" placeholder="Image URL Of Bike" />
                <input ref={priceRef} type="text" placeholder="Price Of Bike" />
                <button className="order-btn">Add Bike</button>
            </form>
        </div>
    );
};

export default AddProduct;