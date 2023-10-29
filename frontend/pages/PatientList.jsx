import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Table, Button, Form, InputGroup, Modal } from 'react-bootstrap';
import { BsInfoCircle, BsSearch } from 'react-icons/bs';
import { MdOutlineDelete, MdOutlineEdit, MdOutlineInfo, MdOutlineSearch, MdOutlineEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

function formatDate(isoDate) {
  if (!isoDate) {
    return '';
  }
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function PatientList() {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [patientToDelete, setPatientToDelete] = useState(null);

  useEffect(() => {
    // Fetch patient data when the component mounts
    axios
      .get('http://localhost:5555/getPatients')
      .then((response) => {
        setPatients(response.data.patients);
      })
      .catch((error) => {
        console.error('Error fetching patient data:', error);
      });
  }, []);

  const filteredPatients = patients.filter((patient) => {
    return (
      patient.mrnNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      `${patient.firstName} ${patient.surname}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      formatDate(patient.dob).includes(searchTerm) ||
      patient.icNo.toString().includes(searchTerm) ||
      patient.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.mobileNo.toString().includes(searchTerm) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleDeleteClick = (patient) => {
    setPatientToDelete(patient);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    // Implement your delete logic here
    axios
      .delete(`http://localhost:5555/deletePatient/${patientToDelete._id}`)
      .then(() => {
        setShowSuccessModal(true);
        setPatients((prevPatients) => prevPatients.filter((p) => p._id !== patientToDelete._id));
        setShowDeleteModal(false);
      })
      .catch((error) => {
        console.error('Error deleting patient:', error);
      });
  };

  const handleCancelDelete = () => {
    setPatientToDelete(null);
    setShowDeleteModal(false);
  };

  return (
    <div>
      <Container>
        <Row className="mt-3 mb-3">
          <Col md={7}>
            <h1>PATIENT LIST</h1>
          </Col>
          <Col md={5} className="d-flex justify-content-end">
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="Search by criteria..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <InputGroup.Text>
                <BsSearch />
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>MRN No</th>
                  <th>Name</th>
                  <th>Date of Birth</th>
                  <th>IC No</th>
                  <th>Gender</th>
                  <th>Mobile No</th>
                  <th>Email</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map((patient, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{patient.mrnNo}</td>
                    <td>{`${patient.firstName} ${patient.surname}`}</td>
                    <td>{formatDate(patient.dob)}</td>
                    <td>{patient.icNo}</td>
                    <td>{patient.gender}</td>
                    <td>{patient.mobileNo}</td>
                    <td>{patient.email}</td>
                    <td className="text-center">
                      <Link key={patient._id} to={`/showPatientByID/${patient._id}`}>
                        <Button variant="light" className="transparent-button">
                          <MdOutlineSearch className="blue-icon icon-large" />
                        </Button>
                      </Link>
                      <Button
                        variant="light"
                        className="transparent-button"
                        onClick={() => handleEditClick(patient)}
                      >
                        <MdOutlineEmail className="brown-icon icon-large" />
                      </Button>
                      <Link key={patient._id} to={`/updatePatientByID/${patient._id}`}>
                      <Button
                        variant="light"
                        className="transparent-button"
                        
                      >
                        <MdOutlineEdit className="black-icon icon-large" />
                      </Button>
                      </Link>
                      <Button
                        variant="light"
                        className="transparent-button"
                        onClick={() => handleDeleteClick(patient)}
                      >
                        <MdOutlineDelete className="red-icon icon-large" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={handleCancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {patientToDelete && (
            <p>Are you sure you want to delete {patientToDelete.firstName} {patientToDelete.surname}?</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Success Modal */}
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Patient deleted successfully.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowSuccessModal(false)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PatientList;
