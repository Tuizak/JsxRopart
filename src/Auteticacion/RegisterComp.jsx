import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import './Register.css';

export const RegisterComp = () => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();
  const cmfPasswordRef = useRef();

  const { register } = useContext(AuthContext);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const submitForm = async (e) => {
    e.preventDefault();
    setError('');

    if (passwordRef.current.value !== cmfPasswordRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      await register(emailRef.current.value, passwordRef.current.value);
      closeForm();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <button onClick={openForm} className="btn btn-outline-secondary mx-2">
        Registrar
      </button>
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Registrar</h5>
              <button onClick={closeForm} className="close-button">
                &times;
              </button>
            </div>
            <form onSubmit={submitForm}>
              <div className="modal-body">
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="form-group">
                  <label>Correo Electronico</label>
                  <input type="email" required ref={emailRef} className="form-control" />
                </div>
                <div className="form-group">
                  <label>Contraseña</label>
                  <input type="password" required ref={passwordRef} className="form-control" />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="password" required ref={cmfPasswordRef} className="form-control" />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" onClick={closeForm} className="btn btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
