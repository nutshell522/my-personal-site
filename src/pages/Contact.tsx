import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import FormField from '../components/contact/FormField';

/**
 * 聯絡我
 */
const Contact: React.FC = () => {
  const { t } = useTranslation('ui');

  // 翻譯文字
  const title = t('contactUI.title');
  const description = t('contactUI.description');
  const formLabels = {
    name: t('contactUI.form.name'),
    email: t('contactUI.form.email'),
    message: t('contactUI.form.message'),
    send: t('contactUI.form.send'),
    sending: t('contactUI.form.sending'),
  };

  // 表單狀態
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  /**
   * 處理表單變更
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * 提交表單
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' }); // 重置表單
    } catch (error) {
      console.error('Failed to send email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-8 space-y-6">
      {/* 標題與描述 */}
      <header className="text-center">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </header>

      {/* 表單欄位 */}
      <FormField
        id="name"
        label={formLabels.name}
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <FormField
        id="email"
        label={formLabels.email}
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <FormField
        id="message"
        label={formLabels.message}
        type="textarea"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />

      {/* 發送按鈕 */}
      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-5 py-3 font-medium text-white rounded-lg transition duration-300 ${
            isSubmitting
              ? 'bg-blue-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {isSubmitting ? formLabels.sending : formLabels.send}
        </button>
      </div>

      {/* 成功提示 */}
      {isSent && (
        <p className="text-center text-green-500 font-semibold mt-4">
          {t('contactUI.successMessage')}
        </p>
      )}
    </form>
  );
};

export default Contact;
