import React, {useState, useEffect} from 'react';

const HomeForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleForm = (e) => {
        setFormData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const sendForm = (e) => {
        e.preventDefault();
        if (formData.name.indexOf(" ") === -1 && formData.email.includes("@") && formData.message.length >= 120) {
            fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
                method: "Post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
                .then(res => res.json())
                .then(res2 => console.log(res2))
                .catch(error => console.log(error))
        }
        else {
            console.log("Błąd walidacji")
        }
    }


    return (
        <form onSubmit={sendForm}>
            <label>
                Name
                <input
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleForm(e)}
                />
            </label>
            <label>
                Email
                <input
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleForm(e)}
                />
            </label>
            <label>
                Message
                <input
                    name="message"
                    value={formData.message}
                    onChange={(e) => handleForm(e)}
                />
            </label>
            <button>Send</button>
        </form>
    );
};

export default HomeForm;