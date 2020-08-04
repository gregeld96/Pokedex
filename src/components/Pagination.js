import React from 'react';
import {Form, FormControl, Button } from 'react-bootstrap';

function Pagination ({ page, plus, minus, handlePageChange}) {
    return (
        <div className="d-flex justify-content-center mb-3">
            <Button onClick={minus}><img src="https://img.icons8.com/android/20/000000/minus.png" alt="minus"/></Button>
            <Form className="px-0">
            <FormControl type="text" placeholder={page} className="text-center border-0 px-0" value={page} onChange={handlePageChange}/>
            </Form>
            <Button onClick={plus}><img src="https://img.icons8.com/android/20/000000/plus.png" alt="plus"/></Button>
      </div>
    )
}

export default Pagination