import React, { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

interface SecureInputProps {
  type?: 'text' | 'email' | 'password' | 'url' | 'search';
  value: string;
  onChange: (value: string) => void;
  onValidationError?: (errors: string[]) => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  sanitizeType?: 'text' | 'email' | 'name' | 'location' | 'searchQuery' | 'url';
  className?: string;
  disabled?: boolean;
  autoComplete?: string;
}

const SecureInput: React.FC<SecureInputProps> = ({
  type = 'text',
  value,
  onChange,
  onValidationError,
  placeholder,
  label,
  required = false,
  maxLength,
  minLength,
  pattern,
  sanitizeType = 'text',
  className = '',
  disabled = false,
  autoComplete
}) => {
  const [errors, setErrors] = useState<string[]>([]);
  const [touched, setTouched] = useState(false);

  // Import sanitization functions
  const getSanitizer = () => {
    const { sanitizeForDatabase } = require('../lib/sanitize');
    switch (sanitizeType) {
      case 'email':
        return sanitizeForDatabase.email;
      case 'name':
        return sanitizeForDatabase.name;
      case 'location':
        return sanitizeForDatabase.location;
      case 'searchQuery':
        return sanitizeForDatabase.searchQuery;
      case 'url':
        return sanitizeForDatabase.url;
      default:
        return sanitizeForDatabase.text;
    }
  };

  // Validate input
  const validateInput = (inputValue: string): string[] => {
    const validationErrors: string[] = [];

    // Required field validation
    if (required && !inputValue.trim()) {
      validationErrors.push('This field is required');
    }

    // Length validation
    if (minLength && inputValue.length < minLength) {
      validationErrors.push(`Minimum length is ${minLength} characters`);
    }

    if (maxLength && inputValue.length > maxLength) {
      validationErrors.push(`Maximum length is ${maxLength} characters`);
    }

    // Pattern validation
    if (pattern && inputValue && !new RegExp(pattern).test(inputValue)) {
      validationErrors.push('Invalid format');
    }

    // Email validation
    if (type === 'email' && inputValue) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inputValue)) {
        validationErrors.push('Please enter a valid email address');
      }
    }

    // URL validation
    if (type === 'url' && inputValue) {
      try {
        new URL(inputValue);
      } catch {
        validationErrors.push('Please enter a valid URL');
      }
    }

    return validationErrors;
  };

  // Handle input change with sanitization
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const sanitizer = getSanitizer();
    const sanitizedValue = sanitizer(rawValue);
    
    // Update the value with sanitized input
    onChange(sanitizedValue);
    
    // Validate the sanitized value
    const validationErrors = validateInput(sanitizedValue);
    setErrors(validationErrors);
    
    // Notify parent component of validation errors
    if (onValidationError) {
      onValidationError(validationErrors);
    }
  };

  // Handle blur event
  const handleBlur = () => {
    setTouched(true);
  };

  // Show errors only if field has been touched
  const shouldShowErrors = touched && errors.length > 0;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          required={required}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          disabled={disabled}
          autoComplete={autoComplete}
          className={`
            w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all duration-300
            ${shouldShowErrors 
              ? 'border-red-300 focus:ring-red-400' 
              : 'border-gray-200 focus:ring-primary-400'
            }
            ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
            ${className}
          `}
        />
        
        {shouldShowErrors && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <AlertCircle className="h-5 w-5 text-red-500" />
          </div>
        )}
      </div>
      
      {shouldShowErrors && (
        <div className="mt-2 space-y-1">
          {errors.map((error, index) => (
            <div key={index} className="flex items-center text-sm text-red-600">
              <AlertCircle className="h-4 w-4 mr-1 flex-shrink-0" />
              {error}
            </div>
          ))}
        </div>
      )}
      
      {maxLength && (
        <div className="mt-1 text-xs text-gray-500 text-right">
          {value.length}/{maxLength}
        </div>
      )}
    </div>
  );
};

export default SecureInput; 