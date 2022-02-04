import React, { useState,useRef,useEffect } from "react";


function Report()
{
    return(
        <div class="container">
            <div  style={{ marginTop:'100px' }}>

                <span style={{fontSize: '20px',textAlign:'center'}}>Distribution of the data types in the file</span>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">% Numeric</th>
                        <th scope="col">% Alphanumeric</th>
                        <th scope="col">% Float</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>

            <div class="row">
                <span>2732222222 - numeric</span>
            </div>
            <div class="row">
                <span>2732222222 - numeric</span>
            </div>

        </div>
    );
}


export default Report;