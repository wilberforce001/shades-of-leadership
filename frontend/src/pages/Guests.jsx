import React from "react";

function Guests() {
    const guests = [
        {
            name: "Sanjay Divakar",
            role: "Entrepreneur & Leadership Coach",
            img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
            bio: "Sanjay shares insights on leadership, growth, and creating impactful organizations."
        },
        {
            name: "Aisha Mwangi",
            role: "Tech Innovator",
            img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
            bio: "Aisha explores how technology and innovation are shaping Africa’s future."
        },
        {
            name: "David Kimani",
            role: "Creative Director",
            img: "https://images.unsplash.com/photo-1502767089025-6572583495b0?auto=format&fit=crop&w=800&q=80",
            bio: "David discusses storytelling, creativity, and design as forces of change."
        },
    ]
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Meet our Guests</h2>
            <div className="row">
                {guests.map((guest, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm border-1">
                            <img 
                            src={guest.img}
                            alt={guest.name}
                            className="card-img-top"
                            style={{ height: "250px", objectFit: "cover" }}
                            />

                            <div className="card-body">
                                <h5 className="card-title">{guest.name}</h5>
                                <h6 className="text-muted">{guest.role}</h6>
                                <p className="card-text">{guest.bio}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Guests;