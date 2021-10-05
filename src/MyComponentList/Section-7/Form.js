import React, {useState} from "react";
import '../../MyComponentCSS/Form.css'

export default function FillUpForm() {
    const [ID, setID] = useState(0)
    const [NewName, setNewName] = useState("")
    const [NewEmail, setNewEmail] = useState("")
    const [NewAge, setNewAge] = useState("")
    const [NewDOB, setNewDOB] = useState("")
    const [NewGender, setNewGender] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        var UserList = JSON.parse(localStorage.getItem("UserList"))
        if(UserList===null || UserList===undefined){
            var UserList= []
        }
        setID(UserList.length +1)
        let User = { 
            id: ID,
            name: NewName,
            email: NewEmail,
            age: NewAge,
            dob: NewDOB,
            gender: NewGender
        }
        
        UserList.push(User)
        localStorage.setItem('UserList', JSON.stringify(UserList))

        setNewName('')
        setNewEmail('')
        setNewAge('')
        setNewDOB('')
        setNewGender('')
    };
    
    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        console.log(name, value);
        setNewGender(value)
    }

    return (
        <>
            <div className="MainContainer">
                <div className="FormContainer">
                    <h1 id="FormTitle">Registration Form</h1>
                    <form onSubmit={handleSubmit} className="UserContainer">
                        <label htmlFor="name">Name</label><br />
                        <input type="text" name="username" value={NewName} onChange={(e) => setNewName(e.target.value)} placeholder="Enter your name" className="InputField" /><br />
                        <label htmlFor="email">EmailId</label><br />
                        <input type="email" name="userid" value={NewEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder="Enter your email" className="InputField" /><br />
                        <label htmlFor="age">Age</label><br />
                        <input type="number" name="userage" value={NewAge} onChange={(e) => setNewAge(e.target.value)} placeholder="Enter your age" className="InputField" /><br />
                        <label htmlFor="birthdate">Date of Birth</label><br />
                        <input type="date" name="userdob" value={NewDOB} onChange={(e) => setNewDOB(e.target.value)} className="InputField" /><br />
                        <label htmlFor="gender">Gender: </label>
                        Male <input type="radio" name="gender" value="male" onChange={(e) => handleChange(e)} className="RadioInputField" />
                        Female <input type="radio" name="gender" value="female" onChange={(e) => handleChange(e)} className="RadioInputField" />
                        Other <input type="radio" name="gender" value="others" onChange={(e) => handleChange(e)} className="RadioInputField" />
                        <br />
                        <button type="submit"  id="SubmitForm">Submit</button>
                    </form>

                </div>
            </div>
        </>
    );
}