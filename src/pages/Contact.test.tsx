import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Contact from './Contact';

vi.mock('../lib/supabase', () => ({ supabase: null }));

describe('Contact page', () => {
  it(
    'shows success message after valid form submit when Supabase is not configured',
    async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <Contact />
        </MemoryRouter>
      );

      await user.type(screen.getByLabelText(/full name/i), 'Jane Doe');
      await user.type(screen.getByLabelText(/phone/i), '07700900123');
      await user.type(screen.getByLabelText(/email/i), 'jane@example.com');
      await user.type(screen.getByLabelText(/your message/i), 'Hello, I need a quote.');

      await user.click(screen.getByRole('button', { name: /send message/i }));

      await waitFor(
        () => {
          expect(screen.getByText(/Message sent successfully!/i)).toBeInTheDocument();
        },
        { timeout: 6000 }
      );
    },
    8000
  );
});
