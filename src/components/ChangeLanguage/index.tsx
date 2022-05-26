import { useState } from 'react';
import i18next from 'i18next';
import { Select } from 'antd';
import { languages, changeLanguage } from '../../lib/locales';

function ChangeLanguage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = async (value: string) => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    await changeLanguage(value);
    setIsLoading(false);
  };

  return (
    <Select value={i18next.language} disabled={isLoading} dropdownMatchSelectWidth={false} onChange={handleChange}>
      {languages.map((lang) => (
        <Select.Option key={lang.key} value={lang.value}>
          {lang.key}
        </Select.Option>
      ))}
    </Select>
  );
}

export default ChangeLanguage;
