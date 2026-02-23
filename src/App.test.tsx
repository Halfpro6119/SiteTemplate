import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes } from 'react-router-dom';
import { appRoutes } from './App';
import { businessConfig } from './config';

const routesToTest: { path: string; expectedText: string }[] = [
  { path: '/', expectedText: 'Leak detection and repair' },
  { path: '/services', expectedText: 'Your water infrastructure specialists' },
  { path: '/about', expectedText: `About ${businessConfig.businessName}` },
  { path: '/contact', expectedText: 'Get in touch' },
  { path: '/reviews', expectedText: 'Trusted by homeowners' },
  { path: '/gallery', expectedText: 'Our Work' },
  { path: '/locations', expectedText: `We cover ${businessConfig.city} and 15 miles` },
  { path: '/services/lead-pipe-replacement', expectedText: 'Lead Pipe Replacement' },
  { path: '/services/leak-repair', expectedText: 'Leak Repair' },
  { path: '/services/leak-detection', expectedText: 'Leak Detection' },
  { path: '/services/impact-moling', expectedText: 'Impact Moling' },
  { path: '/services/insurance-companies', expectedText: 'Insurance Companies' },
  { path: '/services/landlords', expectedText: 'Landlords' },
  { path: '/services/invalid-slug', expectedText: 'Service not found' },
  { path: '/unknown', expectedText: 'Page not found' },
];

describe('App routes', () => {
  it('renders without throwing', () => {
    expect(() =>
      render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>{appRoutes}</Routes>
        </MemoryRouter>
      )
    ).not.toThrow();
  });

  routesToTest.forEach(({ path, expectedText }) => {
    it(`renders content for ${path}`, () => {
      render(
        <MemoryRouter initialEntries={[path]}>
          <Routes>{appRoutes}</Routes>
        </MemoryRouter>
      );
      const re = new RegExp(expectedText, 'i');
      const elements = screen.getAllByText(re);
      expect(elements.length).toBeGreaterThan(0);
      expect(elements[0]).toBeInTheDocument();
    });
  });
});
