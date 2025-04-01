
import React from 'react';
import { Link } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface TermsCheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  id?: string;
  required?: boolean;
}

const TermsCheckbox: React.FC<TermsCheckboxProps> = ({ 
  checked, 
  onCheckedChange, 
  id = "terms", 
  required = true 
}) => {
  return (
    <div className="flex items-start space-x-2 mt-4">
      <Checkbox 
        id={id} 
        checked={checked} 
        onCheckedChange={(checked) => onCheckedChange(checked as boolean)} 
        required={required}
      />
      <div className="grid gap-1.5 leading-none">
        <Label 
          htmlFor={id} 
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I agree to the{' '}
          <Link to="/terms" className="text-primary hover:underline" target="_blank">
            Terms of Service
          </Link>
          {' '}and{' '}
          <Link to="/privacy" className="text-primary hover:underline" target="_blank">
            Privacy Policy
          </Link>
        </Label>
        {required && (
          <p className="text-xs text-muted-foreground mt-1">
            You must accept our Terms and Privacy Policy to create an account.
          </p>
        )}
      </div>
    </div>
  );
};

export default TermsCheckbox;
