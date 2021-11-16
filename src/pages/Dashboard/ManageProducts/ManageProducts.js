import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const ManageProducts = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('https://floating-depths-12610.herokuapp.com/cycles')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [bikes]);

    const handleDeleteBike = id => {
        const confirmDelete = window.confirm("Are you sure want to delete the bike ?");
        if (confirmDelete) {
            fetch(`https://floating-depths-12610.herokuapp.com/cycles/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        alert('Deleted Successfully');
                    }
                })
        }

    }

    return (
        <div>
            <h3 className="text-center bg-danger text-light my-4 py-2">All Bikes</h3>
            <div className="text-center">
                {/* <h2 className="text-danger">Bikes for You</h2> */}
                <div className="row my-5">
                    {
                        bikes.map(bike => <div key={bike._id} className="col-md-4">
                            <div className="border m-2">
                                <img className="img-fluid" src={bike.image} alt="" />
                                <h4 className="my-3">{bike.bike_name}</h4>
                                <div className="d-flex justify-content-between px-5 my-3">
                                    <p>
                                        <NavLink to={`/updateProduct/${bike._id}`}>
                                            <button
                                                className="btn btn-success"
                                            >Update</button>
                                        </NavLink>
                                    </p>
                                    <p>
                                        <button
                                            onClick={() => handleDeleteBike(bike._id)}
                                            className="btn btn-danger"
                                        >Delete</button>
                                    </p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;