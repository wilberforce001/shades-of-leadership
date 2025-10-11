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
        <div>
            <h2>Meet our Guests</h2>
            <div>
                {guests.map((guest, index) => (
                    <div>
                        <div>
                            <img 
                            src={guest.img}
                            alt={guest.name}
                            className="card-img-top"
                            style={{ height: "250px", width: "250px", objectFit: "cover" }}
                            />

                            <div>
                                <h5>{guest.name}</h5>
                                <h6>{guest.role}</h6>
                                <p>{guest.bio}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Guests;