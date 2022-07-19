import axios from "axios";
import React, { useState, useEffect } from "react";
import './App.css';
import { MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol, MDBContainer, MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';
import { Users } from "./users";
function App() {
    const [query, setQuery] = useState("");


    return (
        <MDBContainer>
            <form style={{
                margin: "auto",
                padding: "15px",
                maxWidth: "400px",
                alignContent: "center",
            }}


            >
                <input
                    type="text"
                    className="form-control"
                    placeholder="search game"

                    onChange={e => setQuery(e.target.value)}
                />

                {/* <MDBBtn type="submit">Search</MDBBtn>
        <MDBBtn className="mx-2" color="info" onClick={() => handleReset()}>Reset</MDBBtn> */}

                {/* </MDBBtnGroup> */}

            </form>
            <div style={{ marginTop: "10px" }}>
                <MDBCol size="5">
                    <h5>Filter By editors_choice:</h5>
                    <MDBBtnGroup>
                        <MDBBtn color="success" >Sort

                        </MDBBtn>

                        <MDBBtn color="danger"
                            style={{ marginLeft: "2px" }} >Normal

                        </MDBBtn>

                    </MDBBtnGroup>

                </MDBCol>

                <MDBTable class="table table-dark table-striped">
                    <MDBTableHead dark>
                        <tr>


                            <th scope="col">Tittle</th>
                            <th scope="col">Platform</th>
                            <th scope="col">Score</th>
                            <th scope="col">Genere</th>
                            <th scope="col">Editor-choice</th>

                        </tr>
                    </MDBTableHead>
                    {Users.filter(user => user.title.toLocaleLowerCase().includes(query)).map((user) => (
                        <MDBTableBody>
                            <tr>
                                {/* <th scope="row">{index + 1}</th> */}
                                <td>{user.title}</td>
                                <td>{user.platform}</td>
                                <td>{user.score}</td>
                                <td>{user.genre}</td>
                                <td>{user.editors_choice}</td>
                            </tr>
                        </MDBTableBody>
                    ))}

                </MDBTable>
            </div>
        </MDBContainer >


    );
}


export default App;
