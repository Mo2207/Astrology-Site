
import * as React from 'react';

interface EmailTemplateProps {
  courseLink: string;
}

export function EmailTemplate({ courseLink }: EmailTemplateProps) {
  return (
    <div>
      <h1>Welcome to Your Course!</h1>
      <p>You can access your course here: <a href={courseLink}>{courseLink}</a></p>
    </div>
  );
}