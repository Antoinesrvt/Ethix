'use client';

import { useState } from 'react';
import { Trans } from 'react-i18next';

interface InfoTooltipProps {
  content?: string;
  i18nKey?: string;
}

export default function InfoTooltip({ content, i18nKey }: InfoTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div className="relative inline-block ml-1">
      <button
        className="text-slate/60 hover:text-earth-green transition-colors w-4 h-4 rounded-full bg-light-gray flex items-center justify-center text-xs"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)}
        aria-label="More information"
      >
        ?
      </button>
      {isVisible && (
        <div className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-white rounded-lg shadow-md text-xs text-slate border border-light-gray">
          {i18nKey ? (
            <Trans i18nKey={i18nKey} />
          ) : (
            content
          )}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-r border-b border-light-gray"></div>
        </div>
      )}
    </div>
  );
} 