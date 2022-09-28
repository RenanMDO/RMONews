import { render, screen } from '@testing-library/react';
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Home, { getStaticProps } from '../../pages';
import { stripe } from '../../services/stripe';


jest.mock('next-auth/react');
jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));
jest.mock('../../services/stripe');

describe('Home page', () => {
  const useSessionMocked = jest.mocked(useSession)
  useSessionMocked.mockReturnValueOnce({
    data: null,
    status: 'unauthenticated'
  });

  it('renders correctly', () => {
    render(<Home product={{ priceId: 'fake-priceId', amount: '$10,00' }} />)

    expect(screen.getByText('for $10,00 month')).toBeInTheDocument()
  });

  it('loads inicial data', async () => {
    const retriveStripePricesMocked = jest.mocked(stripe.prices.retrieve);

    retriveStripePricesMocked.mockResolvedValueOnce({
      id: 'fake-price-id',
      unit_amount: 1000,
    } as any);

    const response = await getStaticProps({})

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            priceId: 'fake-price-id',
            amount: '$10.00'
          }
        }
      })
    )
  });
});