import React from 'react'
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBirthdayCake,
  faUser,
  faIdCard,
  faPhone,
  faEnvelope,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons"


function popOver() {
    return (
        <>
    
          <div
            id="container"
            onClick={handleOnClose}
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="bg-white p-10 rounded-3xl w-72 ">
              <h1 className="font-bold text-center lg bg-purple-100 mb-5">
                Request Details
              </h1>
              <ul>
                {requests.map((request) => (
                  <li key={request.id}>
                    <p className="mt-3">
                      <FontAwesomeIcon
                        icon={faIdCard}
                        style={{ color: "#EE82EE" }}
                      />{" "}
                      <span className="font-bold ml-2">Identifiant</span> :{" "}
                      {request.id}
                    </p>
                    <p className="mt-3 ">
                      <FontAwesomeIcon icon={faUser} style={{ color: "#EE82EE" }} />
                      {"    "}
                      <span className="font-bold ml-2">Name</span> :{" "}
                      {request.first_name} {request.last_name}
                    </p>
                    <p className="mt-3">
                      {/* <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{ color: "#EE82EE" }}
                      /> */}
                      <span className="font-bold ml-2">Email</span> :{" "}
                      {request.email}
                    </p>
                    <p className="mt-3">
                      {" "}
                      {/* <FontAwesomeIcon
                        icon={faBirthdayCake}
                        style={{ color: "#EE82EE" }}
                      /> */}
                      <span className="font-bold ml-2">Birthday</span> :{" "}
                      {request.birthday}
                    </p>
                    <p className="mt-3">
                      {/* <FontAwesomeIcon
                        icon={faPhone}
                        style={{ color: "#EE82EE" }}
                      /> */}
                      {/* Icône Phone */}{" "}
                      <span className="font-bold ml-2">Phone</span> :{" "}
                      {request.phone}
                    </p>
                    <p className="mt-3">
                      
                        icon={faBuilding}
                        style={{ color: "#EE82EE" }}
                      {" "}
                      <span className="font-bold ml-2">Organization</span> :{" "}
                      {request.organization}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )
    }
    

export default popOver