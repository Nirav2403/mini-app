import React, { useEffect,useState } from 'react';
import '../MyComponentCSS/emoji.css'

export default function FeedBackForm() {

const[id,setId] = useState(0)
const mojis = ['😄','😁','😊','🙂','😐','😑','🤨','😕','🙁','😞'];
function handleChange(e){
  setId(e.target.value);
}
    return (
        <>
            <div className="container">
                <div class="row mt-5">
                    <div class="col-5 mx-auto ">
                        <form className="form-floating">
                            <div class="row">
                                <div class="form-floating mb-3 col-6">
                                    <input type="text" class="form-control" id="floatingInputFirstName" placeholder="Write your First Name" />
                                    <label for="floatingInputFirstName"> &nbsp; First Name</label>
                                </div>
                                <div class="form-floating mb-3 col-6">
                                    <input type="text" class="form-control" id="floatingInputLastName" placeholder="Write your Last Name" />
                                    <label for="floatingInputLastName"> &nbsp; Last Name</label>
                                </div>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInputEmail" placeholder="Write your Email Id" />
                                <label for="floatingInputEmail">Email address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="number" class="form-control" id="floatingInputContact" placeholder="Write your Contact Number" />
                                <label for="floatingInputContact">Contact number</label>
                            </div>
                            <div class="row">
                                <div className="col-4 mb-3">
                                    <select class="form-select" aria-label="Default select example">
                                        <option disabled selected>State</option>
                                        <option value="1">Gujarat</option>
                                        <option value="2">Rajasthan</option>
                                        <option value="3">Delhi</option>
                                        <option value="3">Maharashtra</option>
                                    </select>
                                </div>
                                <div className="col-4 mb-3">
                                    <select class="form-select" aria-label="Default select example">
                                        <option disabled selected>District</option>
                                        <option value="1">Ahmedabad</option>
                                        <option value="2">Bhavanagar</option>
                                        <option value="3">Gandhinagar</option>
                                        <option value="3">Surat</option>
                                    </select>
                                </div>
                                <div className="col-4 mb-3">
                                    <select class="form-select" aria-label="Default select example">
                                        <option disabled selected>Area</option>
                                        <option value="1">Maninagar</option>
                                        <option value="2">Isanpur</option>
                                        <option value="3">Bapunagar</option>
                                        <option value="3">Vastral</option>
                                    </select>
                                </div>
                            </div>
                            <div className="moji">{mojis[id]}</div>
                            <div className="slider">
                                <span>Good</span>
                                <input type="range" defaultValue='0' min="0" max="9" step="1" id="emoji" onChange={handleChange} />
                                <span>Bad</span>
                            </div>
                            <div className="mb-3">
                                <label htmlfor="CustomerFeedbackReply" className="form-label">what's the main reason for your score ?</label>
                                <textarea className="form-control" id="CustomerFeedbackReply" rows="8"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
