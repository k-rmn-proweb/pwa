import { useState } from 'react';
import i18next from 'i18next';
import { Select } from 'antd';
import { languages, changeLanguage } from '../../../../lib/locales';

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
    <Select
      value={i18next.language}
      disabled={isLoading}
      style={{ width: 120 }}
      dropdownMatchSelectWidth={false}
      onChange={handleChange}
    >
      {languages.map((value: string) => (
        <Select.Option key={value} value={value}>
          {value}
        </Select.Option>
      ))}
    </Select>
  );
}

export default ChangeLanguage;
