'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface NewsletterFormProps {
  isMobile?: boolean;
}

export default function NewsletterForm({ isMobile = false }: NewsletterFormProps) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setStatus('loading');
    
    // Simulate API call
    try {
      // In a real app, you would call your API here
      // await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email }) });
      
      // Simulate success after a short delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setStatus('success');
      setEmail('');
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }
  };
  
  if (isMobile) {
    return (
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder={t('footer.newsletter.placeholder')}
          className="px-3 py-2 text-sm border border-light-gray rounded-md focus:outline-none focus:ring-1 focus:ring-earth-green"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
        />
        <button 
          type="submit" 
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            status === 'success' 
              ? 'bg-positive text-white' 
              : status === 'error'
                ? 'bg-negative text-white'
                : 'bg-earth-green hover:bg-earth-green-dark text-white'
          }`}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? '...' : 
           status === 'success' ? 'Subscribed!' : 
           status === 'error' ? 'Try Again' : 
           t('footer.newsletter.subscribe')}
        </button>
      </form>
    );
  }
  
  return (
    <form className="flex flex-1" onSubmit={handleSubmit}>
      <input 
        type="email" 
        placeholder={t('footer.newsletter.placeholder')}
        className="px-3 py-2 text-sm flex-1 border border-light-gray rounded-l-md focus:outline-none focus:ring-1 focus:ring-earth-green"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === 'loading'}
      />
      <button 
        type="submit" 
        className={`px-4 py-2 text-sm font-medium rounded-r-md transition-colors ${
          status === 'success' 
            ? 'bg-positive text-white' 
            : status === 'error'
              ? 'bg-negative text-white'
              : 'bg-earth-green hover:bg-earth-green-dark text-white'
        }`}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? '...' : 
         status === 'success' ? '✓' : 
         status === 'error' ? '✗' : 
         t('footer.newsletter.subscribe')}
      </button>
    </form>
  );
} 