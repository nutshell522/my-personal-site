import React from 'react';
import { useTranslation } from 'react-i18next';
import sharedInfo from '../../public/datas/sharedInfo.json';

const Contact: React.FC = () => {
  const { t } = useTranslation('contact');
  const { github, email, phone, linkedin } = sharedInfo;

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-6">{t('title')}</h1>

      <ul className="list-disc list-inside space-y-4">
        <li>
          <strong>GitHub:</strong>{' '}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            {github}
          </a>
        </li>
        <li>
          <strong>Email:</strong>{' '}
          <a href={`mailto:${email}`} className="text-blue-500">
            {email}
          </a>
        </li>
        <li>
          <strong>Phone:</strong> {phone}
        </li>
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            {linkedin}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
