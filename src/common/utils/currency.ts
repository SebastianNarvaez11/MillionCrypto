/**
 * Formats a numeric value into a USD currency string.
 *
 * @param {string | number} value - The value to format. Can be either a string or number.
 * @returns {string} The formatted currency string in USD format with 2 decimal places.
 *
 * @example
 * formatToDollars(123.45) // Returns "$123.45"
 * formatToDollars("123.45") // Returns "$123.45"
 */
export const formatToDollars = (value: string | number): string => {
  const numericValue = typeof value === 'string' ? parseFloat(value) : value;

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericValue);
};
