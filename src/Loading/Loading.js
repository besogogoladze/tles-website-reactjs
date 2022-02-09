import React from "react";
import "./style.css";
import { Spinner } from "react-bootstrap";

export default function Loading() {
    return (
        <div className="justify-content-center d-flex align-items-center ft-8 height">
            <Spinner animation="grow" variant="info" />
        </div>
    )
}