
import * as React from 'react';

interface EmailTemplateProps {
  courseLink: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  courseLink,
}) => (
  <div>
    <h1>Congratulations!</h1>
    <p>Thank you for purchasing the course! Here is your unique course link: LINK</p>
  </div>
);