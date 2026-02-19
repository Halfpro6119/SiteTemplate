import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import ServiceAreaChecker from './ServiceAreaChecker';

function renderWithRouter() {
  return render(
    <MemoryRouter>
      <ServiceAreaChecker />
    </MemoryRouter>
  );
}

describe('ServiceAreaChecker', () => {
  it('shows covered message and Book a survey CTA for ST1', async () => {
    const user = userEvent.setup();
    renderWithRouter();

    const input = screen.getByLabelText(/postcode or town/i);
    await user.type(input, 'ST1');
    await user.click(screen.getByRole('button', { name: /check coverage/i }));

    expect(screen.getByText(/Yes, we cover you./i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /book a survey/i })).toBeInTheDocument();
  });

  it('shows Contact us to confirm for London', async () => {
    const user = userEvent.setup();
    renderWithRouter();

    const input = screen.getByLabelText(/postcode or town/i);
    await user.type(input, 'London');
    await user.click(screen.getByRole('button', { name: /check coverage/i }));

    expect(screen.getByText(/Contact us to confirm/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact us/i })).toBeInTheDocument();
  });
});
