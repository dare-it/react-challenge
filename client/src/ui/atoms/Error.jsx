import { useState } from 'react';

import { MessageCard } from "../templates/MessageCard";
import unknown_error from "../../assets/unknown_error.png";

export const Error = ({ error }) => {

  const [errorMessage, setErrorMessage] = useState('Wystąpił nieoczekiwany błąd');

  if (error && error.message && error.message.includes('Network Error')) {
    if (errorMessage !== 'Uruchom Server!') {
      setErrorMessage('Uruchom Server!')
    }
  }
  
  return (
    <MessageCard
      message={errorMessage}
      image={unknown_error}
    />
  );
};
