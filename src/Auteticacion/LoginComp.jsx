import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import './Login.css'

export const LoginComp = () => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useContext(AuthContext);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const submitForm = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await login(emailRef.current.value, passwordRef.current.value);
      closeForm();
    } catch (error) {
      setError('Invalid login');
    }
  };

  return (
    <>
      <button onClick={openForm} className="btn btn-outline-secondary mx-2">
        Login
      </button>
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Login</h5>
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
              </div>
              <div className="modal-footer">
                <button type="button" onClick={closeForm} className="btn btn-secondary">
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
